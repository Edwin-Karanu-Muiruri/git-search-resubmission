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
  search:void;
  http: HttpClient;
  sResults: Search;

  constructor(githubRequestService:GithubRequestService) {
    this.search = githubRequestService.searchRequest()
   }

  ngOnInit(): any {
    interface ApiResponse{
      users:string;
      repositories:string;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/edwin-karanu-muiruri?access_token= e37ba4b49c7f9ad2483c9d42eca09e7095431d6a").subscribe(data=>{
      this.sResults = new Search(data.users, data.repositories)
    })
  }

}
