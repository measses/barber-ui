import { TimeStampRepository } from "./TimeStampRepository";

export interface AppointmentService extends TimeStampRepository{
  appointmentId:number;
  serviceId:number;
  amount:number;
}
