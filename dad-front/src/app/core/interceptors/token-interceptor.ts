// token.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  //const token = localStorage.getItem('access_token');
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJub2UiLCJpZCI6MSwiaWF0IjoxNzUwMDk0MjcwLCJleHAiOjE3NTAwOTc4NzB9.8_kOzCc_G6_zbPb6KRlZSEFmouTfm8VoJx2GMcgXVdE"

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
