import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  // registerForm: FormGroup;
  // submitted: false;
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private user:UserService) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }
  //gettter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.registerForm.valid){
      let payload = {
        firstName:this.registerForm.value.firstName,
        lastName:this.registerForm.value.lastName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password
      }
      this.user.Register(payload).subscribe((response:any)=>{
        console.log(response)
      })
    }
    
  }
}
