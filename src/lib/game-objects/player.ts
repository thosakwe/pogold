import Character from "./character";
import {CursorKeys, Keyboard, Point, Sprite} from 'phaser-shim';

abstract class Player extends Character {
    keys:CursorKeys;
    speed = new Point(20, 20);

    create(): void {
        this.keys = this.game.input.keyboard.createCursorKeys();
    }

    down():void {}

    draw(x: number, y: number): Sprite {
        const sprite = super.draw(x, y);
        this.speed.setTo(sprite.x / 2);
        return sprite;
    }

    idle():void {
        this.body.velocity.setTo(0);
    }

    left():void {}

    right():void {}

    up():void {}
}

export default Player;