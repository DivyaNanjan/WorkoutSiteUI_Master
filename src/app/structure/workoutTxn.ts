import { Workout } from './workout'; 
import { DlDateAdapter, DlDateAdapterNative } from 'angular-bootstrap-datetimepicker';

export class WorkoutTxn {
    startTime: string ;
    endTime: string ;
    duration: number;
    calBurnt: string;
    workOut: Workout;
  }