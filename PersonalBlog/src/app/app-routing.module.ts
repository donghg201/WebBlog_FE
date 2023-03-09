import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./module/home/home.component";
import {AboutComponent} from "./module/about/about.component";
import {PageNotFoundComponent} from "./module/page-not-found/page-not-found.component";
import {LibraryComponent} from "./module/library/library.component";
import {PodcastComponent} from "./module/podcast/podcast.component";
import {BlogComponent} from "./module/blog/blog.component";
import {SidebarComponent} from "./module/sidebar/sidebar.component";
import {LoadingComponent} from "./module/loading/loading.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'document',
    loadChildren: () => import('./module/document/document.module').then(m => m.DocumentModule)
  },
  {
    path: 'library',
    component: LibraryComponent
  },
  {
    path: 'podcast',
    component: PodcastComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  },


  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: LoadingComponent
    }
  )],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
