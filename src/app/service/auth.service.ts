import { Injectable } from '@angular/core';
import axios from 'axios';
import { userModel } from '../models/user.model';


const key_token = 'null';
const user_token = '';
const username = '';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  postClientAPI(){
    const response = axios({
      method: 'post',
      url: 'https://api.unpas.ac.id/klien/login',
      data: {
        kode: 'ridlwan13',
        password: 'dodi841982'
      }
  }).then((response) => 
  response.data
  );
  // console.log(response)
  return response;
   }

   postLoginUser(userModel : userModel){

    const response = axios({
      method: 'post',
      url: 'https://api.unpas.ac.id/pengguna/otorisasi',
      data: {
          token: userModel.token,
          username: userModel.username,
          password: userModel.password
      }
  }).then((response) => response.data);
 //  console.log(response);
  return response;
}

public getToken(): string | null {
  return window.localStorage.getItem(key_token);
}

public getUserToken(): string | null{
  return window.localStorage.getItem(user_token);
}

public saveToken(token: string): void {
  window.localStorage.removeItem(key_token);
  window.localStorage.setItem(key_token, token);
}

public saveUserToken(key_user: string): void {
  window.localStorage.removeItem(user_token);
  window.localStorage.setItem(user_token, key_user);
}

public getUsername(): string | null{
  return window.localStorage.getItem(username);
}

public saveUsername(user: string): void {
  window.localStorage.removeItem(username);
  window.localStorage.setItem(username, user);
}

logout(): void {
  window.localStorage.clear();
}
}
