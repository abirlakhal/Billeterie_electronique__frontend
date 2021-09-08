import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventModel } from 'src/app/core/models/event.model';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-allevent',
  templateUrl: './allevent.component.html',
  styleUrls: ['./allevent.component.scss']
})
export class AlleventComponent implements OnInit {

  //events = [];
  events: EventModel[] ;
  filtretab: EventModel[];
  eventSub: Subscription;
  urlImg = "http://localhost/Reservi_backend/uploads/";
  
  constructor(private eventService: EventService) { }

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

 del(id:string) {
  this.eventService.del(id).subscribe(
    d=>{
      window.location.reload()})
}

}
