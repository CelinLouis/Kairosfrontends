import { Component, OnInit } from '@angular/core';
import { Lieu } from 'src/app/models/lieu.model';
import { LieuService } from 'src/app/services/lieu.service';
import { StockMenuService } from 'src/app/services/stock-menu.service';


@Component({
  selector: 'app-lieu-list',
  templateUrl: './lieu-list.component.html',
  styleUrls: ['./lieu-list.component.css']
})
export class LieuListComponent implements OnInit {

  lieux?: Lieu[];
  totalLength : any;
  page : number = 1;
  nbItem : any;

  searchResult: boolean = true;
  constructor(private servise: LieuService , public api:StockMenuService) {
    this.nbItem = 10;
   }

  ngOnInit(): void {
    this.retrieveLieux();
    this.api.active = 4;
  }

  retrieveLieux(): void {
    this.servise.getAll()
      .subscribe(
        data => {
          this.lieux = data;
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveLieux();
  }

}
