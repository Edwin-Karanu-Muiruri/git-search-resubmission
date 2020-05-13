import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RepoSearchInterface } from './search-repo.interface'
import $ from 'jquery';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {
  searchKeywords: string;
  searchInterface: RepoSearchInterface;
  apiUrl = 'https://api.github.com/search/repositories?q=';
  constructor(private http: HttpClient, ) { }

  ngOnInit(): void { }
  items: []; total_count=0;
  searchRepos() {
    let searchPromise = new Promise((proceed, terminate) => {
      this.http.get<RepoSearchInterface>(this.apiUrl + this.searchKeywords).toPromise().then(data => {
        this.items = data['items'];
        this.total_count = data['total_count'];
        proceed();
      },error=>{
        //terminate if failed
        terminate();
      })
    });
    searchPromise;
  }
}
$(document).ready(function(){
  $("input[type=text][name=searchKeywords]").focus();
});
