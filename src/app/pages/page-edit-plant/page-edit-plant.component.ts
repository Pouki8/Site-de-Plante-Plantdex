import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-edit-plant',
  templateUrl: './page-edit-plant.component.html',
  styleUrls: ['./page-edit-plant.component.css']
})
export class PageEditPlantComponent implements OnInit {
  public plant!: Plant;
  public plantData: any;

  constructor(private route: ActivatedRoute, private plantService: PlantsService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const currentPlantId: number = Number(routeParams.get('id'));

    this.plantService.getPlantDetailsById(currentPlantId).subscribe({
      next: (response) => {
        this.plant = response;
      },
      error: () => { },
    });
  }

}


