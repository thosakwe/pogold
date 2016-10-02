import {AUTO, Game} from 'phaser-shim';
import {BattleState, LoadingState, Routes, States, TitleState} from './states';

export default class MyGame {
    game: Game;

    constructor() {
        this.game = new Game(640, 320, AUTO, 'game');

        // window.innerWidth * window.devicePixelRatio,
        // window.innerHeight * window.devicePixelRatio,

        this.game.state.add(States.LOADING, LoadingState);
        this.game.state.add(States.TITLE, TitleState);

        this.game.state.add(States.ROUTE1, Routes.Route1);

        this.game.state.add(States.BATTLE, BattleState);

        this.game.state.start(States.LOADING);
    }
}