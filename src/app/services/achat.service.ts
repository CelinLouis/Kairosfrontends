import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AchatService {

  baseUrl = environment.DATABASE_URL
  httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http: HttpClient) { }

  getAllCommande(): Observable<any>{
    return this.http.get(this.baseUrl + '/commandes/',
    {headers : this.httpHeaders});
  }
}
