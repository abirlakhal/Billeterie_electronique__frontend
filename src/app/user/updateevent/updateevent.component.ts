import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventModel } from 'src/app/core/models/event.model';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.scss']
})
export class UpdateeventComponent implements OnInit {

  id:any
  event:any
  
    constructor(private route:ActivatedRoute , private eventServie:EventService, private r :Router) { }
  
    ngOnInit(): void {
  
      this.id =+ this.route.snapshot.params.id;
      console.log(this.id);
  
      this.eventServie.getById(this.id).subscribe(
        data=>{console.log(data);
        this.event = data}
      )
    }
    onSubmit(f:NgForm){
      let p:EventModel=f.value;
      p.picture=p.title.replace(" ","");
    this.eventServie.updateevent(this.id,p).subscribe(
    d =>{console.log("modification est faite")}
  )
  this.r.navigateByUrl("/events")
  
    }
  
  }