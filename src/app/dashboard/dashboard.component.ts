import { Component, OnInit } from '@angular/core';
import { DashboardService } from './service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})

export class DashboardComponent implements OnInit {

  info: string = "nothing here";

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getDashboardInfo();
  }

  getDashboardInfo() {
    const dashboard$ = this.dashboardService.getDashboardInfo();
    dashboard$.subscribe(
      res => this.info = res,
      err => this.info = err,
      () => console.log("getDashboardInfo() completed"),
    )
  }

}
