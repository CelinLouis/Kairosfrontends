import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        // 'X-CSRFToken': $cookies.get('csrftoken')
    }),
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Credentials': true,
    withCredentials: true
    
};
@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate{

    profile = null;
    // baseUrl = environment.DATABASE_URL + '/utilisateur/';
    baseUrl = environment.DATABASE_URL;
    USER_URL = this.baseUrl + '/api/login/user/olona';
    
    constructor(private httpClient : HttpClient, private router:Router){}

    getProfile() {
        return new Observable<any>((observer)=>{
            if(this.profile) {
                observer.next(this.profile);
                observer.complete()
            } else {
                this.httpClient.get(this.USER_URL, httpOptions).subscribe( profile => {
                    this.profile = profile;
                    observer.next(profile);
                    observer.complete();
                }, error => {
                    observer.error(error);
                    observer.complete()
                });
            }
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable <boolean> {
        return new Observable<any>((observer)=>{
            this.getProfile().subscribe( result => {
                observer.next(true);
                observer.complete();
            }, error =>{
                this.router.navigate(['']);
                observer.next(false);
                observer.complete();
            })
        })
    }
}
