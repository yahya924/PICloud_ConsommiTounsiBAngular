import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  baseUrl = "http://localhost:8081/SpringMVC/publications";
  headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");

  list = []

  constructor(private http :HttpClient ) { 
    for(let i = 0; i < 5; i++){
      this.list.push(i)
    }
  }


  getAllPublications(){
    return this.http.get(`${this.baseUrl}`, {headers : this.headers})
  }

  getPublicationId(idPub : number){
    return this.http.get(`${this.baseUrl}/get/${idPub}`)
  }
  

}
