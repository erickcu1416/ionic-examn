import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterceptorLoaderPageRoutingModule } from './interceptor-loader-routing.module';

import { InterceptorLoaderPage } from './interceptor-loader.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    InterceptorLoaderPageRoutingModule
  ],
  declarations: [InterceptorLoaderPage]
})
export class InterceptorLoaderPageModule {}
