import {Sprite, State} from 'phaser-shim';
import {States} from '../';

export default class Title extends State {
    preload(): void {
        super.preload();

        window.document.title = 'Pokémon Gold';
        this.load.audio('theme', 'assets/sounds/theme.mp3');
        this.load.image('title_banner', 'assets/title.png');
    }

    create(): void {
        this.stage.backgroundColor = '#fff';
        const theme = this.add.audio('theme');

        theme.onDecoded.add(() => {
            theme.fadeIn(2000, true);
            const banner = this.add.sprite(this.game.width / 2, this.game.height / 2, 'title_banner');
            banner.anchor.setTo(0.5);
            banner.scale.setTo(2);

            const prompt = this.add.text(0, 0, 'Click to play', {
                boundsAlignH: 'center',
                fill: 'red',
                font: '32px Arial'
            });
            prompt.anchor.setTo(0.5, 1);
            prompt.setTextBounds(0, 0, banner.width, banner.height);

            this.input.onDown.add(() => {
                theme.destroy();
                this.game.state.start(States.ROUTE1);
            });
        });
    }
}