import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CarService } from 'src/app/core/service/car.service';
import { Car } from 'src/app/shared/car/car.model';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css'],
})
export class CarlistComponent implements OnInit {
  cars: Observable<Car[]>;
  activeCar: Car;
  carImage: string;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.cars = this.carService.getCars();
    this.carImage = '/assets/images/cars/vantage s.png';
    this.cars.subscribe((carList) => {
      if (carList.length > 0) {
        this.activeCar = carList[0];
        this.carImage =
          '/assets/images/cars/' + this.activeCar.model.toLowerCase() + '.png';
      }
    });
  }

  displayCar(car: Car) {
    this.activeCar = car;
    this.carImage = '/assets/images/cars/' + car.model.toLowerCase() + '.png';
  }
}
