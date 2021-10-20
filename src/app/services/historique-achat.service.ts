import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Historique } from '../models/historique.model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.DATABASE_URL

const httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

@Injectable({
  providedIn: 'root'
})
export class HistoriqueAchatService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get<any[]>(baseUrl + '/historiques/',
    {headers: httpHeaders});
  }

  getDepense(): Observable<any> {
    return this.http.get<any[]>(baseUrl + '/depenses',
    {headers: httpHeaders});
  }


  getAll(): Observable<Historique[]> {
    return this.http.get<Historique[]>(baseUrl + '/historiques/',
    {headers: httpHeaders});
  }

  get(id: any): Observable<any> {
    return this.http.get(baseUrl + '/historiques/' + id + '/',
    {headers: httpHeaders});
  }

}
