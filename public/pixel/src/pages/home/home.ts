import { Component } from '@angular/core';

import { GameService } from '../../providers/game-service';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GameService]
})
export class HomePage {
  public games: any;

  constructor(public navCtrl: NavController, public gameService: GameService) {
    this.loadGame();

  }
  loadGame() {
  this.gameService.load()
    .then(data => {
      this.games = data;
    });
}

}
