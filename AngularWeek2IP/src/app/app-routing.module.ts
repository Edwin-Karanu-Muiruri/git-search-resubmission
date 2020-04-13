import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SearchResultsComponent } from './search-results/search-results.component';


const routes: Routes = [
  {path: 'searchResults', component:SearchResultsComponent},
  {path: 'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
