import { Repository } from "./Repository";

export interface User extends Repository {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  passwordHash: string | null;
  passwordSalt: string | null;
  imageUrl: string  | null;

}


