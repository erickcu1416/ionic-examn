import { createReducer, on } from '@ngrx/store';
import { show, hide, reset } from '../actions/counter.actions';

export const initialState = false;

export const counterReducer = createReducer(
  initialState,
  on(show, (state) => true),
  on(hide, (state) => false),
  on(reset, (state) => false)
);
