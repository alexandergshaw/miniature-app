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
        playerCharacter: true,
        imagePath: "assets/img/human_druid.jpg"
      }
    ]
  }

  searchMinis(searchTerm: string) {
    return this.minis.filter(mini => {
      return mini.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    })
  }

  filterMinis(filters: string[]) {
    if(filters.length > 0) {
      let includePlayerCharacters = filters.indexOf('Player Characters') > -1;
      let includeNonPlayerCharacters = filters.indexOf('Non Player Characters') > -1;

      return this.minis.filter((mini, index) => {
        if(includePlayerCharacters && mini.playerCharacter) {
          return true;
        }

        if(includeNonPlayerCharacters && mini.nonPlayerCharacter) {
          return true;
        }

        else {
          return false;
        }
      })
    }

    else {
      return this.minis;
    }
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
