import { Component, Input, Output } from '@angular/core';
import { Client } from './models/client.model';
import { Hotel } from './models/hotel.model';
import { Reservation } from './models/reservation.model';
import structuredClone from '@ungap/structured-clone';

@Component({
  selector: 'hello',
  template: `
  <button (click)="createInstances($event)">test</button>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  @Output() tst: string;

  createInstances(e: any) {
    const c: Client = new Client('Jansen', 'Amsterdam');
    // console.log(c);
    const h: Hotel = new Hotel('Regal', 'Amsterdam');
    // console.log(h);
    const r: Reservation = new Reservation(c, h);
    h.reservations.push(r);
    // console.log(h.reservations);

    // defining the problem:
    const flattened: string = JSON.stringify(h);
    // console.log(flattened);
    /*
      ERROR
      Error: Converting circular structure to JSON
      --> starting at object with constructor 'Hotel'
      | property 'reservations' -> object with constructor 'Array'
      | index 0 -> object with constructor 'Reservation'
      --- property 'hotel' closes the circle
    */

    // solution

    const jsonString: string = structuredClone(h);
    // console.log(jsonString);
    console.log(JSON.stringify(jsonString));
  }
}
