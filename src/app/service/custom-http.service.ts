import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  headers;

  private SAVE_REQUEST_TIMEOUT = 600000;
  private REQUEST_TIMEOUT = 120000;
  private REQUEST_RETRY = 30000;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private loader: LoaderService
  ) {
  
    
  }

  get(uri: string, params?: any, local?: boolean) {
    
    this.loader.isLoading.next(true);
    const options = {
      params
    };

    return this.http.get('https://jsonplaceholder.typicode.com' + uri, options).pipe(
      catchError((err: any): any => {
        return this.handleErrors(err);
      }));
  }


  
  post(uri: string, body?: any, local?: boolean): Observable<any> {
 
    this.loader.isLoading.next(true);
    const options = {
    };

    return this.http.post('https://jsonplaceholder.typicode.com' + uri, body, options).pipe(
      catchError((err: any): any => {
        return this.handleErrors(err);
      }));
  }

  handleErrors(err: any) {
    this.loader.isLoading.next(false);
    console.error('HTTP ERROR :', err);
    if ([400, 422, 401, 403, 500].indexOf(err.status) !== -1) {
      this.snackBar.open('Ups! ha ocurrido un problema con el servicio', null, {
        duration: 3000,
      });
    } else {
      this.snackBar.open('Ups! No se puede conectar al servidor', null, {
        duration: 3000,
      });
    }
    return throwError(err);
  }
}
