import { Component, OnInit } from '@angular/core';
import { SessionQuery } from '../../session/session.query';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn$ = this.sessionQuery.isLoggedIn$;
​
  constructor(private sessionQuery: SessionQuery) {}

  ngOnInit() {
  }

}
