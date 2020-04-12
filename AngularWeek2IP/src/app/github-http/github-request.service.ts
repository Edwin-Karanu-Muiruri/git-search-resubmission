import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Search} from '../classes/search';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  search: Search;

  constructor(private http:HttpClient) {
    this.search = new Search('user','repository');
   }
  
   searchRequest(){
     interface ApiResponse{
       user:any;
       repository:any;
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.accessKey).toPromise().then(response=>{
         this.search.user = search.user
         this.search.repository = search.repository

         resolve()
       },
       error=>{
         this.search.user = "Ooops, there doesn't seem to be a user with that name. Try Checking your spelling."
         this.search.repository = "Ooops, there doesn't seem to be a repository with that name. Try Checking your spelling."

         reject (error)
       })
     })
     return promise
   }
}
