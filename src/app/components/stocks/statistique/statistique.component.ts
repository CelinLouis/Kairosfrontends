import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
import { IngredientService } from 'src/app/services/ingredient.service';
import { StockMenuService } from 'src/app/services/stock-menu.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  result: any;
  nomIngredients: any;
  depences: any;
  nbrs: any;
  chart: any= [];
  chartNbr: any= [];

  constructor(private service: IngredientService , public api:StockMenuService) {
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    this.api.active = 8;
    this.service.getStateAll().subscribe((res) => {
      this.result = res;
      this.nomIngredients = this.result.map((nom: any) => nom.nom_ingredient)
      this.depences = this.result.map((vola: any) => vola.total_achat)
      this.nbrs = this.result.map((isa: any) => isa.nombre_achat)
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.nomIngredients,
          datasets: [
            {
              label: '# Depence',
              data: this.depences,
              borderWidth: 1,
              backgroundColor: ['#fd3f92'],
              borderColor: 'rgba(93, 175, 89, 0.1)'
            },
          ],
        },
        options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
      });


      this.chartNbr = new Chart('canvasnbr', {
        type: 'line',
        data: {
          labels: this.nomIngredients,
          datasets: [
            {
              label: '# Nombre d\'achat',
              data: this.nbrs,
              borderWidth: 1,
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderColor: '#fd3f92'
            },
          ],
        },
      });
    });
  }



}
