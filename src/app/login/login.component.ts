import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';

import { faAt , faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
faAt = faAt;
faLock = faLock ; 
constructor( private router : Router ){ }
 ngOnInit(): void {
 
}

name='Angular' + VERSION.major;
myImage:string="../../assets/background/bb.png"
}
