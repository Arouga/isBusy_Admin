import { Component, OnInit } from '@angular/core';

import {UserService} from '../../services/user.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/icons', title: 'Emplacements',  icon:'location_map-big', class: '' },
    { path: '/table-list', title: 'Utilisateurs',  icon:'design_bullet-list-67', class: '' },
    { path: '/notifications', title: 'Feedbacks',  icon:'ui-1_bell-53', class: '' },

    { path: '/user-profile', title: 'Mon profil',  icon:'users_single-02', class: '' },
    


  /*  { path: '/upgrade', title: 'Déconnexion',  icon:'objects_spaceship', class: 'active active-pro' } */

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };

 /* 
  logout(){
    this.userService.logoutServer()
    .subscribe(
      (user) => {
        if (user != null) {
          this.userService.logoutClient();
        }
        
      },
      (error) => {
        console.error(error);
        this.userService.logoutClient();
      }
    );

  }
  */
}
