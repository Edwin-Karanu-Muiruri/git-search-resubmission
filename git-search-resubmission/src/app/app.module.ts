import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';
import { SearchUserComponent } from './search-user/search-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchRepoComponent,
    SearchUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
