import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Urls } from 'src/environments/urls';
import { ClientModel } from '../models/client.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  client: ClientModel = {
    pseudo: '',
    email: '',
    phone:'' ,
    password: '',
    institute: '',
    numC:'',
    role: ''
  };
  
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  readonly Endpoint:string=Urls.base_Url+"user/"

  constructor(private http: HttpClient) { }


  postUser(client: ClientModel){
    return this.http.post(this.Endpoint+'register' , client, this.noAuthHeader);
  }

}
