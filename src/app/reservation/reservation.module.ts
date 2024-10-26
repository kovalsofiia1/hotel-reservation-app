import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [
    ReservationsListComponent,
    ReservationFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule
  ]
})
export class ReservationModule { }
