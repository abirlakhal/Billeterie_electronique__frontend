import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from 'src/environments/urls';
import { CatModel } from '../models/cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  readonly Endpoint:string=Urls.base_Url+"cat/"
  constructor(private http: HttpClient) { }

  getAllCat() {
    return this.http.get<CatModel[]>(this.Endpoint);
  }

}
