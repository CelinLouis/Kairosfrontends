import { Component, OnInit } from '@angular/core';
import { Unite } from 'src/app/models/unite.model';
import { StockMenuService } from 'src/app/services/stock-menu.service';
import { UniteService } from 'src/app/services/unite.service';

@Component({
  selector: 'app-unite-list',
  templateUrl: './unite-list.component.html',
  styleUrls: ['./unite-list.component.css']
})
export class UniteListComponent implements OnInit {

  unites?: Unite[];
  totalLength : any;
  page : number = 1;
  nbItem : any;

  searchResult: boolean = true;
  constructor(private servise: UniteService , public api:StockMenuService) {
    this.nbItem = 10;
  }

  ngOnInit(): void {
    this.retrieveUnites();
    this.api.active = 3;
  }

  retrieveUnites(): void {
    this.servise.getAll()
      .subscribe(
        data => {
          this.unites = data;
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveUnites();
  }

}
