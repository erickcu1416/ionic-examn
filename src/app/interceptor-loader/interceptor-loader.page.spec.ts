import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterceptorLoaderPage } from './interceptor-loader.page';

describe('InterceptorLoaderPage', () => {
  let component: InterceptorLoaderPage;
  let fixture: ComponentFixture<InterceptorLoaderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptorLoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
