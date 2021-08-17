import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assg4',
  templateUrl: './assg4.component.html',
  styleUrls: ['./assg4.component.scss']
})
export class Assg4Component implements OnInit {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    } 
  }

}
