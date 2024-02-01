import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  plantsToDisplay: Plant[] = [];
  categoriesToSend: string[] = [];
  allPlants: Plant[] = [];
  saveFilter: string[] = [];
  saveSearchText: string = '';


  constructor(private plantsService: PlantsService) { }

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((data) => {
      console.log(data);
      this.plantsToDisplay = [...data];
      //ici
      this.categoriesToSend = this.getCategoriesFromPlants(data);
      this.allPlants = [...data];
      this.saveFilter = [...this.categoriesToSend];
    });
  }

  getCategoriesFromPlants(plants: Plant[]): string[] {
    // Retourner un tableau contenant les catégories des plantes de manière unique
    // => ['plante verte', 'orchidés', 'bonsaïs']
    // Indice : .map() / Set
    /**
     * Etapes : 
     * 1 - Mapper notre tableau de plant[] pour string[] (de catégorie)
     */
    const categoriesArray = plants.map(plant => plant.categorie);

    // Étape 2: Utiliser un Set pour supprimer les doublons
    const CategoriesSansDoublon = new Set(categoriesArray);

    // Étape 3: Convertir le Set en tableau
    // const tableauSansDoublon = [...listeSansDoublon];
    const CategoriesSansDoublonArray = Array.from(CategoriesSansDoublon);
    console.log(CategoriesSansDoublonArray);
    return CategoriesSansDoublonArray;
  }


  onSearchText(search: string) {
    this.saveSearchText = search;
    console.log("saisie texte : ", this.saveSearchText)
    this.genericFilter();
  }

  searchToFilter(propertyFilter: string[]) {
    this.saveFilter = propertyFilter;
    console.log("select catégorie : ", this.saveFilter)
    this.genericFilter();
  }

  genericFilter() {

    this.plantsToDisplay = this.allPlants.filter((plant) =>
      this.saveFilter.includes(plant.categorie)
    );
    this.plantsToDisplay = this.plantsToDisplay.filter((plant) =>
      plant.nom.toLowerCase().includes(this.saveSearchText.toLowerCase())
    );
  }
}





