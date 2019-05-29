import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  
  constructor(private http: HttpClient) { }
  

  

  getLocations():   Observable<any> {
    
   /* var username = u;
    var password = p;
    var all = username + ':' + password;
    var all_crypted = btoa(all);
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Basic' + all_crypted);*/
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization','Basic YWxpOmFsaQ==');
    return this.http.get('http://185.181.160.12:8086/emplacements/pending',{ headers: myHeaders, withCredentials: true});
  }
  approveLocation(id):   Observable<any>{
    let postData = { }
    /*var username = u;
    var password = p;
    var all = username + ':' + password;
    var all_crypted = btoa(all);*/
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization','Basic YWxpOmFsaQ==');
    return this.http.patch('http://185.181.160.12:8086/emplacements/'+id+'/approve',postData,{ headers: myHeaders, withCredentials: true});
  }
  ignoreLocation(id){
    /*var username = u;
    var password = p;
    var all = username + ':' + password;
    var all_crypted = btoa(all);*/
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization','Basic YWxpOmFsaQ==');
    return this.http.put('http://185.181.160.12:8086/emplacements/'+id+'/ignore',{ headers: myHeaders, withCredentials: true});
  }
}
