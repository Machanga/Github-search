import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profiles/profile.service';
import {User} from '../user';
import {Repo} from '../repo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[ProfileService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;
  repo: Repo;
  reposArray: any[];
  public username: string;
  constructor(private profileService: ProfileService) { }

  search(){
    this.profileService.updateProfile(this.username);
    this.profileService.userRequest();
    this.profileService.repoRequest();
    this.reposArray = this.profileService.reposArray;
  }
  ngOnInit() {
    this.profileService.userRequest();
    this.user = this.profileService.user;

    this.profileService.repoRequest();
    this.reposArray=this.profileService.reposArray;
  }

}
