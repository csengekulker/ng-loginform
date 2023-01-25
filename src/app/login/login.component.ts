import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = new FormControl('');
  password = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(event: any) {
    if (event.key == "Enter") {
      //login attempt
    }
    
  }

}
