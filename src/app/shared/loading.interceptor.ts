import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs';

export const LoadingInterceptor: HttpInterceptorFn = (req, next) => {
  let count = 0;
  count++;
  const loaderService = inject(LoaderService);
  loaderService.showLoader();

  return next(req).pipe(
    finalize(() => {
      count--;
      if (!count) {
        loaderService.hideLoader();
      }
    })
  );
};
