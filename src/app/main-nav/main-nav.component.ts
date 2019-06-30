import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { getSymbolIterator } from '@angular/core/src/util';
import { getFirstTemplatePass } from '@angular/core/src/render3/state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  isAuthenticated = false;
  item = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}
  onLogout() {
    localStorage.clear();
    localStorage.setItem('isAuthenticated', '0');
    this.router.navigateByUrl('');
    if ( localStorage.getItem('isAuthenticated') ) {
      window.location.reload();
    }
  }

  onAuthentication(event) {
    this.isAuthenticated = event;
    localStorage.setItem('isAuthenticated', '1' );
  }
  ngOnInit(): void {
    if ( localStorage.getItem('isAuthenticated') === '1' ) {
     this.isAuthenticated = true;
  }




  }


}
