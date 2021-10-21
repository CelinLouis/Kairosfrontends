import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    httpHeaders = new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Content-Type' : 'application/json'
    });

    baseUrl = environment.DATABASE_URL

    LOGIN_URL = this.baseUrl + '/api/login/';
    LOGOUT_URL = this.baseUrl + '/api/logout/';
    UTULISATEUR_URL = this.baseUrl + '/utilisateur/';

    constructor(private httpclient: HttpClient, private router: Router){}


    login(pUsername: string, pPassword: string): Observable<any>{
        const userObject = {
            username: pUsername,
            password: pPassword
        }
        return this.httpclient.post(this.LOGIN_URL, userObject,  {headers : this.httpHeaders});
    }

    getUtilisateur(): Observable<any> {
        return this.httpclient.get(this.UTULISATEUR_URL, {headers : this.httpHeaders});
    }

    logout(): Observable<any>{
        return this.httpclient.post(this.LOGOUT_URL, {}, {headers : this.httpHeaders});
    }

}
