import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
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


  constructor(private userService: UserService, private toastr: ToastrService) {

    this.userService.getProfile().subscribe(res => {
      console.log(res);
      this.user = res.user;
    }, err => {
      console.log(err);


    });
  }

  ngOnInit() {

  }
}
