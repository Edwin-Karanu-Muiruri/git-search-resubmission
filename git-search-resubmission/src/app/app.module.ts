import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'search/repos', component: SearchRepoComponent},
  { path: 'search/users', component: SearchUserComponent},
  { path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchRepoComponent,
    SearchUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
