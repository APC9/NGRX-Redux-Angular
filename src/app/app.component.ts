import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
import { AppStore } from './interfaces/appStore.interfaces';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'redux-app';
  public contador?: number;

  private store = inject( Store<AppStore> );

  constructor(){
    this.store.select('contador').subscribe( contador => {
      this.contador = contador;
    });
  }

  increment(value: number){
    this.store.dispatch( actions.increment() )
  }

  decrement(value: number){
    this.store.dispatch( actions.decrement() )
  }

}
