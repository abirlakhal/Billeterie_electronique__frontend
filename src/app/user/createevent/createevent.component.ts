import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CatModel } from 'src/app/core/models/cat.model';
import { EventModel } from 'src/app/core/models/event.model';
import { CatService } from 'src/app/core/services/cat.service';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.scss']
})
export class CreateeventComponent implements OnInit {
  event: EventModel;
  cat = [];

  constructor(private eventService:EventService, private route: Router, private router:Router, private catService : CatService) { }

  ngOnInit() {
    this.catService.getAllCat().subscribe (
      a =>{this.cat=a;
      this.cat=a; 
    });
  }

  AddEvent(addForm: NgForm) {

    console.log(addForm.value);
    this.eventService.create(addForm.value).subscribe(
      (res: EventModel) => {
        //console.log(res);
        addForm.reset();//restaure les valeurs par défaut des éléments du formulaire.
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();// vider le form
      }
    );
    this.route.navigateByUrl("/")
  }
  

}
