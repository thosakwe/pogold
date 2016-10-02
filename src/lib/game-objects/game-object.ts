import {Game, Sprite} from 'phaser-shim';

abstract class GameObject {
    constructor(protected game:Game) {}

    preload():void {}

    abstract draw(x:number, y:number):Sprite;
}

export default GameObject;