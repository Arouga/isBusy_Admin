import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../services/locations.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
 
  //locations:any[];
  locations= {
   emplacement:null,
   message:'',
   status:null,
   emplacements:{
    id: '',
    nomEmplacement: '',
    categorie: '' ,
    latitude: null ,
    longitude: null ,
    status: null,
    vote:null,
    users:{
      id: null,
      nom: '' ,
      prenom: '' ,
      username: '' ,
      motDePasse: '',
      email: '',
      adresse:'',
      ville:'',
      active:null,
      roles:{
        roleId:null,
        role:''
      }}},
      stats:null
  };
 /*locations= {
    user:null,
    message:'',
    status:null,
    users:{
    id: null,
    nom: '' ,
    prenom: '' ,
    username: '' ,
    motDePasse: '',
    email: '',
    adresse:'',
    ville:'',
    active:null,
    roles:{
      roleId:null,
      role:''
    }
  }
  };*/

  constructor(private locationsService: LocationsService,private toastr: ToastrService) {
  
      locationsService.getLocations().subscribe(res => {
        console.log(res);
        this.locations = res;
      }, err =>{
        console.log(err);
  
  
      } )
   
   
    
    
  }
  Approuver(id){
    //changer le status va prendre 1
    this.locationsService.approveLocation(id).subscribe();

  }
  Ignorer(id){ 
    //changer le status va prendre 2
    
    this.locationsService.ignoreLocation(id).subscribe();


  }
  showNotification(from, align){

    const color = Math.floor((Math.random() * 5) + 1);

      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Emplacement <b>Approuvé</b>', '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: "alert alert-warning alert-with-icon",
         positionClass: 'toast-' + from + '-' +  align
       });
      }
      showNotificationI(from, align){

        const color = Math.floor((Math.random() * 5) + 1);
    
          this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Emplacement <b>Ignoré</b>', '', {
             timeOut: 8000,
             closeButton: true,
             enableHtml: true,
             toastClass: "alert alert-warning alert-with-icon",
             positionClass: 'toast-' + from + '-' +  align
           });
          }

  ngOnInit() {
  }

}
