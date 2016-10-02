import Pokedex from "../../pokemon/pokedex";
import Protagonist from "../../game-objects/protagonist";
import {Group, RandomDataGenerator, Physics, Sprite, State, TileSprite} from 'phaser-shim';
import Rarity from './rarity';
import {States} from "../index";

abstract class Route extends State {
    private _framesSinceLastSpawnCheck = 0;
    bg: TileSprite;
    colliders:Group;
    pokedex:Pokedex;
    protagonist: Protagonist;
    protected wildEncounterRarity: number = Rarity.COMMON;

    canSpawnPokemon(): boolean {
        // P = x / 187.5
        const probability = Math.round(this.wildEncounterRarity * 100 / 18.75);
        const selection = this.rnd.between(1, 100);
        return selection <= probability;
    }

    create(): void {
        super.create();

        this.colliders = this.add.group();
        this.colliders.enableBody = true;
        this.colliders.physicsBodyType = Physics.ARCADE;

        this.protagonist.create();
        this.protagonist.draw(this.game.width / 2, this.game.height / 2);
        this.camera.follow(this.protagonist.sprite);

        this.pokedex = new Pokedex(this.game);
        this.pokedex.preload();
    }

    maybeSpawn(otherwise?: Function): void {
        let shouldSpawn = this._framesSinceLastSpawnCheck++ > 60;

        if (shouldSpawn) {
            shouldSpawn = this.protagonist.anyKeyIsDown() && this.canSpawnPokemon();
            this._framesSinceLastSpawnCheck = 0;
        }

        if (shouldSpawn) {
            this.spawnPokemon();
        } else if (otherwise != null) otherwise();
    }

    normalUpdate():void {
        this.protagonist.update();
    }

    preload(): void {
        super.preload();

        this.protagonist = new Protagonist(this.game);
        this.protagonist.preload();
    }

    spawnPokemon(): void {
        const species = this.pokedex.randomSpecies();
        this.game.state.start(States.BATTLE, true, false, species);
    }

    update(): void {
        super.update();

        this.physics.arcade.collide(this.protagonist.sprite, this.colliders);

        this.maybeSpawn(() => {
            this.normalUpdate();
        });
    }
}

export default Route;