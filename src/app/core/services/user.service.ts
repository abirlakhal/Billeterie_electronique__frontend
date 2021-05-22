import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from 'src/environments/urls';
import { UserModel } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})

export class UserService {
    user: UserModel = {
      pseudo: '',
      email: '',
      phone:'' ,
      password: '',
      institute: '',
      numC:''
    };

    noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  readonly Endpoint:string=Urls.base_Url+"user/"
  constructor(private http: HttpClient) { }

/*
  createUser(pseudo: string, email: string, phone: string,  institute: string, numC: string, password: string) {
    const user: UserModel = { pseudo: pseudo, email: email, phone: phone, institute: institute, numC: numC, password: password }
    this.http.post(this.Endpoint+'register', user).toPromise()
  }
*/
postUser(user: UserModel){
  return this.http.post(this.Endpoint+'register' , user, this.noAuthHeader);
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

  get(url: string) {

  }

  delete(url: string){

  }
  getUserProfile() {
    return this.http.get(this.Endpoint+'userProfil');
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
}