import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  personne: {
    user:
        { id:null,
          nom:'',
          prenom:'',
          username:'',
          motDePasse:'',
          email:'',
          adresse:'',
          ville:'',
          active:null,
          roles:[],
          enabled:true,
          password:'',
          authorities:[],
          accountNonExpired:true,
          accountNonLocked:true,
          credentialsNonExpired:true},
          message:'',
          status:null,
          users:null};

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
