import { Injectable } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { environment } from '../../environments/environment';
import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user:User;
  repos:Repo;
  reposArray:any;
  private username:string;
  apiUrl: "https://api.github.com/users/";
  constructor( private http:HttpClient) {
    this.username = "Machanga";
    this.user = new User ("","","","","","","",0,0,0,0,"");
    this.repos = new Repo("","","", "");
    this.reposArray = [];
   }

   userRequest(){
    interface ApiResponse{
      name:string;
      login:string;
      avatar_url:string;
      bio:string;
      blog:string;
      email:string;
      followers:number;
      following:number;
      public_gists:number;
      public_repos:number;
      html_url:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(this.apiUrl + this.username + '?access_token=' + environment.apiKey).toPromise().then(response=>{
        this.user.name = Response.name;
        this.user.login = response.login;
        this.user.avatar_url = response.avatar_url;
        this.user.bio = response.bio;
        this.user.blog = response.blog;
        this.user.email = response.email;
        this.user.followers = response.followers;
        this.user.following = response.following;
        this.user.public_gists = response.public_gists;
        this.user.public_repos = response.public_repos;
        this.user.html_url = response.html_url;
        resolve()
        console.log("Everything looks good!");
        console.log(this.user);
      },
      error=>{
        console.log("Error!")
        reject(error);
      }
      )
    })
    return promise;
  }
  repoRequest(){
    this.reposArray = [];
    interface ApiResponse{
      name:string;
      html_url:string;
      language: string;
      description:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(this.apiUrl + this.username +"/repos" + '?access_token=' + environment.apiKey).toPromise().then(response=>{ {
        this.repos.name = response.name;
        this.repos.html_url = response.html_url;
        this.repos.language=response.language;
        this.repos.description = response.description;
        this.reposArray.push(this.repos);
        this.repos = new Repo("","","","");

        }
        console.log(this.reposArray);
      },
      error=>{
        console.log("Error occured")
        reject(error)
      })
    })
    return promise;
  }
}
