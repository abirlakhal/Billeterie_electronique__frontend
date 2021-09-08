import { Component, OnInit } from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { CatService } from '../../core/services/cat.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  
  events = [];
  urlImg = "http://localhost/Reservi_backend/uploads/";
  eventSub: Subscription;
  constructor(private eventService: EventService,
              private router: Router,
              private catSservice: CatService) { 
              }

  ngOnInit() {
     this.eventService.getAllEvents().subscribe (
       a=>{this.events=a;
       this.events=a;
      });
  }

}
