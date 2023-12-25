import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'
// https://api.github.com/users/jf-ashishyadav
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private _http:HttpClient) {


   }
   getUserDetails(userName:string){
    return this._http.get(`https://api.github.com/users/${userName}`)

  }

  getRepo(repoUrl:string){
  return this._http.get(repoUrl)
  }
}
