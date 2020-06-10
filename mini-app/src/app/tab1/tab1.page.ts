import { Component, OnInit } from '@angular/core';
import { MiniService } from '../services/mini.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {
  public searchTerm: string = "";
  public minis: any;
  genders;
  genderForm;

  constructor(private miniService: MiniService) {
    this.genderForm = new FormGroup({
      "genders": new FormControl({value: 'male'})
    });
  }

  ngOnInit() {
    this.setSearchedMinis();
  }
 
  setSearchedMinis() {
    this.minis = this.miniService.searchMinis(this.searchTerm);
  }

  filterPlayerCharacters() {
    console.log('in filterPlayerCharacters');
    this.minis = this.miniService.filterPlayerCharacters();
    console.log('this.minis', this.minis);

  }
}
