import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageNewPlantComponent } from './pages/page-new-plant/page-new-plant.component';
import { PagePlantDetailsComponent } from './pages/page-plant-details/page-plant-details.component';
import { PageEditPlantComponent } from './pages/page-edit-plant/page-edit-plant.component';
import { PageIdentificationComponent } from './pages/page-identification/page-identification.component';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  //http://localhost:4200
  { path: '', component: PageHomeComponent },
  //Set route for url : http:/localhost:4200/my-plants
  { path: 'my-plants', component: PageMyPlantsComponent },
  // Set route for url : http:/localhost:4200/admin
  { path: 'admin', canActivate: [adminGuard], component: PageAdminComponent },
  { path: 'admin/new-plant', component: PageNewPlantComponent },
  { path: 'plant/details/:id', component: PagePlantDetailsComponent },
  { path: 'admin/plant/edit/:id', component: PageEditPlantComponent },
  { path: 'connexion', component: PageIdentificationComponent },
  // Page 404
  { path: '**', component: PageNotFoundComponent },//Cette page doit toujours être en dernier
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
