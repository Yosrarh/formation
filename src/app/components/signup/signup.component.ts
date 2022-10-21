import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup 

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    console.log("hello signup"),
    this.signupForm=this.formBuilder.group(
      {firstname:['',Validators.minLength(3)],
      lastname:[''],
      email:['',[Validators.email,Validators.required ]],
      password:['']
    })
  }

  signup(obj:any){
    console.log(obj);
  }

}
