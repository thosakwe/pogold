import Player from "./player";

abstract class FirstPerson extends Player {
    anyKeyIsDown():boolean {
        return this.keys.up.isDown || this.keys.down.isDown || this.keys.left.isDown || this.keys.right.isDown;
    }

    create(): void {
        super.create();

        /*
        this.keys.up.onDown.add(this.up.bind(this));
        this.keys.down.onDown.add(this.down.bind(this));
        this.keys.left.onDown.add(this.left.bind(this));
        this.keys.right.onDown.add(this.right.bind(this));
        */
    }

    update(): void {
        super.update();

        if (this.anyKeyIsDown()) {
            if (this.keys.up.isDown) {
                this.up();
            } else if (this.keys.down.isDown) {
                this.down();
            } else if (this.keys.left.isDown) {
                this.left();
            } else if (this.keys.right.isDown) {
                this.right();
            }
        } else {
            this.idle();
        }
    }
}

export default FirstPerson;