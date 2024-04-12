import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

console.log(uuid());

@Injectable({providedIn: 'root'})

export class DbzService {

  public characters: Character[] = [
    {
    id: uuid(),
    name: 'Tilapia',
    power: 500
  },{
    id: uuid(),
    name: 'Cachama',
    power: 4250
  },{
    id: uuid(),
    name: 'Trucha',
    power: 350
  }
  ];

    addCharacter( character: Character):void{

      const newCharacter: Character = { id: uuid(), ...character};

      this.characters.push(newCharacter);
    }

    // onDeleteCharacter(index: number){
    //   this.characters.splice(index,1);
    // }

    deleteCharacterById( id:string){
      this.characters = this.characters.filter(character => character.id !== id);
    }

}
