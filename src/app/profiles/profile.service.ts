import { Injectable } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user:User;
  repo:Repo;
  reposArray:any;
  private username:string;
  constructor() { }
}
