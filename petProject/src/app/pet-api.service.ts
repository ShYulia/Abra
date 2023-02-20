import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pet } from './pet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetApiService {
  private url = 'api/pets'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  addPet(pet: Pet | any): Observable<any>{
    return this.http.post(this.url,pet,this.httpOptions).pipe(
      catchError(this.handleError<any>('Error'))
    )
  }
  getPets(): Observable <any>{
    return this.http.get<Pet[]>(this.url)
    .pipe(
      catchError(this.handleError<Pet[]>('Error',[]))
    )

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }
}
