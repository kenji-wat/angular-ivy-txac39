import { Reservation } from './reservation.model';

export class Hotel {
  public name: string;
  public city: string;
  public reservations: Reservation[];

  constructor(name: string, city: string) {
    this.name = name;
    this.city = city;
    this.reservations = [];
  }
}
