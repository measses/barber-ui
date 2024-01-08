import { Repository } from "./Repository";

export interface UserWorkingRange extends Repository{
  userId: number ;
  dayOfWeek: number | null ;
  startTime: string | null ;
  endTime: string | null ;
}
