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

  ngOnInit() {
  }

}
