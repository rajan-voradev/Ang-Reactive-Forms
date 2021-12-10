import { Component, OnInit } from '@angular/core';
//1
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    //1
    // this.myForm = new FormGroup({
    //   name: new FormControl('Sammy'),
    //   email: new FormControl(''),
    //   message: new FormControl('')
    // });
    this.myForm = this.fb.group({
      name: ['Rajan', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  title = 'reactive-forms';
  
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
}
