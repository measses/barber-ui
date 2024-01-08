import { TimeStampRepository } from "./TimeStampRepository";

export interface Appointment extends TimeStampRepository{
    userId:number;
    fullName?:string;
    phoneNumber?:string;
    email?:string
    startDate?:string
    endDate?:string
    isCompleted?:boolean;
}
