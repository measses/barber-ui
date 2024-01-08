import { inject } from "@angular/core";
import { CanActivateFn, UrlTree } from "@angular/router";
import { Router } from "express";
import { Observable } from "rxjs";

export const isLoginGuard:CanActivateFn  = (route, state):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {

    return false
}
