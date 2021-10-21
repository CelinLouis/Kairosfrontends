import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';
import { StockMenuService } from 'src/app/services/stock-menu.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {

  categories?: Categorie[];
  next!: string;
  previous!: string;
  transactionsUrl = environment.DATABASE_URL +"/categories/";
  cout!: number;
  limit!: number;
  nbrPage!: number;

  totalLength : any;
  page : number = 1;
  nbItem : any;
  searchResult: boolean = true;

  filter : FormControl;

  constructor(private servise: CategorieService , public api:StockMenuService) {
    this.filter = new FormControl('');
    this.nbItem = 5;
  }

  ngOnInit(): void {
    this.retrieveCategories();
    this.api.active = 2;
  }

  retrieveCategories(): void {
    this.servise.getAll()
      .subscribe(
        data => {
          this.categories = data;
        },
        error => {
          console.log(error);
        });
     }

    refreshList(): void {
      this.retrieveCategories();
    }


}
