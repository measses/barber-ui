import { inject } from "@angular/core";
import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export const isLoginGuard: CanActivateFn = (route, state): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const router = inject(Router);
  let isLogin = localStorage.getItem("token")!=null;
  if(!isLogin){
    router.navigateByUrl('/admin/login');
  }
  return isLogin
}

export const isLogoutGuard: CanActivateFn = (route, state): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const router = inject(Router);
  let isLogout = localStorage.getItem("token")!=null;
  if(!isLogout){
    router.navigateByUrl('/admin/home');
  }
  return isLogout
}
