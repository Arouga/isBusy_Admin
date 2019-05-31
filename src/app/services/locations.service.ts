import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  
  constructor(private http: HttpClient) { }
  

  

  getEmplacements():   Observable<any> 
  {
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization','Basic YWxpOmFsaQ==');
    return this.http.get('http://185.181.160.12:8086/emplacements/pending',{ headers: myHeaders, withCredentials: true});
  }
  approveEmplacement(id):   Observable<any>
  {
    let postData = { }
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization','Basic YWxpOmFsaQ==');
    return this.http.post('http://185.181.160.12:8086/emplacements/'+id+'/approve',postData,{ headers: myHeaders, withCredentials: true});
  }
  ignoreEmplacement(id){
    let postData = { }
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization','Basic YWxpOmFsaQ==');
    return this.http.post('http://185.181.160.12:8086/emplacements/'+id+'/ignore',postData,{ headers: myHeaders, withCredentials: true});
  }
}
