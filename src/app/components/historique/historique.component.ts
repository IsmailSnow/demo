import { Component, OnInit} from "@angular/core";
import { HistoryService } from 'src/app/services/history.service';
import { PageHistory } from 'src/app/models/pageHistory';
import { History } from 'src/app/models/history';

@Component({
  selector: "app-historique",
  templateUrl: "./historique.component.html",
  styleUrls: ["./historique.component.css"]
})
export class HistoriqueComponent implements OnInit {
  history : History[];
  pageHistory : PageHistory ;
  selectedPage : number = 0;
  getClient(): void {
    this.historyService.getHistory()
        .subscribe(clients => this.history = clients);
  }

  getPageClient(page:number): void {
    this.historyService.getPageHistory(page)
        .subscribe(page => this.pageHistory = page)
  
  }
  constructor(private historyService : HistoryService) { 

  }
  onSelect(page: number): void {
    console.log("selected page : "+page);
    this.selectedPage=page;
    this.getPageClient(page);
  }
  ngOnInit() {
     //this.getClient();
     this.getPageClient(0);
  }
  
  // addColumn() {
  //     if(this.columnsToDisplay.length < 4){
  //       let randomItemToDisplay = this.displayedColumns.filter(item=> this.columnsToDisplay.indexOf(item)== -1);
  //       this.columnsToDisplay.push(randomItemToDisplay[0]);
  //     }
  // }

  // removeColumn() {
  //   if (this.columnsToDisplay.length != 1 ) {
  //     this.columnsToDisplay.pop();
  //   }
  // }
}





