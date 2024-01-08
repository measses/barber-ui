import { inject } from "@angular/core";
import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export const isLoginGuard: CanActivateFn = (route, state): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  return true;
  const router:Router = inject(Router);
  let isLogin = Math.random();
  if (isLogin == 0) {
    router.navigateByUrl('admin/login');
  }
  return isLogin==1;
}
