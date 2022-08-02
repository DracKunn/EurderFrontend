import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Item} from "../../model/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private backendItems: string;

  constructor(
    private http: HttpClient
  ) {
    this.backendItems = `${environment.backendUrl}/items`
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.backendItems).pipe(
      map((item)=>item.sort(
        (item1,item2)=>{return item1.name.localeCompare(item2.name)}
      ))
    )
  }
}

