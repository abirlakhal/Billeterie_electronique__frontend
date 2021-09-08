import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserModel } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-updateprofil',
  templateUrl: './updateprofil.component.html',
  styleUrls: ['./updateprofil.component.scss']
})
export class UpdateprofilComponent implements OnInit {
  
  message = '';
  user = new UserModel();
  id:string;
  editForm:FormGroup;



  constructor(private router: ActivatedRoute,
              private root : Router,
              private userService: UserService,
              private formBuilder:FormBuilder,
              private _location: Location) { }

  ngOnInit() {
 this.FormValidation();

 this.router.paramMap.subscribe((params: ParamMap) => {
  this.id = params.get('id');

  this.getDataById(this.id);
});

  

  }
  
  private FormValidation(){
    this.editForm =this.formBuilder.group({
      id: [null],
      pseudo: [''],
      email:[''],
      phone:[''] ,
      password: [''],
      role:2
    });

  }

  getDataById(id){
    this.userService.getById(id).subscribe((data)=>{
      console.log(data)
      this.editForm.patchValue(data)
    })
  }
  updateCli(){
    this.userService.updateUser(this.id,this.editForm.value)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The user was updated successfully!';
          this.root.navigate(['/cliprofil/'+this.id]);
        },
        error => {
          console.log(error);
        });
  }

  backClicked() {
    this._location.back();
  }

}

