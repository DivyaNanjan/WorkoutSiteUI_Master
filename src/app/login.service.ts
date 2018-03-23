import { Injectable } from '@angular/core';
import {BaseurlService} from './baseurl.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { log } from 'util';

@Injectable()
export class LoginService {

  private loginUrl : string;
  constructor(
    private http: HttpClient,
    private urlProv: BaseurlService
  ) { 
    this.loginUrl = urlProv.getCompleteServiceUrl("user/login");
  }

  login(emailId: string, password: string): Observable<any>{
    let body =""
    let headers = new HttpHeaders()
            .set('emailId', emailId)
            .set('password', password);
       console.log({headers})
    return this.http.post<any>(this.loginUrl, body, {headers});
  }

}
