import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  list = []

  constructor() { 
    for(let i = 0; i < 5; i++){
      this.list.push(i)
    }
  }
}
