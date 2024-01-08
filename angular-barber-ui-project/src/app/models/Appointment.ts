import { TimeStampRepository } from "./base-stamp-model";

export interface Appointment extends TimeStampRepository{
    userId:number;
    fullName:string | null;
    phoneNumber:string | null;
    email:string | null;
    startDate:string | null;
    endDate:string | null;
    isCompleted:boolean | null;
}
