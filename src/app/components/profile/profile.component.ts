import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';


@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  repos:any;
  username:string;

  constructor(private profileServices: ProfileService) { 
    this.profileServices.getProfileInfo().subscribe(pofile => {
      console.log(profileServices);
      this.profile = this.profile;
    });

    this.profileServices.getProfileRepos().subscribe(repos =>{
      console.log(repos)
      this.repos = repos;
    })
  }

  findProfile(){
    this.profileServices.updateProfile(this.username);
    this.profileServices.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
    });

    this.profileServices.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit() {
    this.profileServices.updateProfile('DancanOduor');
    this.profileServices.getProfileInfo().subscribe(profile => {this.profile = profile;
    console.log(profile)});
    this.profileServices.getProfileRepos().subscribe(repos =>  this.repos = repos);
  }

}
