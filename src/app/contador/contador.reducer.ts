import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, multiply, slit } from './contador.actions';

export const initialState = 20;

export const contadorReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiply, (state, { value } ) => state * value),
  on(slit, (state, { value } ) => state / value),
  on(reset, () => initialState )
);
