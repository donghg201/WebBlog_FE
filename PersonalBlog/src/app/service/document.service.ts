import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Documents} from "../entity/Documents";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private API_DOCUMENT_URL = 'http://localhost:8080/api/document';

  constructor(private httpClient: HttpClient) {
  }

  getDocument(): Observable<Documents[]> {
    return this.httpClient.get<Documents[]>(this.API_DOCUMENT_URL + '/list');
  }

  getDocumentByName(name: string): Observable<Documents> {
    return this.httpClient.get<Documents>(this.API_DOCUMENT_URL + '/find/' + name);
  }

  addDocument(document: Documents): Observable<any> {
    return this.httpClient.post(this.API_DOCUMENT_URL + '/create', document);
  }

  deleteByName(name: string): Observable<any> {
    return this.httpClient.delete(this.API_DOCUMENT_URL + '/delete/' + name)
  }
}

