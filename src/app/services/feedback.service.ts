import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http : HttpClient) { }

  getFeedback() : Observable<any> {
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Basic YWxpOmFsaQ==');
    return this.http.get('http://185.181.160.12:8086/reclamations', { headers: myHeaders, withCredentials: true });
  }
}
