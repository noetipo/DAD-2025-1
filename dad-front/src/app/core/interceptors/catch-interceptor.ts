// src/app/core/interceptors/catch.interceptor.ts
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const catchInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.warn('⚠️ No autorizado (401) - posible token expirado');
        // Aquí podrías redirigir, limpiar sesión, etc.
      } else if (error.status >= 500) {
        console.error('🛑 Error del servidor (5xx)', error);
      } else {
        console.error('⚠️ Error HTTP', error);
      }

      return throwError(() => error);
    })
  );
};
