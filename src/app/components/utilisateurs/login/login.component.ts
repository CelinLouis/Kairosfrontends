import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';
import { LoginGuard } from 'src/app/services/login-guard.service';
import { LoginService } from 'src/app/services/login.service';
import { AlertService } from '../../../services/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  wrongCredentials: boolean = false;
  token = 'Token ';
  utilisateurL: any;

  type: boolean = false;
  constructor(private loginService: LoginService, private router: Router, private loginGuard: LoginGuard ,public apiHead: HeaderService , public sweet: AlertService) {
  }

  ngOnInit(): void {}

  onSubmit(form: NgModel){
    this.wrongCredentials = false;

    const username = form.value['username'];
    const password = form.value['password'];

    this.loginService.login(username, password).subscribe( 
      result => {
        this.utilisateurL = result.key;
        const data = {
          "Authorization": this.token +this.utilisateurL
        }
        this.loginService.getUser(data).subscribe(
          userCon => {
            console.log(userCon)
            if(userCon.profile.type === 'Caissier'){
              this.router.navigate(['table']);
              this.apiHead.userType = false;
              console.log(result)
          }
          else{
              this.router.navigate(['accueil']);
              this.apiHead.userType = true;
          }
          },
          error => {
            console.log(error);
          });
    
      }, error => {
        this.wrongCredentials = true;
        console.log(error);
      }
    )
  }


  onGet(): void{
    const data = {
      "Authorization": this.token +this.utilisateurL
    }
    this.loginService.getUser(data).subscribe(
      userCon => {
        console.log(userCon)
      },
      error => {
        console.log(error);
      });

  }

}



