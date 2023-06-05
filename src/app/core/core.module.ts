import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from './service/car.service';
import { CityService } from './service/city.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [CarService, CityService],
})
export class CoreModule {}
