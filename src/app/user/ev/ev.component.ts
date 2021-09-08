import { Component, OnInit } from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";



@Component({
  selector: 'app-ev',
  templateUrl: './ev.component.html',
  styleUrls: ['./ev.component.scss']
})
export class EvComponent implements OnInit {

  events = [];
  cat = [];
 

  urlImg = "http://localhost/Reservi_backend/uploads/";
  
  id: string;
  totalLength:any;
  page:number = 1;
  
  constructor(private eventService: EventService,
              private router: ActivatedRoute,
              private root: Router
              ) {

                this.root.events.subscribe( event => { 
                  let evt = event instanceof NavigationEnd
            
                    if(evt) {
                      this.id = this.router.snapshot.paramMap.get('id')
            
                      this.eventService.getByCat(this.id).subscribe (
                        (a) => {this.events=a;
                            this.events=a;
            
                            this.totalLength = a.length;
                          }
                      );
                    }
                })
                
                /*this.id = this.router.snapshot.paramMap.get('id');
                //console.log(this.id)
                this.eventService.getByCat(this.id).subscribe (
                a=>{this.events=a;
                this.events=a;
                //console.log(this.events)
                //location.reload();
                });*/

              }

                
  

  ngOnInit() {
    
  }
  
}
