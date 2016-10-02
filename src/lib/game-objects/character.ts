import GameObject from "./game-object";
import {Physics, Sprite} from 'phaser-shim';

abstract class Character extends GameObject {
    public body:Physics.Arcade.Body;
    protected frameRate = 10;
    public sprite: Sprite;

    draw(x:number, y:number): Sprite {
        this.sprite = this.spawn(x, y);
        this.game.physics.enable(this.sprite);
        this.body = <Physics.Arcade.Body>this.sprite.body;
        this.body.collideWorldBounds = true;
        return this.sprite;
    }

    create(): void {}

    abstract spawn(x:number, y:number): Sprite;

    update(): void {}
}

export default Character;