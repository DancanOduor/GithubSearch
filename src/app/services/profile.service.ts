import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid = ' 2af51d1346d141e8ca2a';
  private clientsecret ='058ad7c576a627f80a10a5375d43b490edc1c1d5';

  constructor(private http:HttpClient) {
console.log("service is now ready!");
this.username = 'DancanOduor';
   }

   getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
  }
  updateProfile(username:string){
    this.username = username;
  }
}