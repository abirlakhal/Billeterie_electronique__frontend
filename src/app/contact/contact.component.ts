import { Component, OnInit } from '@angular/core';
import { MessageService } from '../core/services/message.service';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { MessageModel } from '../core/models/message.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  txtValue:string = null;
  m : boolean = false;
  message: MessageModel;
  

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    
  }

  onTextChange(value)
  {
    this.txtValue = value;

    /*if(this.txtValue =='')
    {
      this.m = true;
    }*/
  } 

  onSubmit(form: NgForm) {
      let mess = this.messageService.sendMessage(form.value).subscribe(
      res => {
        if (!this.txtValue) 
         alert("message is empty");
        else
        alert("Message envoyer");
        
        this.resetForm(form);
      },
      err => {}
    );
  }

  resetForm(form: NgForm) {
    this.messageService.message = {
      main: ''
    };
    form.resetForm();
  }
}
