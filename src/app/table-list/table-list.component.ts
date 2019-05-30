import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

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

