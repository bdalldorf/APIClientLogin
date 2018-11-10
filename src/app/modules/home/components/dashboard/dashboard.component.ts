import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../../restservice/rest.service';
import { HeaderType } from 'src/app/restservice/headers.service';
import { RoutesService } from '../../../../routeservice/routes.service';
import { Item } from '../../../../models/item.model';
import { Session } from 'protractor';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  items: Item[] = [];

   constructor(public restService: RestService, private client: HttpClient) {
   }

  ngOnInit() {
   this.getItems();
  }

  public getItems(): void {
    this.restService.get(RoutesService.apiTestGetAll, HeaderType.None).subscribe(items =>
      this.items = items);
  }

  public saveItem(): void {
    this.restService.post(RoutesService.apiTestSave, HeaderType.None, 5).subscribe(items =>
      this.items = items);
  }
}
