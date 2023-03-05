import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../entity/Category";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_CATEGORY_URL = 'http://localhost:8080/api/category';

  constructor(private httpClient: HttpClient) {
  }

  getCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API_CATEGORY_URL);
  }

  addCategory(category: Category): Observable<any> {
    return this.httpClient.post(this.API_CATEGORY_URL + '/create', category);
  }

  deleteByName(name: string): Observable<any> {
    return this.httpClient.delete(this.API_CATEGORY_URL + '/delete/' + name)
  }
}

