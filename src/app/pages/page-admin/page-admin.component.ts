import { Component, Input, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {
  plantsToDisplay: Plant[] = [];


  constructor(private plantsService: PlantsService) { }

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((data) => {
      console.log(data);
      this.plantsToDisplay = [...data];
    });
  }

  onClickDeletePlant(plantId: number) {
    this.plantsService.deletePlant(plantId).subscribe({
      next: () => {
        this.plantsToDisplay = this.plantsToDisplay.filter(
          x => x.id !== plantId
        );
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
