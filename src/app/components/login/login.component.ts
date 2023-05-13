import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  form: any = {
    username: null,
    password: null
  }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private AuthService: AuthService, private fb : FormBuilder) { 
  }

  ngOnInit(): void {
  }

  login(){
    const resClient = this.AuthService.postClientAPI();
    resClient.then(dataClient=>{
      const token = dataClient.result.token;
      // sessionStorage.setItem("token", token);
      this.AuthService.saveToken(token);
      const {username, password} = this.form;
      const credenstial = {token, username, password};
      const resUser = this.AuthService.postLoginUser(credenstial);
        resUser.then(dataUser =>{
          dataUser
          console.log(dataUser)
          const otorisasi = dataUser.result.otorisasi
          if (otorisasi) {
            this.isLoggedIn = true;
            const user_token = dataUser.result.user_token
            this.AuthService.saveUserToken(user_token); //user_token isinya username
            this.AuthService.saveUsername(username);
            window.location.reload();
          }else{
            this.isLoginFailed = true;
            this.isLoggedIn = false;
            this.errorMessage = dataUser.message
            
          }
        })
    })
  
  }

}
