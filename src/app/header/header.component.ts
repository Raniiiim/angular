import { Component, OnInit, VERSION} from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass ;

  constructor( ){ }
  ngOnInit(): void {
    
  }

  name='Angular' + VERSION.major;
  myImage:string="../../assets/background/serchengin.svg"
}