import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm !: FormGroup;
  submmited = false;
  constructor(private frombuilder:FormBuilder){}
  ngOnInit(){
    this.loginForm = this.frombuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }
}
