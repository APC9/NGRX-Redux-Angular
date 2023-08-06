import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/interfaces/appStore.interfaces';
import * as actions from '../contador.actions';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent {

  public contador?: number;

  private store = inject( Store<AppStore> );

  constructor(){
    this.store.select('contador')
      .subscribe( contador => this.contador = contador);
  }

  slit( value: number){
    this.store.dispatch( actions.slit( { value } ) )
  }

  multiply( value: number){
    this.store.dispatch( actions.multiply( { value } ) )
  }

}
