import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { UserService } from 'src/app/core/services/user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserModel } from 'src/app/core/models/user.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updateorg',
  templateUrl: './updateorg.component.html',
  styleUrls: ['./updateorg.component.scss']
})
export class UpdateorgComponent implements OnInit {

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
      institute: [''],
      numC: [''],
      password: [''],
      role:1
    });

  }

  getDataById(id){
    this.userService.getById(id).subscribe((data)=>{
      console.log(data)
      this.editForm.patchValue(data)
    })
  }
  updateOrg(){
    this.userService.updateUser(this.id,this.editForm.value)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The user was updated successfully!';
          this.root.navigate(['/orgprofil/'+this.id]);
        },
        error => {
          console.log(error);
        });
  }

  backClicked() {
    this._location.back();
  }

}
