import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(route: any){
    this.router.navigate([route])
  }
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];

}
