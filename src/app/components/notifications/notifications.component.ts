import { Component, OnInit, ViewChild} from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { FormControl } from "@angular/forms";
import { HistoryService } from 'src/app/services/history.service';
import { PageHistory } from 'src/app/models/pageHistory';


@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.css"]
})
export class NotificationsComponent implements OnInit {
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  
  history : History[];
  pageHistory : PageHistory ;
  selectedPage : number = 0;

  nameFilter = new FormControl('');
  idFilter = new FormControl('');
  colourFilter = new FormControl('');
  petFilter = new FormControl('');
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['project', 'parameter', 'baseline', 'env','status', 'askDateTime', 'doneDateTime', 'dependence','id'];
  displayedColumns=[];

  constructor(private historyService:HistoryService) {
  }

  ngOnInit() {
    this.historyService.getPageHistory(0).subscribe(page=>this.dataSource.data=page.content);
    this.dataSource.paginator = this.paginator;
  }

  getPageClient(page:number): void {
    this.historyService.getPageHistory(page)
        .subscribe(page => this.dataSource.data = page.content)
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  addColumn() {
      if(this.columnsToDisplay.length < 8){
        let randomItemToDisplay = this.displayedColumns.filter(item=> this.columnsToDisplay.indexOf(item)== -1);
        this.columnsToDisplay.push(randomItemToDisplay[0]);
      }
  }

  removeColumn() {
    if (this.columnsToDisplay.length != 1 ) {
      this.columnsToDisplay.pop();
    }
  }

}
