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
       user:string;
       repository:string;
     }
    }
  }