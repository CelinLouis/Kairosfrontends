import { Component, OnInit, PipeTransform } from '@angular/core';
import { Historique } from 'src/app/models/historique.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { HistoriqueAchatService } from 'src/app/services/historique-achat.service';
import { IngredientService } from 'src/app/services/ingredient.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AccueilService } from 'src/app/services/accueil.service';
import { StockMenuService } from 'src/app/services/stock-menu.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-historique-achat',
  templateUrl: './historique-achat.component.html',
  styleUrls: ['./historique-achat.component.css'],
  providers: [DecimalPipe]
})
export class HistoriqueAchatComponent implements OnInit {
  start= '';
  end= '';
  historique: any;
  depense : any;
  ingredient?: Ingredient[];
  ingredients?: Historique[];

  totalLength : any;
  page : number = 1;
  nbItem : any;

  bounce = 0;
  currentRate;

  historique$ : Observable<Historique[]>;
  searchResult: boolean = true;
  filter : FormControl;
  transactionsUrl = environment.DATABASE_URL +"/historiques/";
  constructor(public apiDepe : AccueilService,public api:StockMenuService, private pipe: DecimalPipe,private servise: HistoriqueAchatService,private categorie: IngredientService,public datepipe: DatePipe) {
    this.filter = new FormControl('');
    this.nbItem = 10;
    this.getDepense();
   }

   search(text: string, pipe: PipeTransform): Historique[] {
    return this.ingredients.filter(element => {
      const term = text.toLowerCase();
      return element.categorie.toLowerCase().includes(term)
          || element.ingredient.nom_ingredient.toLowerCase().includes(term)
          || pipe.transform(element.quantite_stock).includes(term)
          || pipe.transform(element.achat_montant).includes(term)
          || pipe.transform(element.achat_prix_unitaire).includes(term)
          || pipe.transform(element.achat_quantite).includes(term)
          || element.achat_lieu.toLowerCase().includes(term)
          || element.unite.toLowerCase().includes(term)
    });
  }

  ngOnInit(): void {
    this.retrieveHistoriques();
    this.retrieveIngredients();
    this.api.active = 7;
  }

  public money_form(price: any){
    let money=parseFloat(price);
    let parts = money.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.');
  }

  getDepense(){
    this.apiDepe.totalDepense().subscribe(
      data => {
        this.depense = data.depense;

      },
      error => {
        console.log(error)
      }
    )
  }

  retrieveHistoriques(): void {
    this.servise.getAll()
      .subscribe(
        data => {
          this.ingredients = data;
          this.historique$ = this.filter.valueChanges.pipe(
            startWith(''),
            map(text => this.search(text, this.pipe)),
          );
          this.historique$.subscribe(
            data => {
              data.length == 0 ? this.searchResult = false : this.searchResult = true

            }
          )
        },
        error => {
          console.log(error);
        });
  }


  retrieveIngredients(): void {
    this.categorie.getAll()
      .subscribe(
        data => {
            this.ingredient = data;
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveIngredients();
  }

  onStart(event: any): void {
    this.start = event.target.value;
  }
  onEnd(event: any): void {
    this.end = event.target.value;
  }

  // searchBetweenTwoDate(): void {
  //       const startDate= this.start;
  //       const endDate= this.end;
  //     this.servise.search(startDate, endDate).subscribe(
  //       search => {
  //         this.historique = search.depense;
  //         console.log("Backend",search);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

}
interface histoface {
  id:number;
  nom: string;
  prenom: string;
  adresse: string;
  tel:number;
}
