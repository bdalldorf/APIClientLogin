import { Component, OnInit } from '@angular/core';

import { RestService } from '../../../../restservice/rest.service';
import { HeaderType } from 'src/app/core/services/headers.service';
import { RoutesService } from '../../../../routeservice/routes.service';
import { Item } from '../../../../models/item.model';
import { SessionQuery, SessionService } from 'src/app/session';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  items: Item[] = [];
  number: number;

   constructor(public restService: RestService, public sessionQuery: SessionQuery, private sessionService: SessionService) {
   }

  ngOnInit() {
   this.getItems();
  }

  public getItems(): void {
    this.restService.get(RoutesService.apiTestGetAll, HeaderType.None).subscribe(items =>
      this.items = items);
  }

  public saveItem(): void {
    this.restService.post(RoutesService.apiTestSave, HeaderType.None, 5).subscribe(item =>
      this.number = item);
    }
}
