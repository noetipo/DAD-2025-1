import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import {catchInterceptor} from './core/interceptors/catch-interceptor';
import {urlInterceptor} from './core/interceptors/url-interceptor';
import {tokenInterceptor} from './core/interceptors/token-interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        tokenInterceptor,
        urlInterceptor,
        catchInterceptor
      ])
    )
  ]
};
