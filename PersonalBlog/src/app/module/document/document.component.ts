import {Component, OnInit} from '@angular/core';
import {DocumentService} from "../../service/document.service";
import {Router} from "@angular/router";
import {Category} from "../../entity/Category";
import {DocumentCategory} from "../../entity/DocumentCategory";
import {Documents} from "../../entity/Documents";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
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
