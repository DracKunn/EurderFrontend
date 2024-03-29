import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private backendUsers: string;

  constructor(
    private http: HttpClient
  ) {
    this.backendUsers = `${environment.backendUrl}/users`
  }
  getUsers(): Observable<any> {
    return this.http.get(this.backendUsers)
  }
}
