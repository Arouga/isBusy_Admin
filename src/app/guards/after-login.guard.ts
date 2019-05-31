import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
	providedIn: 'root'
})

export class AfterLoginGuard implements CanActivate {

	path: ActivatedRouteSnapshot[];
	route: ActivatedRouteSnapshot;

	result: any = [];
	key: string = 'user_info';


	/**
	 * Creates an instance of after login guard 
	 * @param _tokenService 
	 * @param router 
	 */
	constructor(
		private router: Router,
		private _tokenService: TokenService
	) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		boolean | Observable<boolean> | Promise<boolean> {
		return new Promise((resolve, reject) => {
			const val = localStorage.getItem(this.key);
			console.log('After' +val);
			
			if (val != null && val != undefined) {
				resolve(true);
			} else {
				console.log("There is no name stored");
				this.router.navigateByUrl('/login');
				resolve(false);
			}
		});
	}

}
