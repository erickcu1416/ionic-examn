import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Loader', url: '/loader', icon: 'home' },
    { title: 'Interceptor loader', url: '/interceptor-loader', icon: 'paper-plane' },
  ];
  loader$: Observable<boolean>;
  constructor(private store: Store<{ loader: boolean }>) {
    this.loader$ = store.select('loader');
  }
}
