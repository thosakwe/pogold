import FirstPerson from "./first-person";
import {Sprite} from 'phaser-shim';

export default class Protagonist extends FirstPerson {
    private facing = 'd';

    down(): void {
        this.facing = 'd';
        this.body.velocity.setTo(0, this.speed.y);
        this.sprite.play('down', this.frameRate);
    }

    idle(): void {
        super.idle();

        if (this.facing == 'u')
            this.sprite.play('idle back');
        else if (this.facing === 'd')
            this.sprite.play('idle front');
        else if (this.facing === 'l')
            this.sprite.play('idle left');
        else if (this.facing === 'r')
            this.sprite.play('idle right');
    }

    left(): void {
        this.facing = 'l';
        this.body.velocity.setTo(this.speed.x * -1, 0);
        this.sprite.play('left', this.frameRate);
    }

    preload(): void {
        this.game.load.spritesheet('protagonist', 'assets/trainers/protagonist/overworld.png', 31, 32);
    }

    right(): void {
        this.facing = 'r';
        this.body.velocity.setTo(this.speed.x, 0);
        this.sprite.play('right', this.frameRate);
    }

    spawn(x: number, y: number): Sprite {
        const sprite = this.game.add.sprite(x, y, 'protagonist');

        sprite.anchor.set(0.5);

        sprite.animations.add('left', [3, 4, 5]);
        sprite.animations.add('right', [6, 7, 8]);
        sprite.animations.add('up', [9, 10, 11]);
        sprite.animations.add('down', [0, 1, 2]);
        sprite.animations.add('idle front', [1]);
        sprite.animations.add('idle back', [10]);
        sprite.animations.add('idle left', [4]);
        sprite.animations.add('idle right', [7]);
        sprite.play('idle front', this.frameRate);

        return sprite;
    }

    up(): void {
        this.facing = 'u';
        this.body.velocity.setTo(0, this.speed.y * -1);
        this.sprite.play('up', this.frameRate);
    }
}