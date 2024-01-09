import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserForLoginDto } from "../dtos/user-for-login-dto";
import { DataResponse } from "../models/responses";
import { Observable } from "rxjs";
@Injectable({providedIn:'root'})
export class AuthService{

    constructor(private httpClient:HttpClient){}

    login(userForLoginDto:UserForLoginDto):Observable<DataResponse<string>>{
        return this.httpClient.post<DataResponse<string>>("http://api.bysalon.com.tr/auth/login",userForLoginDto)
    }
}
