import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiniService {

  public minis: Mini[] = [];

  constructor() { 
    this.minis = [
      {
        name: "gnome druid",
        imagePath: "assets/img/gnome_druid.jpg"
      },
      {
        name: "human druid",
        imagePath: "assets/img/human_druid.jpg"
      }
    ]
  }

  filterMinis(searchTerm) {
    return this.minis.filter(mini => {
      return mini.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    })
  }
}

class Mini {
  name: string;
  imagePath: string;
}
