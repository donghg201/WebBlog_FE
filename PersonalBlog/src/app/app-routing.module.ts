import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./module/home/home.component";
import {AboutComponent} from "./module/about/about.component";
import {PageNotFoundComponent} from "./module/page-not-found/page-not-found.component";
import {DocumentComponent} from "./module/document/document.component";
import {LibraryComponent} from "./module/library/library.component";
import {PodcastComponent} from "./module/podcast/podcast.component";
import {BlogComponent} from "./module/blog/blog.component";
import {SidebarComponent} from "./module/sidebar/sidebar.component";

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
