import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/core/models/user.model';
import { CatModel } from '../../core/models/cat.model';
import { CatService } from '../../core/services/cat.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  cat = [];
  user: UserModel;
  loggeddIn;
  userDetails;

  constructor(private catService:CatService, private router : Router) { 
    this.loggeddIn = localStorage.getItem('state');
  }

  ngOnInit() {
    this.catService.getAllCat().subscribe (
      a =>{this.cat=a;
      this.cat=a; 
    });
  }
  
}
