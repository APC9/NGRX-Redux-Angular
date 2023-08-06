import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/interfaces/appStore.interfaces';
import { reset } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent {

  public contador?: number;

  private store = inject( Store<AppStore> );

  constructor(){
    this.store.select('contador')
      .subscribe( contador => this.contador = contador);
  }

  reset(){
    this.store.dispatch( reset() )
  }
  
}
