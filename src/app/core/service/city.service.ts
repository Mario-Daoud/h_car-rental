import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { City } from 'src/app/shared/city/city';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private http: HttpClient) {}
  API_URL = '/assets/cityData.json';

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.API_URL);
  }
}
