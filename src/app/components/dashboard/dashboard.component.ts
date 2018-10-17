import { Component, OnInit } from '@angular/core';
import { RestService } from '../../restservice/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: any = [];

   constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.items = [];
    this.rest.getItems().subscribe((data: {}) => {
      console.log(data);
      this.items = data;
    });
  }

}
