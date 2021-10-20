import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { PrixAddComponent } from './components/stocks/prix-add/prix-add.component';
import { PrixDetailsComponent } from './components/stocks/prix-details/prix-details.component';
import { PrixListComponent } from './components/stocks/prix-list/prix-list.component';
import { StatistiqueComponent } from './components/stocks/statistique/statistique.component';
import { UniteAddComponent } from './components/stocks/unite-add/unite-add.component';
import { UniteDetailsComponent } from './components/stocks/unite-details/unite-details.component';
import { UniteListComponent } from './components/stocks/unite-list/unite-list.component';
import { RecetteComponent } from './components/produits/recette/recette.component';
import { FichetechComponent } from './components/produits/fichetech/fichetech.component';
import { AfftechComponent } from './components/produits/afftech/afftech.component';
import { ProduitListeComponent } from './components/produits/produit-liste/produit-liste.component';
import { AccueilComponent } from './components/clients/accueil/accueil.component';
import { FactureComponent } from './components/clients/facture/facture.component';
import { LoginGuard } from './services/login-guard.service';

const routes: Routes = [
  {path : '' , component : LoginComponent},
  {path : 'accueil' , canActivate: [LoginGuard], component : AccueilComponent},
  {path : 'table' , canActivate: [LoginGuard], component : TableComponent},
  {path : 'achat' , canActivate: [LoginGuard] , component : AchatComponent},
  {path : 'facture' , canActivate: [LoginGuard] , component : FactureComponent},
  {path : 'commande/:idTable', canActivate: [LoginGuard], component : CommandeComponent},
  {path : 'client' , canActivate: [LoginGuard], component : ClientComponent},
  {path : 'client/:id/:nom/:tel' , canActivate: [LoginGuard] , component : DetailComponent},
  {path : 'produit' , canActivate: [LoginGuard], component : ProduitComponent},
  {path : 'produit/:id' , canActivate: [LoginGuard], component : ProduitDetailComponent},
  {path : 'parametre' , canActivate: [LoginGuard], component : ParametreComponent},

  // celin
  { path: 'unites', canActivate: [LoginGuard], component: UniteListComponent },
  { path: 'unites/:id', canActivate: [LoginGuard], component: UniteDetailsComponent },
  { path: 'addunite', canActivate: [LoginGuard], component: UniteAddComponent },
  { path: 'categories', canActivate: [LoginGuard], component: CategorieListComponent },
  { path: 'categories/:id', canActivate: [LoginGuard], component: CategorieDetailsComponent },
  { path: 'addcategorie', canActivate: [LoginGuard], component: CategorieAddComponent },
  { path: 'lieux', canActivate: [LoginGuard], component: LieuListComponent },
  { path: 'lieux/:id', canActivate: [LoginGuard], component: LieuDetailsComponent },
  { path: 'addLieu', canActivate: [LoginGuard], component: LieuAddComponent },
  { path: 'prix', canActivate: [LoginGuard], component: PrixListComponent },
  { path: 'prix/:id', canActivate: [LoginGuard], component: PrixDetailsComponent },
  { path: 'addPrix', canActivate: [LoginGuard], component: PrixAddComponent },
  { path: 'marchers', canActivate: [LoginGuard], component: MarcherListComponent },
  { path: 'marchers/:id', canActivate: [LoginGuard], component: MarcherDetailsComponent },
  { path: 'addMarche', canActivate: [LoginGuard], component: MarcherAddComponent },
  { path: 'ingredients', canActivate: [LoginGuard], component: IngredientListComponent },
  { path: 'ingredients/:id', canActivate: [LoginGuard], component: IngredientDetailsComponent },
  { path: 'addIngredient', canActivate: [LoginGuard], component: IngredientAddComponent },
  { path: 'historiqueachats', canActivate: [LoginGuard], component: HistoriqueAchatComponent },
  { path: 'statistiques', canActivate: [LoginGuard], component: StatistiqueComponent },

  // jacky
  {path: 'recette/:id', component: RecetteComponent},
  {path: 'recette', component: RecetteComponent},
  {path: 'fichetech/:id', component: FichetechComponent},
  {path: 'afftech/:id', component: AfftechComponent},
  {path: 'listerecette', component: ProduitListeComponent},
  {path: '**', redirectTo: '' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
