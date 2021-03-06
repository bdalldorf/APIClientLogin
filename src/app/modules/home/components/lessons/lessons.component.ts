import { Component, OnInit } from '@angular/core';

import { RestService } from '../../../../restservice/rest.service';
import { HeaderType } from 'src/app/core/services/headers.service';
import { RoutesService } from '../../../../routeservice/routes.service';
import { Item } from '../../../../models/item.model';
import { SessionQuery } from 'src/app/state';
@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  items: Item[] = [];
  constructor(public restService: RestService, public sessionQuery: SessionQuery) {
  }
  ngOnInit() {
    this.getItems();
  }

  public getItems(): void {
    this.restService.get(RoutesService.apiExampleGetAll, HeaderType.None).subscribe(items =>
      this.items = items);
  }

}
