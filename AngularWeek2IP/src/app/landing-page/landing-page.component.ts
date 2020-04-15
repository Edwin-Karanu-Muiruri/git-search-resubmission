import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubRequestService} from '../github-http/github-request.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  username: string;
  profiles: any;

    constructor(public findProfile: GithubRequestService) {

   }
   addUser(){
     this.findProfile.refreshProfile(this.username);
     this.findProfile.searchRequest();
     this.profiles = this.findProfile.profiles
     console.log(this.profiles)
   }

  ngOnInit() {
      }

}
