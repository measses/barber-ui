import { Repository } from "./base-model";

export interface Leave extends Repository{
  userId:number;
  startDate?:string;
  endDate?:string;
}
