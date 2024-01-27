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


  constructor(private plantsService: PlantsService) { }

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((data) => {
      console.log(data);
      this.plantsToDisplay = [...data];
      //ici
      this.categoriesToSend = this.getCategoriesFromPlants(data);
      this.allPlants = [...data];
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

  filterPlantsByCategories(categories: string[]) {
    this.plantsToDisplay = this.allPlants.filter((plant) =>
      categories.includes(plant.categorie)
    );
    /*ou 
      filterPlantsByCategories(categories: string[]) {
    this.plantsToDisplay = this.allPlants.filter((x) =>
      categories.includes(x.categorie)
    );
    */
  }
}




