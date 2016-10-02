import Species from "../species";
import {Sprite} from 'phaser-shim';

export default class Bulbasaur extends Species {
    back(): Phaser.Sprite {
        return null;
    }

    front(): Sprite {
        const sprite = this.game.add.sprite(0, 0, 'pokedex', 226);
        sprite.anchor.set(0.5, 0.5);
        return sprite;
    }

    num(): number {
        return 1;
    }

    name(): string {
        return 'Bulbasaur';
    }
}