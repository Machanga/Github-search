import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profiles/profile.service';
import {User} from '../user';
import {Repo} from '../repo';
import {RepoArray} from '../repo-array'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[ProfileService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  profile:any[];
  user:User;
  repos: Repo;
  repoArray: RepoArray;
  username: string;
  constructor(private profileService: ProfileService) { 
    this.profileService.userRequest();
    this.user = this.profileService.user;

    this.profileService.repoRequest();
    this.repoArray=this.profileService.repoArray;
  }

  search(){
    this.profileService.search(this.username);
  }
  ngOnInit() {
    
  }

}
