import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { AccueilService } from '../../../services/accueil.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  factureListe: any;
  facturePardate: any;
  totalRecette = 0 ;
  totalRecetteJour = 0;
  totalDepense = 0;
  date: any;

  constructor(private apiComm: CommandeService , private api: AccueilService) {
    this.date = new Date().toLocaleDateString();
    this.totalFacture();
    this.getFactureParDate();
    this.Depense();
  }


  // tslint:disable-next-line: typedef
  totalFacture(){
    this.apiComm.getFacture().subscribe(
      data => {
        this.factureListe = data;
        for (let i = 0 ; i < this.factureListe.length ; i++){
          this.totalRecette = this.totalRecette * 1 + data[i].total * 1;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  // tslint:disable-next-line: typedef
  Depense(){
    this.api.totalDepense().subscribe(
      data => {
        this.totalDepense = data.depense;

      },
      error => {
        console.log(error);
      }
    );
  }

  // tslint:disable-next-line: typedef
  getFactureParDate(){
    this.apiComm.getFactureDate(this.date).subscribe(
      data => {
        this.facturePardate = data;
        for (let i = 0 ; i < this.facturePardate.length ; i++){
          this.totalRecetteJour = this.totalRecetteJour * 1 + data[i].total * 1;
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
