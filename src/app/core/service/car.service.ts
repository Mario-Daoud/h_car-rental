import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Car } from 'src/app/shared/car/car.model';

@Injectable()
export class CarService {
  constructor(private http: HttpClient) {}
  API_URL = '/assets/carData.json';

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.API_URL);
  }
}
