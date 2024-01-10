import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserForLoginDto } from "../dtos/user-for-login-dto";
import { Observable } from "rxjs";
import { DataResponse } from "../models/responses";
import { User } from "../models/user";
import { environment } from "../environments/environment";
import { UserForCreateDto } from "../dtos/user-for-create-dto";
@Injectable({providedIn:'root'})
export class UserService{

    constructor(private httpClient:HttpClient){}

    getAll():Observable<DataResponse<User[]>>{
        return this.httpClient.get<DataResponse<User[]>>(environment.getApiUrl("/users/get-all"))
    }
    getUserById(id:number):Observable<DataResponse<User>>{
      return this.httpClient.get<DataResponse<User>>("http://api.bysalon.com.tr/users/get-by-id/"+id)
  }

  addUser(createUser:UserForCreateDto):Observable<DataResponse<UserForCreateDto>>{
      return this.httpClient.post<DataResponse<UserForCreateDto>>("http://api.bysalon.com.tr/users/create",createUser);
  }
}
