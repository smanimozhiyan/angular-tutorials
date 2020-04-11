import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName: string;
  public password: string;

  constructor(public router: Router) {}

  ngOnInit() {}

  login() {
    alert(this.userName + ',' + this.password);
    if(this.userName == 'Mani'  && this.password == 'sasi'){
      this.router.navigate(['/home']);
    }else{
      alert('Invalid User name/Password');
    }
  }

  register() {
    console.log('Navigating to registration screen');
    alert('Navigating to registration screen');
    this.router.navigate(['/register']);
  }

  fotgetPassword() {
    console.log('Navigating to forgot password screen');
    alert('Navigating to forgot password screen');
    this.router.navigate(['/forgotpassword']);
  }
}
