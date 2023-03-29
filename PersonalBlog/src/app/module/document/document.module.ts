import {NgModule} from "@angular/core";
import {DocumentCreateComponent} from "./document-create/document-create.component";
import {DocumentComponent} from "./document.component";
import {CommonModule} from "@angular/common";
import {DocumentRoutingModule} from "./document-routing.module";
import {DocumentListComponent} from './document-list/document-list.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DocumentComponent,
    DocumentCreateComponent,
    DocumentListComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    ReactiveFormsModule
  ]
})

export class DocumentModule {
}
