import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { environment } from './../../environments/environment';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

@Injectable({
	providedIn: 'root'
})
export class UserService {


	// Holds the validation errors coming from the server
	errorResp: HttpErrorResponse = null;

	// Holds if the user is logged in or not
	private loggedIn = new BehaviorSubject<boolean>(this._tokenService.isTokenValid());
	authStatus = this.loggedIn.asObservable();

	/**
	 * Creates an instance of user service.
	 * @param http 
	 * @param router 
	 * @param messageService 
	 * @param _tokenService 
	 */
	constructor(
		private http: HttpClient,
		private router: Router,
		private _tokenService: TokenService
	) { }









	/**
	 * Logins server side
	 * @param form 
	 * @returns server$
	 */
	loginServer(data): Observable<User> {
		console.log(`userService => trying to loginServer : `, data);

		var username = data.username;
        var password = data.motDePasse;
        var all = username + ':' + password;
        var all_crypted = btoa(all);

        let myHeaders: HttpHeaders = new HttpHeaders();
        myHeaders = myHeaders.append('Authorization', 'Basic ' + all_crypted);
        return this.http.get(environment.api + '/users/me', { headers: myHeaders, withCredentials: true });

	}

	/**
	 * Logins client side
	 * @param user 
	 */
	loginClient(user: User): void {

		this.changeAuthStatus(true);
		localStorage.setItem('user_info', user.email);
		this.router.navigateByUrl('/dashboard');
	}

	/**
	 * Changes auth status
	 * @param value 
	 */
	changeAuthStatus(value) {
		this.loggedIn.next(value);
	}








	/**
	 * Logouts server side
	 * @returns server$
	 */
	logoutServer(): Observable<User> {
		console.log(`userService => trying to logoutServer`);

		return this.http.get(environment.api + '/').pipe(
			tap((user: User) => console.log(`userService => logout user = `, user)),
			catchError(this.handleError(`userService => user not logout`, null))
		);
	}

	/**
	 * Logouts client side
	 */
	logoutClient(): void {
		this.router.navigateByUrl('/home');

		this._tokenService.remove();

		this.changeAuthStatus(false);
	}











	/**
	 * Gets user from server side
	 * @returns user$
	 */
	getUserServer(): Observable<User> {
		console.log(`userService => trying to getUser`);

		return this.http.get<User>(environment.api + '/').pipe(
			tap((user: User) => console.log(`userService => got user = `, user)),
			catchError(this.handleError(`userService => user not got`, null))
		);
	}
















	/**
	 * Gets error response
	 * @returns error response 
	 */
	public getErrorResponse(): HttpErrorResponse {
		return this.errorResp;
	}

	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: HttpErrorResponse): Observable<T> => {

			console.error(`\n ${operation} failed : ${error.message}`);

			this.errorResp = error;

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

}
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Basic YWxpOmFsaQ==');
    return this.http.get(environment.api+'/users/me', { headers: myHeaders, withCredentials: true });
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getListeUsers(): Observable<any> {

    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Basic YWxpOmFsaQ==');
    return this.http.get(environment.api+'/users', { headers: myHeaders, withCredentials: true });
  }

  getProfile(): Observable<any> {

    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Basic YWxpOmFsaQ==');
    return this.http.get(environment.api+'/users/me', { headers: myHeaders, withCredentials: true });
  }


  editProfile(data): Observable<any> {

    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Basic YWxpOmFsaQ==');
    return this.http.post(environment.api+'/users/update',data, { headers: myHeaders, withCredentials: true });
  }



}



>>>>>>> f0876e0c461026b47cdcc53a28eae42c72750127
