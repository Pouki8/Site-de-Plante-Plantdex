import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.css']
})
export class FilterSideBarComponent {

  @Input() categoriesToDisplay!: string[];
  checkedCategories: string[] = [];

  @Input() arrosageToDisplay!: number[];
  checkedArrosage: number[] = [];

  @Input() ensoleillementToDisplay!: string[];
  checkedEnsoleillement: string[] = [];


  @Output() categoriesToFilter = new EventEmitter<string[]>();

  @Output() arrosageToFilter = new EventEmitter<number[]>();

  @Output() ensoleillementToFilter = new EventEmitter<string[]>();

  onCheckedCategories(event: Event) {
    const target = event.target as HTMLInputElement;
    /**
     * Lorsqu'un user coche une checkbox
     * -> On l'ajoute à une tableau de catégorie cochée*/
    if (target.checked) {
      /* Si on décoche, nous aurons le tableau */
      if (this.checkedCategories.length === this.categoriesToDisplay.length) {
        this.checkedCategories = [];
      }

      this.checkedCategories.push(target.value);
    } else {
      /* Lorsqu'un user décoche une checkbox
      * -> On la retire du tableau de catégorie cochée*/
      this.checkedCategories = this.checkedCategories.filter(
        (categorie) => categorie !== target.value);
      /* Lorqu'aucune catégorie n'est coché
      * -> On met toute les catégorie par défaut*/
      if (this.checkedCategories.length === 0) {
        this.checkedCategories = [...this.categoriesToDisplay];
      }
    }

    this.categoriesToFilter.emit(this.checkedCategories);
    //console.log(this.checkedCategories);
  }

  onCheckedArrosage(event: Event) {
    const target = event.target as HTMLInputElement;
    const arrosageValue = parseInt(target.value); // Convertir en nombre

    if (target.checked) {
      if (this.checkedArrosage.length === this.arrosageToDisplay.length) {
        this.checkedArrosage = [];
      }
      this.checkedArrosage.push(arrosageValue);
    } else {
      this.checkedArrosage = this.checkedArrosage.filter(
        (arrosage) => arrosage !== arrosageValue);
      if (this.checkedArrosage.length === 0) {
        this.checkedArrosage = [...this.arrosageToDisplay];
      }
    } console.log("test arrosage : ", this.checkedArrosage)
    this.arrosageToFilter.emit(this.checkedArrosage);
  }

  onCheckedSoleil(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      if (this.checkedEnsoleillement.length === this.ensoleillementToDisplay.length) {
        this.checkedEnsoleillement = [];
      }
      this.checkedEnsoleillement.push(target.value);
    } else {
      this.checkedEnsoleillement = this.checkedEnsoleillement.filter(
        (soleil) => soleil !== target.value);
      if (this.checkedEnsoleillement.length === 0) {
        this.checkedEnsoleillement = [...this.ensoleillementToDisplay];
      }
    } console.log("test soleil : ", this.checkedEnsoleillement)
    this.ensoleillementToFilter.emit(this.checkedEnsoleillement);
  }

}

