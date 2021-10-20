import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  baseurl = environment.DATABASE_URL
  httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  constructor(private http: HttpClient) { }

  getOneClient(id:any): Observable<any>{
    console.log(id);
    return this.http.get(this.baseurl+ '/clients/' + id +'/',
    {headers : this.httpHeaders});
  }
}
