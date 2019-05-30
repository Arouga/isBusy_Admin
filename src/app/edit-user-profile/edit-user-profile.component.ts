import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit {

  personne: {
    user : null,
    message: '',
    status : '',

    users : {
      id : null,
      nom : '',
      prenom : '',
      username : '',
      motDePasse : '',
      email : '',
      adresse : '',
      ville : '',
      active : '',
      roles : {
        roleId : null,
        role : ''
      }
    }
  };
  
  constructor(userService : UserService) {
      userService.getUsers('ali','ali').subscribe(
        res => {
              console.log(res);
              this.personne = res;
        }, 
        
        err => {
              console.log(err);
        }
      )
   }

  ngOnInit() {

  }
}
