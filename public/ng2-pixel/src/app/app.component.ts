import { Ng2Cable, Broadcaster } from 'ng2-cable/ts';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


Broadcaster

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  providers:[Ng2Cable, Broadcaster] //or add to main @NgModule
})

export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform,
              private ng2cable: Ng2Cable,
              private broadcaster: Broadcaster) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();


      this.ng2cable.subscribe('http://localhost:3000/cable', 'GamesChannel');
      // //By default event name is 'channel name'. But you can pass from backend field { action: 'MyEventName'}

      this.broadcaster.on<string>('GamesChannel').subscribe(
          message => {
            console.log(message);
          }
        )

      });
  }
}
