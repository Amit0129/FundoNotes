import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm !: FormGroup;
  submmited = false;
  constructor(private frombuilder:FormBuilder,private user:UserService){}
  ngOnInit(){
    this.loginForm = this.frombuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
    //gettter for easy access to form fields
    get f() {
      return this.loginForm.controls;
    }
  onSubmit(){
    if(this.loginForm.valid){
      let payload ={
        email : this.loginForm.value.email,
        password : this.loginForm.value.password
      }
      console.log(payload);
      this.user.Login(payload).subscribe((response:any)=>{
        console.log(response)
        localStorage.setItem('token',response.data.token)
      })
    }
  }
}
