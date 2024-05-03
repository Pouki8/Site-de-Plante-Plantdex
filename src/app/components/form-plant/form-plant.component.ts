import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-form-plant',
  templateUrl: './form-plant.component.html',
  styleUrls: ['./form-plant.component.css']
})
export class FormPlantComponent implements OnInit {
  formPlant!: FormGroup;
  @Output() submitFormPlant = new EventEmitter<Plant>();
  @Input() dataPlant = PlantsService;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formPlant = new FormGroup({
      nom: new FormControl('', Validators.required),
      categorie: new FormControl(),
      image: new FormControl(),
      arrosage: new FormControl(),
      soleil: new FormControl(),
    });
    console.log(this.formPlant);
  }

  onSubmitForm() {
    console.log(this.formPlant.value);
    this.submitFormPlant.emit(this.formPlant.value);
  }

}
