import {Game, Sprite} from 'phaser-shim';
import GameObject from "../game-objects/game-object";
import PokemonSpecies from './species';
import {Bulbasaur} from './index';

export default class Pokedex extends GameObject {
    spawnable: PokemonSpecies[] = [];
    species: PokemonSpecies[] = [];

    constructor(game: Game) {
        super(game);
        this.spawnable.push(new Bulbasaur(game));

        this.species = this.species.concat(this.spawnable);
    }

    draw(x: number, y: number): Sprite {
        return null;
    }

    preload(): void {
        super.preload();

        for (const species of this.spawnable) {
            species.preload();
        }
    }

    randomSpecies(): PokemonSpecies {
        return this.game.rnd.pick(this.spawnable);
    }
}