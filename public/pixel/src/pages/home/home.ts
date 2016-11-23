import { Component } from '@angular/core';

import { GameService } from '../../providers/game-service';

import { NavController } from 'ionic-angular';

import { Ng2Cable, Broadcaster } from 'ng2-cable/js/index';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GameService, Ng2Cable, Broadcaster]
})
export class HomePage {
  public games: any;

  constructor(public navCtrl: NavController, public gameService: GameService,private ng2cable: Ng2Cable,
              private broadcaster: Broadcaster) {
    this.loadGame();
    this.ng2cable.subscribe('http://localhost:3000/cable', 'GamesChannel');
        //By default event name is 'channel name'. But you can pass from backend field { action: 'MyEventName'}

        this.broadcaster.on<string>({action: 'test'}).subscribe(
          game => {
          console.log(game);
          console.log('This is a test to do this');
        }

      );
  }
  loadGame() {
  this.gameService.load()
    .then(data => {
      this.games = data;
    });
}

}
