import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit {
  editProfileForm: FormGroup;
  error: string;
  success: string;
  villes: string[];

  user:
  {
    id: null,
    nom: '',
    prenom: '',
    username: '',
    motDePasse: '',
    email: '',
    adresse: '',
    ville: '',
    active: null,
    roles: [],
    enabled: true,
    password: '',
    authorities: [],
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true
  };
  ngOnInit() {
    this.villes = [
      'Tanger',
      'Tetouan',
      'Guelmim',
      'Rabat',
      'Casablanca',
      'Agadir',
      'Marrakech',
      'Autres'
    ];

    this.success = null;
    this.error = null;
    this.editProfileForm = this.formBuilder.group({
      'nom': [null, Validators.required],
      'prenom': [null, Validators.required],
      'username': [null, Validators.required],
      'email': [null, Validators.required],
      'adresse': [null, Validators.required],
      'ville': [null, Validators.required],
      'motDePasse': [null, Validators.required],
      'id': [null, Validators.required],
    });

    this.userService.getUsers().subscribe(res => {
      console.log(res);
      this.user = res;
      this.editProfileForm.patchValue({
        nom: res.user.nom,
        prenom: res.user.prenom,
        username: res.user.username,
        adresse: res.user.adresse,
        email: res.user.email,
        id: res.user.id,
        motDePasse: res.user.motDePasse,
        ville: res.user.ville,
        active: res.user.active,
      });
    }, err => {
      console.log(err);
      this.error = 'Erreur survenue lors de la recuperation des informations de l\'utilisateur !';
    });
  }



  constructor(private userService: UserService, private toastr: ToastrService, private formBuilder: FormBuilder) {

  }

  editProfile() {
    if (this.editProfileForm.invalid) {
      this.error = 'Formulaire invalide !';
      console.log(this.editProfileForm);
      return;
    }

    const formData = this.editProfileForm.value;

    formData.roles = [
      {
        'roleId' : 1,
        'role': 'ADMIN'
      }
    ];
    this.success = null;
    this.error = null;
    this.userService.editProfile(formData).subscribe(
      (success) => {
        console.log(success);
        this.success = 'Profil correctement mis a jour !';
      },
      (error) => {
        console.log(error);
        this.error = 'Erreur lors de la mise a jour du profil !';
      },
    )
  }
}
