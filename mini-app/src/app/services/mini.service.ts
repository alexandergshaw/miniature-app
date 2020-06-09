import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiniService {

  public minis: Mini[] = [];

  constructor() { }
}

class Mini {
  data: any;
}
