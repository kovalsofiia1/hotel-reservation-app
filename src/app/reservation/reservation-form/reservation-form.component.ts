import { Component, OnInit } from '@angular/core';
import { FormGroup, Validator, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});
  reservationId: number | null = null;

  constructor(private FormBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.reservationForm = this.FormBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', Validators.required],
      roomNumber: ['', Validators.required],
    });

    this.reservationId = Number(this.activateRoute.snapshot.paramMap.get('id'));

    if (this.reservationId) {
      this.reservationService.getReservation(this.reservationId).subscribe(res => {
        if (res)
          this.reservationForm.patchValue(res)
      });
    }
  }

  onSubmit() {
    const reservation = this.reservationForm.value;

    if (this.reservationId) {
      this.reservationService.updateReservation(this.reservationId, reservation).subscribe();
    }
    else {
      this.reservationService.addReservation(reservation).subscribe();
    }

    this.reservationForm.reset();
    this.router.navigate(['/list'])
  }
}
