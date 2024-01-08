import { TimeStampRepository } from "./base-stamp-model";

export interface AppointmentService extends TimeStampRepository{
  appointmentId:number;
  serviceId:number;
  amount:number;
}
