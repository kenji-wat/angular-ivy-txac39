import { Client } from './client.model';
import { Hotel } from './hotel.model';

export class Reservation {
  public client: Client;
  public hotel: Hotel;

  constructor(client: Client, hotel: Hotel) {
    this.client = client;
    this.hotel = hotel;
  }
}
