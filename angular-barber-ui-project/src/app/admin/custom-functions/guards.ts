import { CanActivateFn, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export const isLoginGuard:CanActivateFn  = (route, state):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    return false
}
