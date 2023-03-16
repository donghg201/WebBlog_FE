import {Component, OnInit} from '@angular/core';
import {DocumentService} from "../../../service/document.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss']
})
export class DocumentCreateComponent implements OnInit {

  url = 'https://8thstreetgrille.com/wp-content/uploads/2021/04/macd-la-gi.jpeg';

  formCreateDocument!: FormGroup;

  constructor(private activeRouter: ActivatedRoute, private documentService: DocumentService,
              private formBuilder: FormBuilder, private router: Router,
              public toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.formCreateDocument = this.formBuilder.group({
      documentName: [''],
      documentWriter: [''],
      description: [''],
      documentPoster: [''],
    })
  }

  submit(formCreateDocument: FormGroup) {
    this.documentService.addDocument(this.formCreateDocument.value).subscribe(data => {
        this.toastrService.success('Chia sẻ mới thành công!', 'Thông báo!', {timeOut: 2000, extendedTimeOut: 1500}),
          this.router.navigateByUrl('/document')
      },
      error => {
        this.toastrService.error('Có lỗi xảy ra', 'Thông báo!', {timeOut: 5000, extendedTimeOut: 1500})
      })
  }

  onSelect(event: any) {
    let fileType = event.target.files[0].type;
    if (fileType.match(/image\/*/)) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        console.log(this.url);
      };
    } else {
      window.alert('Please select correct image format');
    }
  }


}
