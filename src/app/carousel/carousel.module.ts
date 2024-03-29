import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselRoutingModule } from './carousel-routing.module';
import { CarouselComponent } from './carousel.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CarouselComponent],
  imports: [
    IonicModule.forRoot(),
    CommonModule,
    BrowserModule,
    CarouselRoutingModule
  ]
})
export class CarouselModule { }
