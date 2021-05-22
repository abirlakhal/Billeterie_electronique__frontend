import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventModel } from '../core/models/event.model';
import { EventService } from '../core/services/event.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  id: string;
  event: EventModel;

  eventSub: Subscription;
  
  urlImg = "http://localhost/Reservi_backend/uploads/";

  constructor(private router: ActivatedRoute,
              private eventService: EventService,
              private _location: Location) { }


  ngOnInit() {

    this.id = this.router.snapshot.paramMap.get('id');
                //console.log(this.id)

               /* this.eventService.getEvent(this.id).subscribe (
                a=>{this.events=a;
                this.events=a;

                //console.log(this.events)
                //location.reload();
                });  */

    this.eventService.getById(this.id).subscribe((ev)=> {
      this.event = ev;
    });
                  
  }

  backClicked() {
    this._location.back();
  }            
      
}


