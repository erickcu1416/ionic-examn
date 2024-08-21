import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterceptorLoaderPage } from './interceptor-loader.page';

const routes: Routes = [
  {
    path: '',
    component: InterceptorLoaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterceptorLoaderPageRoutingModule {}
