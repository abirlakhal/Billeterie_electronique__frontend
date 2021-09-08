import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageModel } from 'src/app/core/models/message.model';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  mess: MessageModel[] ;
    
    
    userSub: Subscription;
    
    constructor(private messageService: MessageService,
                private router: Router) { }
  
    totalLength:any;
    page:number = 1;
  
    ngOnInit() {

        this.messageService.getAllMessages().subscribe (
         (a)=>{this.mess=a;
         
         
  
         this.totalLength = a.length;
        })
  
    }

    del(id:string) {
        this.messageService.del(id).subscribe(
          d=>{
            window.location.reload()})
    }
    

  }   