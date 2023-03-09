import {Component, OnInit} from '@angular/core';
import {Documents} from "../../../entity/Documents";
import {DocumentService} from "../../../service/document.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  documents?: Documents[];

  constructor(private documentService: DocumentService, private router: Router) {
  }

  ngOnInit(): void {
    this.documentService.getDocument().subscribe(data => {
      this.documents = data;
      console.log(data)
    }, error => {
      console.log(error);
    })
  }
}
