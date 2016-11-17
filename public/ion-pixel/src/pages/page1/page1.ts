import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NavController } from 'ionic-angular';

import 'rxjs/Rx';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(
    public navCtrl: NavController, 
    private _http: Http 
    ) {
  }

  testCable() {
     console.log( 'sending test post request to rails /test...' );
     let h = new Headers();
      h.append('Content-Type', 'application/json');

      // Angular 2 Http Request Returns Observables using RxJs. 
      // Check out Reactives Documentation on how to chain methods on the response.
      this._http
        .post(
            "http://localhost:3000/test",
            { data: "test" },
            { headers:h }
        )
        .map(res => res.json())
        .subscribe(
            data => this.handleTestResponse(data),
            error => console.log(error)
        );
      } 

   handleTestResponse( data ) {
     console.log( 'Handling The /test Response from Rails...', data );
   }
}
