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

	initLoginForm(){
		this.loginForm = this.fb.group({
			email: ['', [Validators.required, Validators.maxLength(190), Validators.email]],
			password: ['', [Validators.required, Validators.maxLength(190)]],
			remember: [true]
		});
	}

	submitLoginForm(): void {
		for (const i in this.loginForm.controls) {
			this.loginForm.controls[i].markAsDirty();
			this.loginForm.controls[i].updateValueAndValidity();
		}

		if(!this.loginForm.invalid) {
			this._userService.loginServer(this.loginForm)
				.subscribe(
					(user) => {
						if(user != null) {
							this.loginErrorMsg = '';
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
	}

	cleanLoginPwd(){
		this.loginForm.patchValue({
			password: ''
		});
	}

}
