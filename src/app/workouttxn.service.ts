import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseurlService } from './baseurl.service';

@Injectable()
export class WorkouttxnService {
  private createWorkoutTxntUrl : string;
  constructor(
    private http: HttpClient,
    private urlProv: BaseurlService
  ) { 
      this.createWorkoutTxntUrl = urlProv.getCompleteServiceUrl("workOutTransaction");
  }

  createWorkoutTxn(workouTxn: any): Observable<any>{
     console.log("workout Transaction data   "+JSON.stringify(workouTxn));
    return this.http.post<any>(this.createWorkoutTxntUrl,workouTxn);
  }

}