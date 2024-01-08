import { Repository } from "./Repository";

export interface ProductPhoto extends Repository{
  productId:number;
  photoId:number;
}

