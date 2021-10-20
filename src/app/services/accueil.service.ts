import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {jsPDF} from 'jspdf'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {

  baseUrl = environment.DATABASE_URL
  httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http: HttpClient) { }

  totalDepense(): Observable<any>{
    return this.http.get(this.baseUrl+ 'totaldepense',
    {headers : this.httpHeaders});
  }
}
