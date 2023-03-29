import {Component, OnInit} from '@angular/core';
import {Documents} from "../../../entity/Documents";
import {Router} from "@angular/router";
import {DocumentService} from "../../../service/document/document.service";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  page: number = 0;
  size: number = 3;

  displayLoadMore: boolean = true;

  documentList: Documents[] = [];

  constructor(private documentService: DocumentService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.reset();
    this.documentService.getDocument(this.page, this.size).subscribe(data => {
      this.documentList = data.content;
      console.log(this.documentList);
      if (this.page >= data.totalPages - 1) {
        this.displayLoadMore = false;
      }
    })
  }

  loadMore() {
    this.page++;
    this.documentService.getDocument(this.page, this.size).subscribe(data => {
      this.documentList = this.documentList.concat(data.content);
      if (this.page >= data.totalPages - 1) {
        this.displayLoadMore = false;
      }
    })
  }


  reset() {
    this.page = 0;
    this.displayLoadMore = true;
  }
}
