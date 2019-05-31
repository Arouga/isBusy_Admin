import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BeforeLoginGuard implements CanActivate {
	path: ActivatedRouteSnapshot[];
	route: ActivatedRouteSnapshot;

	result: any = [];
	key: string = 'user_info';
	/**
	 * Creates an instance of before login guard.
	 * @param _tokenService 
	 * @param router 
	 */
	constructor(
		private router: Router
	) { }


	canActivate(
		next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
	):
		boolean | Observable<boolean> | Promise<boolean> {
		return new Promise((resolve, reject) => {
			var val = localStorage.getItem(this.key);

			if (val == null || val == undefined) {
				resolve(true);
			} else {
				console.log("You are already logged in");
				this.router.navigateByUrl('/dashboard');
				resolve(false);
			}
		});
	}

}
