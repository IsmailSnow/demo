import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  @Input() checked: boolean; 
  @Output() isAuthenticated:EventEmitter<boolean> = new EventEmitter<boolean>(); 
  post: any = '';
  formGroup:FormGroup;

  constructor(private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.formGroup = this.formBuilder.group({
      'identifiant': [null, [Validators.required]],
      'password': [null, [Validators.required]],
      'validate': ''
    });
  }

  getErrorIdentifiant() {
    return 'Identifiant is required';
  }

  getErrorPassword() {
    return 'Password is required'; 
  }

  login(post){
    console.log(post);
    this.post=post;
    this.checked=true;
    this.isAuthenticated.emit(this.checked);
   }

}
