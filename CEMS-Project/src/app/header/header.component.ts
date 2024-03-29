import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGuard } from '../_guards';
import { User, Role } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  userFromApi: User;
  // isHidden: boolean = false;
  // isAuth: boolean = false;

  constructor( 
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService, 
    private authGuardService: AuthGuard) { 
      this.userFromApi = this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {

  }

  // check user
  get isSignin() {
    if(this.currentUser != null){
      return true;
    }
    return false;
  }

  get isUser() {
    return this.currentUser && this.currentUser.role === Role.User;
  }

  get isStaff() {
    return this.currentUser && this.currentUser.role === Role.Staff;
  }

  get isAgent() {
    return this.currentUser && this.currentUser.role === Role.Agent;
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
    // const isAuth = this.authGuardService.canActivate;
    // const currentUser = this.authenticationService.currentUserValue;
    // if (currentUser.role == 'User') {
    //   const isHidden = false;
    // }else{
    //   const isHidden = true;
    // }
    window.location.reload();
    // this.router.navigate(['/login']);
}

}
