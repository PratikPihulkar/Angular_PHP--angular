import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreServiceService {

  constructor(private http:HttpClient, private route:Router) {}



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

//USER
    getUserList():Observable<any>{
     return this.http.get('http://localhost:3000/user');
    }

    getSingleUser(id:any):Observable<any>{
      return this.http.get('http://localhost:3000/user/'+id);
    }

    createUser(user:any):Observable<any>{
      return this.http.post<any>('http://localhost:3000/user', user)
    }

    updateUser(id:any, user:any):Observable<any>{
      return this.http.put('http://localhost:3000/user/'+id , user);
    }
  //PRODUCT
    getProductList():Observable<any> {
      return this.http.get('http://localhost:3000/product');
    }
    
    getSingleProduct(id:any):Observable<any> {
      return this.http.get('http://localhost:3000/product/'+id);
    }
    
    updateProduct(id:any, user:any):Observable<any> {
      return this.http.put('http://localhost:3000/product/'+id , user);
    }

    addProduct(product:any):Observable<any>{
      return this.http.post<any>('http://localhost:3000/product', product)
    }

    deletSingleProduct(id:any):Observable<any>{
      return this.http.delete('http://localhost:3000/product/'+id);
    }

}
