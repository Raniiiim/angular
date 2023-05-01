import { Component , OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import { faDashboard } from'@fortawesome/free-solid-svg-icons';
import { faShop } from'@fortawesome/free-solid-svg-icons';
import { faContactBook } from'@fortawesome/free-solid-svg-icons';
import { faHand , faAdd} from'@fortawesome/free-solid-svg-icons';
import { faChartBar, faSignOut ,faBell, faListSquares , faChartPie} from'@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  faChartPie = faChartPie ;
  faBell =faBell;
  faListSquares = faListSquares;
 faDashboard = faDashboard;
 faShop = faShop;
 faContactBook = faContactBook;
 faHand = faHand;
 faChartBar = faChartBar;
 faAdd = faAdd;
 faSignOut = faSignOut ;

constructor( private router: Router){ }
ngOnInit(): void {
  
}
}