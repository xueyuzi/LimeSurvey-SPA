import { Injectable } from '@angular/core';
import { APIResponse } from "./model/api-response";
import { ApiService } from "./api.service";
import { Observable, Subscription ,Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }
  login(username: string, password: string): Promise<any> {
    return this.api.get_session_key(username, password)
      .then((res: APIResponse) => {
        console.log(res)
        if (res.result.constructor === String)
          localStorage.setItem("X-TOKEN", <string>res.result)
        else
          return res.result["status"]
      });
  }
  logout(){
    localStorage.clear();
  }
}
