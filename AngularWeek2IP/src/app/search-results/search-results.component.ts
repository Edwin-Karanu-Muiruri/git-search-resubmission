import { Component, OnInit } from '@angular/core';
import {GithubRequestService} from '../github-http/github-request.service';
import {Search} from '../classes/search';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  searchResults: SearchResultsComponent;
  http: HttpClient;
  sResults: Search;
  profiles:any;

  constructor(public search:GithubRequestService) {
   }


  ngOnInit(): any {
    interface ApiResponse{
      users:string;
      repositories:string;
    }
    /*this.http.get<ApiResponse>("https://api.github.com/users?access_token=e37ba4b49c7f9ad2483c9d42eca09e7095431d6a&q=").subscribe(data=>{
      this.sResults = new Search(data.users, data.repositories)
      console.log(data);
    })*/
  }

}
