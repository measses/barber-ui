import { TimeStampRepository } from "./base-stamp-model";

export interface Order extends TimeStampRepository{
  fullName?:string;
  phoneNumber?:string;
  email?:string;
  cargoBranch?:string;
  sendDate?:string;
  sendCode?:string;
  isSend?:boolean;
  isCancel?:boolean;
  canceledAt?:string;
  canceledUser?:number;
}
