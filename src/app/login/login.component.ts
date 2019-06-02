import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TokenService } from '../services/token.service';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
	
 
})
export class LoginComponent implements OnInit {

	constructor(
		private fb: FormBuilder,
		private _tokenService: TokenService,
		private _userService: UserService,
		private toastr: ToastrService

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
						this.loginErrorMsg = 'showNotification("top","left")';
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


	showNotification(from, align){

		const color = Math.floor((Math.random() * 5) + 1);
	
		  this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Mot de passe ou Username <b>invalide</b>', '', {
			 timeOut: 8000,
			 closeButton: true,
			 enableHtml: true,
			 toastClass: "alert alert-danger alert-with-icon",
			 positionClass: 'toast-' + from + '-' +  align
		   });
		}

}
