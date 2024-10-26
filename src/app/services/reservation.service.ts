import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {



  reservations: Reservation[] = [];

  constructor() {
    let savedReservations = localStorage.getItem('reservations');
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: number): Reservation | undefined {
    return this.reservations.find((res) => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now();

    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: number): void {
    const index = this.reservations.findIndex((res) => res.id === id);
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(id: number, newReservation: Reservation): void {
    const index = this.reservations.findIndex((res) => res.id === id);
    this.reservations[index] = newReservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
