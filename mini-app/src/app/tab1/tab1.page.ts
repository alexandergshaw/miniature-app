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
  public filterChips: FilterChip[] = [
    {
      id: 0,
      label: 'Player Characters',
      color: 'secondary',
      selected: false,
    },
    {
      id: 1,
      label: 'Non Player Characters',
      color: 'secondary',
      selected: false,
    }
  ];
  public colors: string[] = [];


  constructor(private miniService: MiniService) {}

  ngOnInit() {
    this.setSearchedMinis();
  }
 
  setSearchedMinis() {
    this.minis = this.miniService.searchMinis(this.searchTerm);
  }

  clickChip(chipId: number) {
    this.filterChips[chipId].selected = this.toggleChipSelection(chipId);
    this.filterChips[chipId].color = this.changeChipColor(chipId);
    let fieldsToFilterOn = this.getFilterFields(this.filterChips);
    this.minis = this.miniService.filterMinis(fieldsToFilterOn);

    console.log('fieldsToFilterOn', fieldsToFilterOn);
  }

  toggleChipSelection(chipId: number) {
    if(this.filterChips[chipId].selected) {
      return false;
    }

    else {
      return true;
    }
  }

  changeChipColor(chipId: number) {
    if(this.filterChips[chipId].color === 'secondary') {
      return 'primary';
    }

    else if(this.filterChips[chipId].color === 'primary') {
      return 'secondary';
    }
  }

  getFilterFields(chips: FilterChip[]) {
    return chips.filter(chip => chip.selected)
        .map(chip => chip.label);
  }
}

class FilterChip {
  id: number;
  label: string;
  color: string;
  selected: boolean;
}
