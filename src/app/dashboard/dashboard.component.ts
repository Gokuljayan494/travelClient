import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  activeTab:string = 'Personal Details';
  onTabClick(tab:any){
    this.activeTab = tab;
  }
  constructor(private route:Router , ) { }

  ngOnInit(): void {
  }

}