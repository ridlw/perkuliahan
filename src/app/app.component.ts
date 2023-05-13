import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import {NgForm} from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isLoggedIn = false;

  constructor(private AuthService : AuthService) { 
  }

  ngOnInit(): void {
    if (this.AuthService.getUserToken() !== null) {
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }

  }



  

  
}
