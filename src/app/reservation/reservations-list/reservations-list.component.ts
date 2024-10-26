import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../models/reservation';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrl: './reservations-list.component.css'
})
export class ReservationsListComponent implements OnInit {

  reservations: Reservation[] = [];
  constructor(
    private reservationService: ReservationService
  ) {

  }

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
    console.log(this.reservations)
  }

  deleteReservation(id: number) {
    this.reservationService.deleteReservation(id);
  }
}
