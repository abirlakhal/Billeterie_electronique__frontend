import { Component, OnInit} from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Router } from "@angular/router";
import {Location} from '@angular/common';
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
  
  
  user;
  loggeddIn;
  userDetails;
  token;
  error='';
  
 constructor( private userService: UserService, 
              private router : Router, 
              private formBuilder: FormBuilder,
               private location:Location
             
              ) { 
                this.loggeddIn = localStorage.getItem('state');
              }

  model = {
    email: '',
    password: ''
  };
  
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  bool:boolean=false;

  signupForm: FormGroup;
  signupForm2: FormGroup;
  
  signIn:NgForm;
  
  state:boolean=false;
  
  userId;

 ngOnInit() {


 
    
    //if(this.userService.isLoggedIn())
      
    this.createForm();
    this.createForm2();

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.userId=this.userDetails._id;
        console.log(this.userId);
        console.log("aaaaa"+this.userDetails);
      },
      err => { 
        console.log(err);
        
      }
    );
 }
 
 createForm() {
   this.signupForm = this.formBuilder.group({
     pseudo: ['',[Validators.required, Validators.minLength(4)]],
     email: ['',[Validators.required, this.emailValidator]],
     phone: ['',[Validators.required, Validators.pattern("[0-9 ]{8}")]],
     institute: ['',[Validators.required, Validators.minLength(8)]],
     numC: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
     password: ['',[Validators.required, Validators.minLength(6)]],
     passconf: ['',Validators.required],
     role: ['1']
   }, {validators: passwordMatchValidator })
 } 

 createForm2() {
  this.signupForm2 = this.formBuilder.group({
    pseudo: ['',[Validators.required, Validators.minLength(4)]],
    email: ['',[Validators.required, this.emailValidator]],
    phone: ['',[Validators.required, Validators.pattern("[0-9 ]{8}")]],
    institute: [''],
    numC: [''],
    password: ['',[Validators.required, Validators.minLength(6)]],
    passconf: ['',Validators.required],
     role: ['2']
  }, {validators: passwordMatchValidator })
} 

 emailValidator(control) {
    if (control.value) {
      const matches = control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])[a-z0-9]?/);
      return matches ? null : { 'invalidEmail': true };
    } else {
      return null;
    }
 }

 get f() { return this.signupForm.controls; }
 get f2() { return this.signupForm2.controls; }

  click() {
    this.user = this.signupForm.value;
    this.userService.postUser(this.user).subscribe(
      res => {
        //this.router.navigateByUrl('home');
        //this.router.navigate(['home']);
        alert("Registered")
        location.reload();
      }, error => {
        if (error.error.email = "The email has already been taken.") {
          this.handleErrorEmail(error);
        }
      }  
    )
  }
  handleErrorEmail(error) {
    this.error = "L'adresse mail est déja utilisée par un autre compte.";
  }
  click2() {
    this.user = this.signupForm2.value;
    console.log(this.user)
    this.userService.postUser(this.user).subscribe(
      res => {
        console.log(this.user);
        //this.router.navigateByUrl('home');
        //this.router.navigate(['home']);
        alert("Registered")
        location.reload();
      }
    )
  }
  
  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => { 
        //this.modalClose.nativeElement.click();
        this.userService.setToken(res['token']);
          
          location.reload();
        //this.router.navigateByUrl('/profil');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }  
  

 /*resetForm(form: NgForm){
   this.userService.user = {
     pseudo: '',
     phone: '',
     email: '',
     password: '',
     institute: '',
     numC: '',
     role: '' 
   };
   form.resetForm();
   this.emess = '';
 }*/
 
  reset1(){
    this.signupForm.reset();
  }

  reset2(){
    this.signupForm2.reset();
  }
  
  reset3(s:NgForm){
   s.reset();
  }

 change_user(user)
 {
   this.bool=user===1;
    //same= if(user===1) {this.state=true}
    
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
    this.loggeddIn = undefined;
    this.location.replaceState('/');
    this.router.navigateByUrl('/');
  
  window.location.reload()
    localStorage.clear();
    
  }
  
}

