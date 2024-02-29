import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-new-plant',
  templateUrl: './page-new-plant.component.html',
  styleUrls: ['./page-new-plant.component.css']
})
export class PageNewPlantComponent {
  constructor(private plantService: PlantsService, private router: Router) { }
  // Rajouter un paramètre :private router: Router , pour retourner vers la page admin

  newPlantSubmitted(plant: Plant) {
    this.plantService.createNewPlant(plant).subscribe((resp) => {
      console.log("New plant created : ", resp);
      // Notre plante est créée on navique vers la page admin
      this.router.navigate(['/admin']); // avec le paramètre private router
    })
  }
}
