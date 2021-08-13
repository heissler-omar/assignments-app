import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assg3',
  templateUrl: './assg3.component.html',
  styleUrls: ['./assg3.component.scss']
})
export class Assg3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showParagraph = false
  array:any = []

  buttonClick(){
    this.showParagraph = !this.showParagraph;
    this.array.push('. New item');
  }
}
