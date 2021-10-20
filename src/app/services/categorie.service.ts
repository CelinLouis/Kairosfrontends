import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie.model';
import { environment } from 'src/environments/environment';

const httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  baseUrl = environment.DATABASE_URL
  constructor(private http: HttpClient) { }

  getliste(APIUrl: string): Observable<any> {
    return this.http.get<any>(APIUrl);
  }

  getAll(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.baseUrl + '/categoriesselect/',
    {headers: httpHeaders});
  }

  get(id: any): Observable<Categorie> {
    return this.http.get(this.baseUrl + '/categories/' + id + '/',
    {headers: httpHeaders});
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/categories/', data,
    {headers: httpHeaders});
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(this.baseUrl + '/categories/' + id + '/', data,
    {headers: httpHeaders});
  }

  delete(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/categories/' + id + '/',
    {headers: httpHeaders});
  }


}

