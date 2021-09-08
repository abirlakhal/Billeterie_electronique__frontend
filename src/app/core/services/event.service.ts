import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from 'src/environments/urls';
import { EventModel } from '../models/event.model';
import { Observable, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class EventService {

  readonly Endpoint:string=Urls.base_Url+"event/"
  
  events: EventModel[];
  eventSubject = new Subject<any[]>(); 

  numberOfEventByPage = 6;

  constructor(private http: HttpClient) { }

  /*createEvent(title: string, date: string, time: string, place: string, picture: string) {
    const event: EventModel = { title: title, date: date, time: time, place: place, picture: picture }
    this.http.post(this.Endpoint+'create', event).toPromise()
  }*/
  
  create(event: EventModel){
    return this.http.post(this.Endpoint+'create' , event );
  }

  emitEvents(): void{
    this.eventSubject.next(this.events);
  }

  getAllEvents(){
   return this.http.get<EventModel[]>(this.Endpoint);
  }

  
  getEvent(id: string): EventModel{
    const event = this.events.find(element => element.id == id);
    if(event){
      return event;
    }
    return null;
  }

  getById(id:String){
   return this.http.get<EventModel>(this.Endpoint+ id );
  }

  getByCat(id: string){
    return this.http.get<EventModel[]>(this.Endpoint+'bycat/'+id);
  }

  del(id: string):Observable<void>{
    return this.http.delete<void>(this.Endpoint+id);
 }

  updateevent(id:string,data:any):Observable<EventModel>{

    return this.http.put<EventModel>(this.Endpoint+id,data)
  }

}
