import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public employees = [];
  constructor(private registerService : RegisterService) {

  }

  ngOnInit(){
    this.employees = this.registerService.getEmployees();
  }
}
