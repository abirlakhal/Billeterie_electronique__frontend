import { Component, OnInit} from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { passwordMatchValidator } from './helper-match';
import { UserModel } from '../../core/models/user.model';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  
  signup: FormGroup;
  user: UserModel;
  loggeddIn;
  userDetails;

  
 constructor( private userService: UserService, 
              private router : Router, 
              private formBuilder: FormBuilder,
              
              ) { 
                this.loggeddIn = localStorage.getItem('state');}

  model = {
    email: '',
    password: ''
  };

  
  emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  emess: string;
  smess: boolean;

  role:boolean=false;
  
  signupForm: FormGroup;
  
  submitted = false; 
  state:boolean=false;

  

 ngOnInit() {
    
    //if(this.userService.isLoggedIn())
      
    this.createForm();

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { 
        console.log(err);
        
      }
    );
 }
 
 createForm() {
   this.signupForm = this.formBuilder.group({
     pseudo: ['',[Validators.required, Validators.minLength(6)]],
     email: ['',[Validators.required, this.emailValidator]],
     phone: ['',Validators.minLength(8)],
     institute: ['',Validators.minLength(6)],
     numC: ['',Validators.minLength(8)],
     password: ['',[Validators.required, Validators.minLength(6)]],
     passconf: ['',Validators.required]
   }, {validators: passwordMatchValidator })
 }
 
 emailValidator(control) {
  if (control.value) {
    const matches = control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
    return matches ? null : { 'invalidEmail': true };
  } else {
    return null;
  }
}

 get f() { return this.signupForm.controls; }
  
 click() {
   this.user = this.signupForm.value;
   this.userService.postUser(this.user).subscribe(
     res => {
       //this.router.navigateByUrl('home');
       //this.router.navigate(['home']);
       alert("Registered")
       location.reload();
     }
   )
 }
  /* click(form : NgForm){
    this.userService.postUser(form.value).subscribe(
      res => { this.smess = true;
        setTimeout(() => this.smess = false,400);
        this.resetForm(form);
      },
      err => {
        if (err.status == 422){
          this.emess = err.error.join('<br/>');
        } else
          this.emess = 'wrong into server plesa contact admin';
      }
    );
  }*/

 onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => { 
        //this.modalClose.nativeElement.click();
        this.userService.setToken(res['token']);
        location.reload();
        //this.router.navigateByUrl('/profil');  
      
      },
      err => {
        this.emess = err.error.message;
      }
    );
  }  

 resetForm(form: NgForm){
   this.userService.user = {
     pseudo: '',
     phone: '',
     email: '',
     password: '',
     institute: '',
     numC: '' 
   };
   form.resetForm();
   this.emess = '';
 }

 change_user(user)
 {
   this.role=user===1;
    //same= if(user===1) {this.role=true}
    
 }
 


 toggle(){
   if(this.state){
      document.getElementById("password").setAttribute("type", "password");
      this.state = false;
   }else{
    document.getElementById("password").setAttribute("type", "text");
    this.state = true;
   }
 }

 toggle2(){
   if(this.state){
     document.getElementById("passconf").setAttribute("type", "password");
     this.state = false;
    }else{
      document.getElementById("passconf").setAttribute("type", "text");
      this.state = true;
    }
  }

  toggle3(){
    if(this.state){
      document.getElementById("password2").setAttribute("type", "password");
      this.state = false;
     }else{
       document.getElementById("password2").setAttribute("type", "text");
       this.state = true;
     }
  }

  toggle4(){
    if(this.state){
      document.getElementById("passconf2").setAttribute("type", "password");
      this.state = false;
     }else{
       document.getElementById("passconf2").setAttribute("type", "text");
       this.state = true;
     }
  }

  toggle5(){
    if(this.state){
      document.getElementById("password3").setAttribute("type", "password");
      this.state = false;
     }else{
       document.getElementById("password3").setAttribute("type", "text");
       this.state = true;
     }
  }
  
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/home']);
    location.reload();
  }

}
