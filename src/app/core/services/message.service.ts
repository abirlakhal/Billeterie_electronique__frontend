import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urls } from 'src/environments/urls';
import { MessageModel } from '../models/message.model';


@Injectable({
  providedIn: 'root'
})

export class MessageService {
  
  message: MessageModel = {
    main:''
  };

  readonly Endpoint:string=Urls.base_Url+"message/"
  constructor(private http: HttpClient) { }

  sendMessage(message: MessageModel){
    return this.http.post(this.Endpoint+'create' , message);
  }
  
}
