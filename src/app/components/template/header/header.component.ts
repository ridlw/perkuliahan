import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private AuthService : AuthService) { }

  ngOnInit(): void {
  }
  signout():void{
    this.AuthService.logout();
    window.location.reload();
  }
}
