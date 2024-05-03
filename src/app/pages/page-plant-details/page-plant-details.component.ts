import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-plant-details',
  templateUrl: './page-plant-details.component.html',
  styleUrls: ['./page-plant-details.component.css']
})
export class PagePlantDetailsComponent implements OnInit {
  public plant!: Plant;

  constructor(private route: ActivatedRoute, private plantService: PlantsService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    console.log(routeParams);
    const currentPlantId: number = Number(routeParams.get('id'));
    console.log(currentPlantId);
    this.plantService.getPlantDetailsById(currentPlantId).subscribe({
      next: (response) => {
        console.log('les données de plante chargées', response);
        this.plant = response;
      },
      error: () => { },
    })
  }
}
