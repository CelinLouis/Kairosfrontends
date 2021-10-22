import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { HistoriqueAchatService } from 'src/app/services/historique-achat.service';
import { AccueilService } from '../../../services/accueil.service';
import { DatePipe } from '@angular/common';

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
  depenseJour: any = 0;
  date: any;
  historique: any;
  datepicker = {
    start: new Date(),
    end: new Date()
  }
  d = new Date();
  day;
  month;
  year;

  constructor(private apiComm: CommandeService ,private servise: HistoriqueAchatService, private api: AccueilService, private datepipe: DatePipe) {
    this.date = new Date().toLocaleDateString();
    this.totalFacture();
    this.getFactureParDate();
    this.Depense();
    this.getDepenseJour();
  }

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

  searchBetweenTwoDate(): void {
      var startDate= this.datepicker.start;
      var endDate= this.datepicker.end;
        
      if(endDate == null){
        var end=this.datepipe.transform(startDate, 'yyyy-MM-dd')
  
      }else { 
        var end=this.datepipe.transform(endDate, 'yyyy-MM-dd')
      }
      const data = {
        start: this.datepipe.transform(startDate, 'yyyy-MM-dd'),
        end: end
      }
      this.servise.search(data).subscribe(
        search => {
          this.totalDepense = search.depense;
        },
        error => {
          console.log(error);
        });
  }

  getDate(){
    console.log(this.datepicker)
  }

  getDay(){
    this.day = this.d.getDate()
    this.month = this.d.getMonth()*1 + 1
    this.year = this.d.getFullYear()
    this.datepicker = {
      start: new Date(this.year+"-"+this.month+"-"+this.day),
      end: new Date(this.year+"-"+this.month+"-"+this.day)
    }

  }
  getDepenseJour(){
    this.servise.getDepenseJour().subscribe(
      result => {
          this.depenseJour = result.depenseJour;
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.searchBetweenTwoDate();
    this.getDay();
  }

}
