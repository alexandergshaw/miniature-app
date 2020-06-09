import { Component, OnInit } from '@angular/core';
import { MiniService } from '../services/mini.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {
  public searchTerm: string = "";
  public minis: any;

  constructor(private miniService: MiniService) {}

  ngOnInit() {
    this.setFilteredItems();
  }
 
  setFilteredItems() {
    console.log('in setFilteredItems');
    this.minis = this.miniService.filterMinis(this.searchTerm);
    console.log('this.minis', this.minis);

  }
}
