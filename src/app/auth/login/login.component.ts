import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string = '';

  roles!: string[];

  constructor(){
    this.roles = [
      'admin',
      'user'
    ]
  }

  ngOnInit(){

  }

  login(){

  }
}
