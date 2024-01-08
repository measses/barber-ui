import { Repository } from "./Repository";

export interface Leave extends Repository{
  userId:number;
  startDate?:string;
  endDate?:string;
}
