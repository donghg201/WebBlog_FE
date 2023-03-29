import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Documents} from "../../../entity/Documents";
import {DocumentService} from "../../../service/document/document.service";

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss']
})
export class DocumentCreateComponent implements OnInit {

  public formCreateDocument!: FormGroup;

  document: Documents | undefined;

  constructor(private activeRouter: ActivatedRoute, private documentService: DocumentService,
              private formBuilder: FormBuilder,
              private router: Router,
              public toastrService: ToastrService,
              public http: HttpClient) {
  }

  ngOnInit(): void {
    this.formCreateDocument = this.formBuilder.group({
      documentName: [''],
      documentWriter: [''],
      description: [''],
      documentPoster: [''],
    })
  }


  submitForm() {
    console.log(this.document?.documentPoster)
    this.documentService.addDocument(this.formCreateDocument.value).subscribe(data => {
      this.toastrService.success('Chia sẻ mới thành công!', 'Thông báo', {timeOut: 2000, extendedTimeOut: 1500})
      this.router.navigateByUrl('/document');
      console.log(this.formCreateDocument.value);
    }, error => {
      this.toastrService.error('Chia sẻ mới không thành công!', 'Thông báo', {timeOut: 5000, extendedTimeOut: 1500})
    })
  }
}
