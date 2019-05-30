import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getUsers(u, p) : Observable<any> {
    var username = u;
    var password = p;
    var all = username + ':' + password;
    var all_crypted = btoa(all);
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Basic' + all_crypted);
    return this.http.get('http://185.181.160.12:8086/users/me',{ headers: myHeaders, withCredentials: true});  }
}

  
