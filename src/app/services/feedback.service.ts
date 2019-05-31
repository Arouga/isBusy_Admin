import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http : HttpClient) { }

  getFeedback() : Observable<any> {
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Basic YWxpOmFsaQ==');
    return this.http.get(environment.api+'/reclamations', { headers: myHeaders, withCredentials: true });
  }
}
