import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  
  baseUrl = "http://localhost:8081/SpringMVC/comments";
  headers = {'Content-Type' : 'application/json'}

  list = []

  constructor( private http :HttpClient) { 
    for(let i = 0; i < 5; i++){
      this.list.push(i);
    }
  }

  getAllComments(){
    return this.http.get(`${this.baseUrl}/getAll`, {headers : this.headers});
  }

  getCommentsByPublicationId(pubId : number){
    return this.http.get(`${this.baseUrl}/getByPubId/${pubId}`)
  }

  addComment(comment : any){
    return this.http.post(`${this.baseUrl}/comments/add`, comment, {headers : this.headers});
  }
  
}
