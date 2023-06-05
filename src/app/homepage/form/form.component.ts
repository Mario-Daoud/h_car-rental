import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/core/service/car.service';
import { CityService } from 'src/app/core/service/city.service';
import { Car } from 'src/app/shared/car/car.model';
import { City } from 'src/app/shared/city/city';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  cars: Observable<Car[]>;
  cities: Observable<City[]>;

  today: string;
  minDate: string;

  constructor(
    private carService: CarService,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.cars = this.carService.getCars();
    this.cities = this.cityService.getCities();

    const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0];
  }

  updateMinDate(date: string) {
    this.minDate = date;
  }
}
