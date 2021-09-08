import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  org: UserModel[] ;
    filtretab: UserModel[];
    
    userSub: Subscription;
    
    constructor(private userService: UserService,
                private router: Router) { }
  
    totalLength:any;
    page:number = 1;
  
    ngOnInit() {

        this.userService.getCli().subscribe (
         (a)=>{this.org=a;
         
         this.filtretab = this.org;
  
         this.totalLength = a.length;
        })
  
    }
    _n: string;
  
    set n(a:string)
    {
      this._n=a;
      this.filtrer(a);
    }
    get n(){
    return this._n;
    }
    
    filtrer(a:string){
      this.filtretab=this.org.filter(p=>p.pseudo.indexOf(a)!=-1)
   }
   del(id:string) {
    this.userService.del(id).subscribe(
      d=>{
        window.location.reload()})
  }

}
