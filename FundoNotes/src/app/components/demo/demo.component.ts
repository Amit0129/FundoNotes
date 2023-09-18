import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  demoForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    
    this.demoForm = this.formBuilder.group({
      name: [''] 
    });
  }


  printData() {
    console.log(this.demoForm.value.name);
    
  }
  }

