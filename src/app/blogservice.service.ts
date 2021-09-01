import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {

  url1="http://localhost:3000/blog";
  url2="http://localhost:3000/profile";
  
  constructor(private http: HttpClient) {}

  getBlog(){
    console.log(this.http.get(this.url1));
    return this.http.get(this.url1);
  }
  saveBlog(res:any){
    console.warn("service",res);
    return this.http.post<any>("http://localhost:3000/blog",res);
  }
  saveProfile(res:any){
    console.warn("service",res);
    return this.http.post<any>("http://localhost:3000/profile",res);
  }
  getProfile(){
    console.log(this.http.get(this.url2));
    return this.http.get(this.url2);
  }
  viewProfile(id:number){
    console.log(this.http.get("http://localhost:3000/profile/"+id));
    return this.http.get("http://localhost:3000/profile/"+id);
  }
  viewBlog(id:number){
    console.log(this.http.get("http://localhost:3000/blog/"+id));
    return this.http.get("http://localhost:3000/blog/"+id);
  }
  deleteBlog(id:number){
    return this.http.delete("http://localhost:3000/blog/"+id);
  }
  updateBlog(id: number, data: any){
    return this.http.put<any>("http://localhost:3000/blog/"+id, data);
  }
  deleteProfile(id:number){
    return this.http.delete("http://localhost:3000/profile/"+id);
  }



}
