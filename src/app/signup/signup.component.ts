import { Component , OnInit, VERSION} from '@angular/core';
import { Router } from '@angular/router';
import { faAt ,faUser, faLock  , faCheck} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  faAt = faAt;
  faUser = faUser;
  faLock = faLock ; 
  faCheck = faCheck;
  constructor(private router : Router ){ }
  ngOnInit(): void {
    
  }
  name='Angular' + VERSION.major;
  myImage:string="../../assets/background/bb.png"
}
