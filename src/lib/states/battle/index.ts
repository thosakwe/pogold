import {Sprite, State} from 'phaser-shim';
import Species from "../../pokemon/species";
import States from '../names';

// Todo: Preserve position in route
export default class Battle extends State {
    protected _enemy: Species;
    protected enemy: Sprite;

    init(enemy: Species): void {
        this._enemy = enemy;
    }

    preload(): void {
        super.preload();

        this._enemy.preload();
    }

    create(): void {
        super.create();

        this.stage.backgroundColor = '#f8f8f8';

        this.enemy = this._enemy.draw(0, 0);
        this.enemy.scale.set(2, 2);
        this.enemy.position.set(this.game.width - this.enemy.width, this.enemy.width / 2);

        alert(`Wild ${this._enemy.name()} appeared!`);

        this.input.onDown.add(() => {
            this.game.state.start(States.ROUTE1);
        });
    }
}