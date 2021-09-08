import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }
  
  backClicked() {
    this._location.back();
  } 

}
