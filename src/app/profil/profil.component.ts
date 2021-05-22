import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  userDetails;
  
  constructor(private userService: UserService, 
              private router:Router) { }

  ngOnInit() {
    
     
  }

 
}
