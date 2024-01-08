import { Repository } from "./Repository";

export interface OrderProduct extends Repository{
  orderId:number;
  productId:number;
  amount:number;
}
