import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Urls } from 'src/environments/urls';
import { UserModel } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  user = new UserModel();
  
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  
  orgs: UserModel[];
  orgSubject = new Subject<any[]>(); 
  token ;
  use: UserModel;

 
  readonly Endpoint:string=Urls.base_Url+"user/"

  constructor(private http: HttpClient) { }

  /*
    createUser(pseudo: string, email: string, phone: string,  institute: string, numC: string, password: string) {
      const user: UserModel = { pseudo: pseudo, email: email, phone: phone, institute: institute, numC: numC, password: password }
      this.http.post(this.Endpoint+'register', user).toPromise()
    }
  */

  postUser(data){
    return this.http.post(this.Endpoint+'register' , data, this.noAuthHeader);
  }
  
  getAllUsers(){
    return this.http.get<UserModel[]>(this.Endpoint);
   }

  /*createUser(user: UserModel) {
    this.http.post(this.Endpoint+'register', user);
  }*/

  login(authCred) {
    //return  this.http.post(this.Endpoint+'login', {email: email, password: password}).toPromise()
    return this.http.post(this.Endpoint + 'authenticate', authCred, this.noAuthHeader);
  }

  /*/logout() {
    this.http.get(this.Endpoint+'logout', {}).toPromise()
  }*/

  
  getUserProfile() {
    return this.http.get(this.Endpoint+'userProfil');
  }
  
  getById(id:String){
    return this.http.get<UserModel>(this.Endpoint+'/user/'+id);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('state', 'true');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('state');
  }

  getUserPayload() {
    //var token = localStorage.getItem('token');
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }else
      return null;
  }

  isLoggedIn(){
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() /1000;
    else
      return false;
  }

  getOrg(){
    return this.http.get<UserModel[]>(this.Endpoint+'org');
  }

  getCli(){
    return this.http.get<UserModel[]>(this.Endpoint+'cli');
  }
  
  del(id: string):Observable<void>{
     return this.http.delete<void>(this.Endpoint+id);
  }

  updateUser(id:string,data:any):Observable<UserModel>{

    return this.http.put<UserModel>(this.Endpoint+id , data)
  }
  
  setter(u:UserModel){
    this.use=u;
  }

  getter(){
    return this.use;
  } 
}