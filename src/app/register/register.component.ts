import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public name:string;
  public dob:Date;
  public email:string;

  constructor() {}

  ngOnInit(){
  }

  submit() {}

  cancel() {}
}
