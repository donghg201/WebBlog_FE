import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Documents} from "../../entity/Documents";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private API_DOCUMENT_URL = 'http://localhost:8080/api/document';

  constructor(private httpClient: HttpClient) {
  }

  getDocument(page: number, size: number): Observable<any> {
    return this.httpClient.get<any>(this.API_DOCUMENT_URL + '/list?page=' + page + '&size=' + size);
  }

  getDocumentByName(name: string): Observable<Documents> {
    return this.httpClient.get<Documents>(this.API_DOCUMENT_URL + '/detail/' + name);
  }

  deleteByName(name: string): Observable<any> {
    return this.httpClient.delete(this.API_DOCUMENT_URL + '/delete/' + name)
  }

  addDocument(document: Documents): Observable<any> {
    return this.httpClient.post(this.API_DOCUMENT_URL + '/create', document);
  }


}

