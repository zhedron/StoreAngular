import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Store} from "./Store";
import {Observable} from "rxjs";

@Injectable()
export class StoreService {
  private baseURL = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  createStore (store: Store): Observable<Store> {
    return this.http.post<Store>(this.baseURL + "/store/createproduct", store);
  }

  allstore (): Observable<Store> {
    return this.http.get<Store>(this.baseURL + "/store");
  }

  update (id:number, store: Store): Observable<Store> {
    return this.http.patch<Store>(this.baseURL + `/store/${id}/update`, store);
  }

  delete (id: number): Observable<Store> {
    return this.http.delete<Store>(this.baseURL + `/store/${id}/delete`);
  }

  findUser (id: number): Observable<any> {
    return this.http.get(this.baseURL + `/store/${id}`);
  }
}
