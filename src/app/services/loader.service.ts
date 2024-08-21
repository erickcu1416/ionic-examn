import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { hide, show } from '../redux/actions/counter.actions';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  loader$: Observable<boolean>;
  constructor(private store: Store<{ loader: boolean }>) {
    this.loader$ = store.select('loader');
  }

  showLoader() {
    this.store.dispatch(show());
  }

  hideLoader() {
    this.store.dispatch(hide());
  }
}
