import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoaderPageRoutingModule } from './loader-routing.module';

import { LoaderPage } from './loader.page';
import { LoaderComponent } from '../components/loader/loader.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaderPageRoutingModule,
    SharedModule
  ],
  declarations: [LoaderPage]
})
export class LoaderPageModule {}
