import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageModel } from 'src/app/core/models/message.model';
import { MessageService } from 'src/app/core/services/message.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-messaged',
  templateUrl: './messaged.component.html',
  styleUrls: ['./messaged.component.scss']
})
export class MessagedComponent implements OnInit {
  
  id: string;
  message: MessageModel

  constructor(private router: ActivatedRoute,
              private messageService: MessageService,
              private _location: Location,
              private root :Router) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.messageService.getById(this.id).subscribe((mes)=> {
      this.message = mes;
    });
  }

  backClicked() {
    this._location.back();
  }  

}
