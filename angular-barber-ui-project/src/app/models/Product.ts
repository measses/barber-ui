import { TimeStampRepository } from "./TimeStampRepository";

export interface Product extends TimeStampRepository{
  categoryId:number;
  name?:string;
  description?:string;
  tags?:string
  price?:number
  isActive?:boolean;
}
