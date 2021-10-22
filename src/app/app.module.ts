import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule , HttpClientXsrfModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPrintModule } from 'ngx-print'
import { ToastrModule } from 'ngx-toastr';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';
import {DatePipe} from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { HttpXsrfInterceptorService } from './services/interceptors/http-xsrf-interceptor.service';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CookieModule } from 'ngx-cookie'




// Importation des Material
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


// Importation des services
import { LoginGuard } from './services/login-guard.service';
import { LoginService } from './services/login.service';
import { MessagingService } from './services/messaging.service';


// Importation des components
import { HeaderComponent } from './components/utilisateurs/header/header.component';
import { TableComponent } from './components/clients/table/table.component';
import { ClientComponent } from './components/clients/client/client.component';
import { DetailComponent } from './components/produits/detail/detail.component';
import { CommandeComponent } from './components/clients/commande/commande.component';
import { ProduitComponent } from './components/produits/produit/produit.component';
import { ParametreComponent } from './components/clients/parametre/parametre.component';
import { ProduitDetailComponent } from './components/produits/produit-detail/produit-detail.component';
import { AchatComponent } from './components/produits/achat/achat.component';
import { LoginComponent } from './components/utilisateurs/login/login.component';
import { CategorieAddComponent } from './components/stocks/categorie-add/categorie-add.component';
import { CategorieDetailsComponent } from './components/stocks/categorie-details/categorie-details.component';
import { CategorieListComponent } from './components/stocks/categorie-list/categorie-list.component';
import { HistoriqueAchatComponent } from './components/stocks/historique-achat/historique-achat.component';
import { IngredientAddComponent } from './components/stocks/ingredient-add/ingredient-add.component';
import { IngredientDetailsComponent } from './components/stocks/ingredient-details/ingredient-details.component';
import { IngredientListComponent } from './components/stocks/ingredient-list/ingredient-list.component';
import { LieuAddComponent } from './components/stocks/lieu-add/lieu-add.component';
import { LieuDetailsComponent } from './components/stocks/lieu-details/lieu-details.component';
import { LieuListComponent } from './components/stocks/lieu-list/lieu-list.component';
import { MarcherAddComponent } from './components/stocks/marcher-add/marcher-add.component';
import { MarcherDetailsComponent } from './components/stocks/marcher-details/marcher-details.component';
import { MarcherListComponent } from './components/stocks/marcher-list/marcher-list.component';
import { MessageComponent } from './components/stocks/message/message.component';
import { PrixAddComponent } from './components/stocks/prix-add/prix-add.component';
import { PrixDetailsComponent } from './components/stocks/prix-details/prix-details.component';
import { PrixListComponent } from './components/stocks/prix-list/prix-list.component';
import { StatistiqueComponent } from './components/stocks/statistique/statistique.component';
import { UniteAddComponent } from './components/stocks/unite-add/unite-add.component';
import { UniteDetailsComponent } from './components/stocks/unite-details/unite-details.component';
import { UniteListComponent } from './components/stocks/unite-list/unite-list.component';
import { StockMenuComponent } from './components/stocks/stock-menu/stock-menu.component';
import { RecetteComponent } from './components/produits/recette/recette.component';
import { FichetechComponent } from './components/produits/fichetech/fichetech.component';
import { AfftechComponent } from './components/produits/afftech/afftech.component';
import { AddEditRecetteComponent } from './components/produits/recette/add-edit-recette/add-edit-recette.component';
import { AddEditEditRecetteComponent } from './components/produits/recette/add-edit-edit-recette/add-edit-edit-recette.component';
import { ListeRecetteComponent } from './components/produits/recette/liste-recette/liste-recette.component';
import { ListeAfftechComponent } from './components/produits/afftech/liste-afftech/liste-afftech.component';
import { AddEditFichetechComponent } from './components/produits/fichetech/add-edit-fichetech/add-edit-fichetech.component';
import { AddEditEditFichetechComponent } from './components/produits/fichetech/add-edit-edit-fichetech/add-edit-edit-fichetech.component';
import { ListeFichetechComponent } from './components/produits/fichetech/liste-fichetech/liste-fichetech.component';
import { ListAfftecComponent } from './components/produits/afftech/list-afftec/list-afftec.component';
import { ProduitListeComponent } from './components/produits/produit-liste/produit-liste.component';
import { ListeProdComponent } from './components/produits/produit-liste/liste-prod/liste-prod.component';
import { AccueilComponent } from './components/clients/accueil/accueil.component';
import { FactureComponent } from './components/clients/facture/facture.component';




registerLocaleData(localFr)


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    ClientComponent,
    DetailComponent,
    CommandeComponent,
    ProduitComponent,
    ParametreComponent,
    ProduitDetailComponent,
    FilterPipe,
    LimitToPipe,
    AchatComponent,
    LoginComponent,
    CategorieAddComponent,
    CategorieDetailsComponent,
    CategorieListComponent,
    HistoriqueAchatComponent,
    IngredientAddComponent,
    IngredientDetailsComponent,
    IngredientListComponent,
    LieuAddComponent,
    LieuDetailsComponent,
    LieuListComponent,
    MarcherAddComponent,
    MarcherDetailsComponent,
    MarcherListComponent,
    MessageComponent,
    PrixAddComponent,
    PrixDetailsComponent,
    PrixListComponent,
    StatistiqueComponent,
    UniteAddComponent,
    UniteDetailsComponent,
    UniteListComponent,
    StockMenuComponent,
    RecetteComponent,
    FichetechComponent,
    AfftechComponent,
    AddEditRecetteComponent,
    AddEditEditRecetteComponent,
    ListeRecetteComponent,
    ListeAfftechComponent,
    AddEditFichetechComponent,
    AddEditEditFichetechComponent,
    ListeFichetechComponent,
    ListAfftecComponent,
    ProduitListeComponent,
    ListeProdComponent,
    AccueilComponent,
    FactureComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CookieModule.forRoot(),
    MatSliderModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatBadgeModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatNativeDateModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule,
    NgxPrintModule,
    ReactiveFormsModule,

    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),


    ToastrModule.forRoot(
      {
        timeOut : 2000,
        progressBar : true,
        progressAnimation : 'decreasing',
        preventDuplicates : true,
      } 
    ),
    MatProgressBarModule,
    FontAwesomeModule,
    HttpClientXsrfModule.withOptions({
      cookieName : 'csrftoken'
    }),
  ],
  providers: [
    LoginService,
    LoginGuard,
    DatePipe,
    MatDatepickerModule,

    {provide : HTTP_INTERCEPTORS , useClass : HttpXsrfInterceptorService, multi : true},
    {provide : LOCALE_ID, useValue : 'fr-FR'},MessagingService,AsyncPipe,FilterPipe,LimitToPipe,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
