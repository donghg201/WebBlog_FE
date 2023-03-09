import {RouterModule, Routes} from "@angular/router";
import {DocumentCreateComponent} from "./document-create/document-create.component";
import {NgModule} from "@angular/core";
import {DocumentListComponent} from "./document-list/document-list.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: DocumentListComponent
  },
  {
    path: 'list',
    component: DocumentListComponent
  },
  {
    path: 'create',
    component: DocumentCreateComponent
  },

  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DocumentRoutingModule {
}
