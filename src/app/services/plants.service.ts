import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private http: HttpClient) { }

  urlApi = 'http://localhost:8080/api/plantes';

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.urlApi);
  }

  createNewPlant(plantToCreate: Plant): Observable<Plant> {
    return this.http.post<Plant>(this.urlApi, plantToCreate);
  }

  deletePlant(plantId: number) {
    return this.http.delete(`http://localhost:8080/api/plantes/${plantId}`);
  }

  getPlantById(id: string): Observable<any> {
    return this.http.get<any>(`/api/plants/${id}`); // Remplacez /api/plants/ par votre URL d'API réelle
  }

  getPlantDetailsById(plantId: number): Observable<Plant> {
    return this.http.get<Plant>(`http://localhost:8080/api/plantes/${plantId}`);
  }

  getPlantEditById(plantId: number): Observable<Plant> {
    return this.http.get<Plant>(`http://localhost:8080/admin/plant/edit/${plantId}`)
  }
}
