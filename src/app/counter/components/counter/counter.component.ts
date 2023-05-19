import { Component } from '@angular/core';

@Component({ //hace que este archivo se reconozca como componente
  selector: 'app-counter', //es como se va a llamar en el html
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseOrDecreaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseOrDecreaseBy(-1)">-1</button>

  `
})
export class CounterComponent  {
  public counter: number = 10;

  increaseOrDecreaseBy( value: number ):void { //no es necesario colocar public porque por defecto es public
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
