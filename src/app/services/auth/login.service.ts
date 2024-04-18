import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from "rxjs/operators";
import { User } from './user'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User>=new BehaviorSubject<User>({id:0, email:''});

  constructor(private http: HttpClient) { }

  login(credentials:LoginRequest):Observable<User> {
    return this.http.get<User>('././assets/data.json').pipe(
      tap((userData: User)=> {
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true)

      }),
      catchError(this.hanndleError)
    );

  }
  private hanndleError(error:HttpErrorResponse){
    if(error.status===0){
      console.log('Se ha producido un error ', error.error);
    }
    else{
      console.error('Backend retorno el codigo de estado ', error.status, error.error)
    }
    return throwError(()=> new Error('Algo fallo intenta nuevamente'))
  }

  
}

function tap(arg0: (userData: User) => void): import("rxjs").OperatorFunction<User, User> {
  throw new Error('Function not implemented.');
}

