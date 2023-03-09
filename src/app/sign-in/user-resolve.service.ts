import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SignInComponent } from './sign-in.component';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<any> {

  constructor(private _token: SignInComponent) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._token.tokenDataProfile?.data.user.role;
  }
}
