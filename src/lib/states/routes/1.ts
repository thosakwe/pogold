import Route from "./route";
import {Sprite} from 'phaser-shim';
import Rarity from './rarity';

export default class Route1 extends Route {
    constructor() {
        super();

        this.wildEncounterRarity = Rarity.NEVER;
    }

    preload(): void {
        super.preload();

        this.game.load.image('route1', 'assets/routes/1.png');
    }

    create(): void {
        super.create();

        document.title = 'Route 1';
        this.bg = this.add.tileSprite(0, 0, 320, 612, 'route1');
        this.bg.scale.set(2, 2);
        this.world.sendToBack(this.bg);

        const sprite:Sprite = this.colliders.create(0, 0, 'pokedex', 142);
        sprite.scale.set(3);
    }

    render(): void {
        super.render();
    }
}