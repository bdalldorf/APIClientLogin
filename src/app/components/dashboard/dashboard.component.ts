import { Component, OnInit } from '@angular/core';
import { RestService } from '../../restservice/rest.service';
import { HeaderType } from 'src/app/services/headers.service';
import { RoutesService } from '../../routeservice/routes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  items: any = [];

   constructor(public restService: RestService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.items = [];
    this.restService.get(RoutesService.apiTestGetAll, HeaderType.None).subscribe((data: {}) => {
      console.log(data);
      this.items = data;
    });
  }
}
