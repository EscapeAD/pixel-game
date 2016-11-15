import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  buttonClicked() : void {
      console.log( 'clicked');
  }
  constructor(public navCtrl: NavController) {
  
  }

}
