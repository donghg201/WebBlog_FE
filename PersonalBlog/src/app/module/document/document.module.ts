import {NgModule} from "@angular/core";
import {DocumentCreateComponent} from "./document-create/document-create.component";
import {DocumentComponent} from "./document.component";
import {CommonModule} from "@angular/common";
import {DocumentRoutingModule} from "./document-routing.module";
import { DocumentListComponent } from './document-list/document-list.component';

@NgModule({
  declarations: [
    DocumentComponent,
    DocumentCreateComponent,
    DocumentListComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule
  ]
})

export class DocumentModule {
}
