import { Animal } from 'src/app/Animal';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.nome !== a.nome);
  }
}
