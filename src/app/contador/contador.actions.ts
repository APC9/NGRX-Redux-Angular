import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Contador] Increment');
export const decrement = createAction('[Contador] Decrement');

export const multiply = createAction(
    '[Contador] Multiply',
    props<{ value: number }>()
  );

export const slit = createAction(
    '[Contador] Slit',
    props<{ value: number }>()
  );
  
export const reset = createAction('[Contador] Reset');
