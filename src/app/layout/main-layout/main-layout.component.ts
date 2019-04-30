import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service' ;

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor(private layoutService: LayoutService ) {
    console.log('Main layout constructor called');
  }

  ngOnInit() {
    this.layoutService.setReady();
  }

}
