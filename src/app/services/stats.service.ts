import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }
  getStats():   Observable<any> 
  {
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization','Basic YWxpOmFsaQ==');
    return this.http.get('http://185.181.160.12:8086/admin/stats',{ headers: myHeaders, withCredentials: true});
  }
}
