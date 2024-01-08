import { TimeStampRepository } from "./base-stamp-model";

export interface Service extends TimeStampRepository{
  name: string;
  duration?: number;
  price?: number;
}
