import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataStoreServiceService {

  constructor(private http:HttpClient, private route:Router) {}


  private baseUrl = environment.apiUrl;


//Register User
  createUser(user:any):Observable<any>{
    return this.http.post('http://localhost:8000/register', user)
  }


//Login User
  userLogin(user:any):Observable<any>{
    return this.http.post('http://localhost:8000/login', user)
  }


  getSingleUser(user:any):Observable<any>{
    return this.http.post('http://localhost:8000/get_user_by_email', user);
  }


 







loginVar:any=null
globleId:any=null

  logout(){ 
    if(confirm("You Wanna Log Out")){
      this.loginVar=null
      this.globleId=null
      // this.route.navigate(['/login'])
      this.route.navigate(['/login'], { replaceUrl: true });
      window.history.pushState(null, '', '/login'); 
    }
  }



   
}
