import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }
  
  //CRUD - create, Ready, Update e Delete

  getAllPostagem(){
    return this.http.get('http://31.220.57.14:8080/postagens');
  }

  postPostagem(postagem: Postagem){
    return this.http.post('http://31.220.57.14:8080/postagens', postagem); 
  }
  

}
  