import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DocumentComponent} from "./document/document.component";
import {LibraryComponent} from "./library/library.component";
import {PodcastComponent} from "./podcast/podcast.component";
import {BlogComponent} from "./blog/blog.component";
import {SidebarComponent} from "./sidebar/sidebar.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'document', component: DocumentComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'podcast', component: PodcastComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'sidebar', component: SidebarComponent},


  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
