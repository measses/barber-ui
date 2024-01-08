import { Repository } from "./base-model";

export interface ProductPhoto extends Repository{
  productId:number;
  photoId:number;
}

