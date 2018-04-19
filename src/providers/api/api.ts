import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiProvider {
  constructor(private _http: HttpClient) {}

  getUser(): Promise<any> {
    return this._http
      .get(`https://randomuser.me/api?nat=BR`)
      .toPromise()
      .then((data: any) => data.results);
  }
  getDoggo(): Promise<any> {
    return this._http
      .get(`https://dog.ceo/api/breeds/image/random`)
      .toPromise();
  }
}
