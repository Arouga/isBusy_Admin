import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TokenService } from '../services/token.service';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(
		private fb: FormBuilder,
		private _tokenService: TokenService,
		private _userService: UserService

	) { }

	ngOnInit() {
		// Forms initialization
		this.initLoginForm();


	}


	// Login Form
	loginForm: FormGroup;
	loginErrorMsg: string = '';

	initLoginForm() {
		this.loginForm = this.fb.group({
			username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
			motDePasse: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(2)]],
			remember: [true]
		});
	}

	submitLoginForm(): void {

		if (this.loginForm.invalid) {
			console.log(this.loginForm);
			this.loginErrorMsg = "Formulaire invalide !";
			return;
		}
		this.loginErrorMsg = null;
		this._userService.loginServer(this.loginForm.value)
			.subscribe(
				(user) => {
					if (user != null) {
						this._userService.loginClient(user);
					}
					else {
						this.loginErrorMsg = 'Email ou mot de passe invalide';
						this.cleanLoginPwd();
					}
				},
				(error) => {
					this.loginErrorMsg = "Aïe! une erreur c'est produite";
					console.error(error);
				}
			);

	}

	cleanLoginPwd() {
		this.loginForm.patchValue({
			motDePasse: ''
		});
	}

}
