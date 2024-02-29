import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageNewPlantComponent } from './pages/page-new-plant/page-new-plant.component';

const routes: Routes = [
  //http://localhost:4200
  { path: '', component: PageHomeComponent },
  //Set route for url : http:/localhost:4200/my-plants
  { path: 'my-plants', component: PageMyPlantsComponent },
  // Set route for url : http:/localhost:4200/admin
  { path: 'admin', component: PageAdminComponent },
  { path: 'admin/new-plant', component: PageNewPlantComponent },
  // Page 404
  { path: '**', component: PageNotFoundComponent },//Cette page doit toujours être en dernier
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
