import GameObject from "../game-objects/game-object";
import {Sprite} from 'phaser-shim';

abstract class Species extends GameObject {
    abstract back():Sprite;
    abstract front():Sprite;
    abstract name():string;
    abstract num():number;

    draw(x:number, y:number):Sprite {
        const sprite = this.front();
        sprite.position.set(x, y);
        return sprite;
    }
}

export default Species;