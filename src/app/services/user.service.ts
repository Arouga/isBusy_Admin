import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Basic YWxpOmFsaQ==');
    return this.http.get(environment.api+'/users/me', { headers: myHeaders, withCredentials: true });
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getListeUsers(): Observable<any> {

    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Basic YWxpOmFsaQ==');
    return this.http.get(environment.api+'/users', { headers: myHeaders, withCredentials: true });
  }

  getProfile(): Observable<any> {

    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Basic YWxpOmFsaQ==');
    return this.http.get(environment.api+'/users/me', { headers: myHeaders, withCredentials: true });
  }


  editProfile(data): Observable<any> {

    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Basic YWxpOmFsaQ==');
    return this.http.post(environment.api+'/users/update',data, { headers: myHeaders, withCredentials: true });
  }



}



