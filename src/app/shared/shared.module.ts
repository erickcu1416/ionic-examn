import { NgModule } from '@angular/core';
import { LoaderComponent } from '../components/loader/loader.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoadingInterceptor } from './loading.interceptor';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    LoaderComponent,
  ],
  exports: [
    LoaderComponent,
  ],
  providers: [provideHttpClient(
    withInterceptors([LoadingInterceptor]))]
})
export class SharedModule { }