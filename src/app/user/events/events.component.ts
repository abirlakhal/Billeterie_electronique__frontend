import { Component, OnInit } from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { CatService } from '../../core/services/cat.service';
import { EventModel } from '../../core/models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  //events = [];
  events: EventModel[] ;
  filtretab: EventModel[];
  eventSub: Subscription;
  urlImg = "http://localhost/Reservi_backend/uploads/";
  
  constructor(private eventService: EventService,
              private router: Router,
              private catSservice: CatService) { }

  totalLength:any;
  page:number = 1;

  ngOnInit() {
     this.eventService.getAllEvents().subscribe (
       (a)=>{this.events=a;
       this.events=a;
       this.filtretab = this.events;

       this.totalLength = a.length;
      })

  }
  _n: string;

  set n(a:string)
  {
    this._n=a;
    this.filtrer(a);
  }
  get n(){
  return this._n;
  }
  
  filtrer(a:string){
    this.filtretab=this.events.filter(p=>p.title.indexOf(a)!=-1)
 }

}
