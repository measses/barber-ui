import { TimeStampRepository } from "./TimeStampRepository";

export interface Service extends TimeStampRepository{
  name: string;
  duration?: number;
  price?: number;
}
