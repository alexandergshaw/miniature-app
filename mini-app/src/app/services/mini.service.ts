import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiniService {

  public minis: Mini[] = [];

  constructor() { 
    this.minis = [
      {
        id: 1,
        name: "gnome druid",
        playerCharacter: true,
        imagePath: "assets/img/gnome_druid.jpg"
      },
      {
        id: 2,
        name: "human druid",
        playerCharacter: false,
        imagePath: "assets/img/human_druid.jpg"
      }
    ]
  }

  searchMinis(searchTerm) {
    return this.minis.filter(mini => {
      return mini.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    })
  }

  clickChip() {
    return this.minis.filter(mini => {
      if(mini.hasOwnProperty('playerCharacter')) {
        return mini.playerCharacter;
      }
    });
  }
}

class Mini {
  id: number;
  name?: string;
  race?: string;
  gender?: string;
  class?: string;
  playerCharacter?: boolean;
  nonPlayerCharacter?: boolean;

  priceEstimate?: number;
  company?: string;
  miniatureLine?: string;
  sku?: string;

  baseSize?: number;
  game?: string;

  imagePath: string;
}
