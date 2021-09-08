import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-cliprofil',
  templateUrl: './cliprofil.component.html',
  styleUrls: ['./cliprofil.component.scss']
})
export class CliprofilComponent implements OnInit {

  id: string;
  client: UserModel;
  
    constructor(private router: ActivatedRoute,
                private userService: UserService,
                private _location: Location) { }
  
    ngOnInit() {
      this.id = this.router.snapshot.paramMap.get('id');
      this.userService.getById(this.id).subscribe((cl)=> {
        this.client = cl;
      });
  
    }
  
    backClicked() {
      this._location.back();
    }  

}
