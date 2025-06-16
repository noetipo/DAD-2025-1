// src/app/core/interceptors/url.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import {environment} from '../../environments/environment';

export const urlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = environment.apiBaseUrl; // Cambia según tu API

  // Si la URL no empieza con http o https, se le añade la base URL
  if (!req.url.startsWith('http')) {
    const apiReq = req.clone({ url: baseUrl + req.url });
    return next(apiReq);
  }

  return next(req);
};
