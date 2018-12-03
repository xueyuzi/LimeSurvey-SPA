import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { APIRequest } from "./model/api-request";
import { APIResponse } from "./model/api-response";
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private post(method: string, params: Array<string>): Promise<any> {
    var body: APIRequest = new APIRequest;
    body.id = 1;
    body.method = method;
    body.params = params;
    return this.http.post("/index.php/admin/remotecontrol", body)
      .toPromise()
      .then((response: APIResponse) => {
        return Promise.resolve(response.result)
      });
  }

  get_session_key(username, password): Promise<any> {

    return this.post("get_session_key", [username, password]);
  }


  list_surveys(): Promise<any> {
    const sSessionKey = localStorage.getItem("X-TOKEN");
    const username = localStorage.getItem("username");
    return this.post("list_surveys", [sSessionKey, username]);
  }
}
