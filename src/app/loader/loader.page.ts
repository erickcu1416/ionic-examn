import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader-page',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage {
  loader = false;
  constructor(private _loaderService: LoaderService, private router: Router) {}

  showLoader() {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
      this.router.navigate(['/interceptor-loader'])
    }, 10000);
  }

  showLoaderWithRedux() {
    this._loaderService.showLoader();

    setTimeout(() => {
      this._loaderService.hideLoader();
      this.router.navigate(['/interceptor-loader'])
    }, 5000);
  }

}
