import { Injectable } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import {RepoArray} from '../repo-array';
import { environment } from '../../environments/environment';
import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user:User;
  repos:Repo;
  repoArray:RepoArray;
  private username:string;
  private reponame:string;
  
  constructor( private http:HttpClient) {
    this.username = "Machanga";
    this.user = new User ("","","","","",0,0,0,0,0);
    this.repos = new Repo("","","");
    this.repoArray = new RepoArray([]);
   }

   userRequest(){
    interface ApiResponse{
      avatar_url: string;
        login:string;
        url:string;
        name:string;
        bio:string;
        followers:number;
        following:number;
        public_repos:number;
        created_at:number;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.username +'?access_token=' + environment.apiKey).toPromise().then(response=>{
        this.user.avatarimg = response.avatar_url;
        this.user.user = response.login;
        this.user.fullname = response.name;
        this.user.email = response.url;
        this.user.bio = response.bio;
        this.user.followers = response.followers;
        this.user.following = response.following;
        this.user.noOfrepos = response.public_repos;
        this.user.date = response.created_at;
        resolve()
        
      },
      error=>{
      reject(error);
      }
      )
    })
    return promise;
  }
  repoRequest(){
    
    let promise = new Promise((resolve,reject)=>{
      this.http.get('https://api.github.com/users/' + this.username +'/repos?access_token=' + environment.apiKey).toPromise().then(response=>{ 
        this.repoArray.myRepoArray=response;
        resolve()
      },
      error=>{
        
        reject(error);
      })
    })
    return promise;
  }

  getRepo(){

    interface Response{
        name: string;
        description:string;
        language:string;
        url:string;
    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<Response>( 'https://api.github.com/repos/' + this.username + '/' + this.reponame + '?access_token=' + environment.apiKey).toPromise().then(response=>{
  
            this.repos.name=response.name;
            this.repos.description=response.description;
            this.repos.url=response.url;
  
            resolve()
        },
        error=>{
          this.repos.name="Error";
          this.repos.description="Error";
          this.repos.url="Error";
  
            reject(error)
            }
        )
    })
  
    return promise
  }
  search(username:string) {
    this.username = username;
    this.userRequest();
    this.repoRequest();
    this.getRepo();
  }
}
