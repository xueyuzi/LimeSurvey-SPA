import { Injectable } from '@angular/core';
import { APIResponse } from "./model/api-response";
import { ApiService } from "./api.service";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }
  login(username: string, password: string): Promise<any> {
    return this.api.get_session_key(username, password)
      .then((result: string | any) => {
        console.log(result)
        if (result.constructor === String) {
          localStorage.setItem("X-TOKEN", <string>result)
          localStorage.setItem("username", username)
        }
        else {
          return Promise.reject(result.status);
        }

      });
  }
  logout(): void {
    localStorage.clear();
  }
  getName(): string {
    return localStorage.getItem("username");
  }
}
