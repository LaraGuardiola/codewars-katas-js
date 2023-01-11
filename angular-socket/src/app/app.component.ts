import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConnectService } from './services/connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  @ViewChild('input') input: ElementRef | any
  constructor(protected connectService: ConnectService){}
}


 



