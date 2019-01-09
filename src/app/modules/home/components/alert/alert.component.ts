import { Component, OnInit, OnDestroy  } from '@angular/core';
import { AlertService } from 'src/app/core/services/alertservice/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
      this.subscription = this.alertService.getMessage().subscribe(message => {
          this.message = message;
      });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
