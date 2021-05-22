import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router"; 
import { UserService } from '../core/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private userService : UserService , private router : Router){} 
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.userService.isLoggedIn()) {
        this.router.navigateByUrl('/login');
        this.userService.deleteToken();
        return false;
      }
    return true;
  }
}
