import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myNumbers: number[] = [];
  myNewNumbers: number[] = [];
  result: number[] = [];
  res1: number;
  res2: number;

  onNumberFired(firedNumber: number) {
    this.res1 = this.myNumbers.push(firedNumber);
    this.res2 = this.myNewNumbers.push(firedNumber);
    this.result.push(this.res1 * this.res2);
  }
}
