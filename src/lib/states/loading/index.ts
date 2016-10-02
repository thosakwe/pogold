import {Physics, ScaleManager, State, Text} from 'phaser-shim';
import States from '../names';

export default class Loading extends State {
    _interval: any;
    _percent = 0;

    text: Text;

    preload(): void {
        this.load.spritesheet('pokedex', 'assets/pokedex.png', 64.8, 64.3, 252);
    }


    create(): void {
        this.stage.backgroundColor = '#000';
        this.physics.startSystem(Physics.ARCADE);
        this.world.setBounds(0, 0, this.game.width, this.game.height * 3);

        // Resizing logic
        /* this.game.scale.scaleMode = ScaleManager.SHOW_ALL;
         window.addEventListener('resize', e => {
         this.game.scale.setGameSize(
         window.innerWidth * window.devicePixelRatio,
         window.innerHeight * window.devicePixelRatio);
         });*/

        this.text = this.add.text(0, 0, window.document.title = '0% loaded...', {
            boundsAlignH: 'center',
            boundsAlignV: 'middle',
            fill: '#fff'
        }).setTextBounds(0, 0, this.game.width, this.game.height);

        /*
         this._interval = window.setInterval(() => {
         this.text.setText(window.document.title = `${this._percent++}% loaded...`);

         if (this._percent > 100) {
         window.clearInterval(this._interval);
         this.game.state.start(States.TITLE);
         }
         }, 25);
         */

        this.game.state.start(States.TITLE);
    }
}