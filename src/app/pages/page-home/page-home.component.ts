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
  // faire le ToDisplay de l'arrosage :

  categoriesToSend: string[] = [];
  //faire le ToSend de l'arrosage :
  arrosageToSend: number[] = [];
  ensoleillementToSend: string[] = [];
  allPlants: Plant[] = [];
  saveFilter: string[] = [];
  saveFilterArrosage: number[] = [];
  saveFilterSoleil: string[] = [];
  saveSearchText: string = '';


  constructor(private plantsService: PlantsService) { }

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((data) => {
      console.log(data);
      this.plantsToDisplay = [...data];
      //ici
      this.categoriesToSend = this.getCategoriesFromPlants(data);
      //this pour l'arrosage :
      this.arrosageToSend = this.getArrosageFromPlants(data);
      this.ensoleillementToSend = this.getEnsoleillementFromPlants(data);
      this.allPlants = [...data];
      this.saveFilter = [...this.categoriesToSend];
      this.saveFilterArrosage = [...this.arrosageToSend];
      this.saveFilterSoleil = [...this.ensoleillementToSend];
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

  getArrosageFromPlants(plants: Plant[]): number[] {
    const arrosageArray = plants.map(plant => plant.arrosage);
    const arrosageSansDoublon = new Set(arrosageArray);
    const arrosageSansDoublonArray = Array.from(arrosageSansDoublon);
    console.log(arrosageSansDoublonArray);
    return arrosageSansDoublonArray;
  }
  getEnsoleillementFromPlants(plants: Plant[]): string[] {
    const ensoleillementArray = plants.map(plant => plant.soleil);
    const ensoleillementSansDoublon = new Set(ensoleillementArray);
    const ensoleillementSansDoublonArray = Array.from(ensoleillementSansDoublon);
    console.log(ensoleillementSansDoublonArray);
    return ensoleillementSansDoublonArray;
  }


  onSearchText(search: string) {
    this.saveSearchText = search;
    console.log("saisie texte : ", this.saveSearchText)
    this.genericFilter();
  }

  searchToFilter(propertyFilter: string[]) {
    this.saveFilter = [...propertyFilter];
    console.log("select catégorie : ", this.saveFilter)
    this.genericFilter();
  }

  searchToFilterArrosage(propertyFilter: number[]) {
    this.saveFilterArrosage = [...propertyFilter];
    console.log("Filtre arrosage : ", this.saveFilterArrosage)
    this.genericFilter();
  }

  searchTofilterSoleil(propertyFilter: string[]) {
    this.saveFilterSoleil = [...propertyFilter];
    console.log("Filtre soleil : ", this.saveFilterSoleil)
    this.genericFilter();
  }

  genericFilter() {
    this.plantsToDisplay = this.allPlants.filter((plant) =>
      this.saveFilter.includes(plant.categorie) &&
      this.saveFilterSoleil.includes(plant.soleil) &&
      this.saveFilterArrosage.includes(plant.arrosage) &&
      plant.nom.toLowerCase().includes(this.saveSearchText.toLowerCase())
    );
    /*this.plantsToDisplay = this.allPlants.filter((plant) =>
      this.saveFilterArrosage.includes(plant.arrosage))*/
  }
  /* genericFilterSoleil() {
     this.plantsToDisplay = this.allPlants.filter((plant) =>
       this.saveFilterSoleil.includes(plant.soleil));
     this.plantsToDisplay = this.plantsToDisplay.filter((plant) =>
       plant.nom.toLowerCase().includes(this.saveSearchText.toLowerCase())
     );
   }*/



  /*genericfilter(){
   let filteredPlants = [...this.allPlants];

   filteredPlants = filteredPlants.filter((x) =>
   categories.includes(x.categorie)
   );

   filteredPlants = filteredPlants.filter(x => search)
   this.plantsToDisplay = [...filteredPlants];
  }*/
}





