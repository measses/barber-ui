import { Repository } from "./base-model";

export interface TimeStampRepository extends Repository {
  createdAt: string;
  createdUser: number;
  updatedAt: string;
  updatedUser: number;
  isUpdated: boolean;
  deletedAt: string;
  deletedUser: number;
  isDeleted: boolean;
}
