import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  name: string;
  number1 = 0;
  number2 = 0;
  result = 0;
  count = 0;
  msg = '';
  resultInput: number;
  resultStatus = '';
  interval;
  // ------------------
  status = '';
  show = false;
  hide = false;
  hideResult = false;

  @Output() intervalFired = new EventEmitter<number>();
  constructor() {
    //  this.resultInput = this.resultInput;
  }

  ngOnInit() {}

  // onPlay() {
  //   // console.log(this.number + 1);
  //   // this.number++;
  //   this.number1 = Math.floor(Math.random() * 20 + 1);
  //   this.number2 = Math.floor(Math.random() * 20 + 1);
  //   this.result = this.number1 * this.number2;
  //   console.log(this.number1 + ' * ' + this.number2 + ' = ?');
  //   this.intervalFired.emit(this.number1);
  //   this.intervalFired.emit(this.number2);
  //   this.interval = setTimeout(() => {
  //     console.log(this.result);
  //     this.intervalFired.emit(this.result);
  //   }, 2000);
  // }
  onPlay() {
    this.number1 = Math.floor(Math.random() * 20 + 1);
    this.number2 = Math.floor(Math.random() * 20 + 1);
    this.result = this.number1 * this.number2;
    this.status = 'Welcome to the game ' + this.name + ', Enjoy it!';

    console.log(this.number1 + ' * ' + this.number2 + ' = ?');
    this.intervalFired.emit(this.number1);
    this.intervalFired.emit(this.number2);
    console.log(this.result);
    this.intervalFired.emit(this.result);
    this.show = true;
    this.resultInput = undefined;
    this.hideResult = false;
    this.hide = false;
  }
  onSend() {
    // console.log(this.resultInput.constructor.name);
    // if (this.result == this.resultInput) {
    //   this.resultStatus = 'Bravo! the result is: ' + this.resultInput;
    // } else {
    //   this.resultStatus = 'Wrong result!';
    // }

    if (this.result === Number(this.resultInput)) {
      this.resultStatus = 'Bravo! the result is: ' + this.resultInput;
      this.count++;
    } else {
      this.resultStatus = 'Wrong result, please try again!';
    }
    this.hideResult = true;
  }

  getColor() {
    return this.resultStatus === 'Wrong result, please try again!'
      ? 'red'
      : 'green';
  }
  onScore() {
    // this.msg = 'Bravo! the result is: ' + this.resultInput;
    // if (this.resultStatus === this.msg) {
    //   this.count++;
    // }

    this.intervalFired.emit(this.count);
    console.log(this.count);
    this.hide = !this.hide;
  }
}
