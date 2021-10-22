import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CookieService } from "ngx-cookie";


const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
    }),
    'Access-Control-Allow-Origin':'https://kairos6t.herokuapp.com/',
    'Access-Control-Allow-Credentials': true,
    withCredentials: true
    
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

    baseUrl = environment.DATABASE_URL

    LOGIN_URL = this.baseUrl + '/api/login/';
    LOGOUT_URL = this.baseUrl + '/api/logout/';
    UTULISATEUR_URL = this.baseUrl + '/utilisateur/';
    USER_URL = this.baseUrl + '/api/login/user/olona';

 

    constructor(private httpclient: HttpClient, private router: Router, private cookieService: CookieService){}


    login(pUsername: string, pPassword: string): Observable<any>{
        let enco : any = new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded');
        let body : any = new HttpParams()
        .set('pUsername', pUsername)
        .set('pPassword', pPassword);
        const userObject = {
            username: body.pUsername,
            password: body.pPassword
        }
        return this.httpclient.post(this.LOGIN_URL, userObject,
        {
          headers: enco,withCredentials:true
        });
    }

    getUtilisateur(): Observable<any> {
        return this.httpclient.get(this.UTULISATEUR_URL, httpOptions);
    }

    getUser(data: any): Observable<any> {
        return this.httpclient.get<any>(this.USER_URL, httpOptions);
    }

    logout(): Observable<any>{
        return this.httpclient.post(this.LOGOUT_URL, {}, httpOptions);
    }

}
