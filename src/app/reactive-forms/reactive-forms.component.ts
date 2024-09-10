import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetails } from '../Interfaces/reactive-forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  userForm : FormGroup;
  userDetails : UserDetails[] = []; 
  // Form Builder
  // Create a form to have name, email and password fields where all fields are required
  constructor(private fb: FormBuilder){
    this.userForm = this.fb.group({
        name:["", Validators.required],
        email:["",Validators.required] ,
        password:["",Validators.required]
    })
  }

  ngOnInit():void{
    
  }

  onSubmit():void{
    console.log(this.userForm.value);
  }
}
