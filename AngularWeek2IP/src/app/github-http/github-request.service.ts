import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Search} from '../classes/search';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  
  profiles:any;
  private Username: string;
  

  constructor(private http:HttpClient) {
    this.Username = "Edwin-Karanu-Muiruri"
   }
  
   searchRequest(){
    let promise = new Promise((resolve,reject)=>{
    this.http.get("https://api.github.com/users/" + this.Username + "?client_id =" + environment.clientID+ "&client_secret=" + environment.clientSecret).toPromise().then(profiles =>{
      this.profiles = profiles
      resolve();
      reject();
    })
    })
    
  }
  refreshProfile(username:string){
    this.Username = username
  }
  
}