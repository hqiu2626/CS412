import { Component, OnInit } from '@angular/core';
import { pokemonlist } from '../data/pokemonMOCK';
import {Pokemon} from '../data/Pokemon';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemonlist: Pokemon[] = pokemonlist;
  pokemon: Pokemon;
  selectedPokemon: Pokemon;
  fubar: any;

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedPokemon(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
    console.log(`${pokemon.name}`);
  }

}
