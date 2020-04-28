import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'] 
})
export class FeedComponent implements OnInit {

  listaPostagens: Postagem[]
  postagem: Postagem = new Postagem();

  constructor(private postagemService: PostagemService) { }

  ngOnInit(): void {
    this.findAllPostagens();      
  }

  findAllPostagens(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp;
    })
  }

  publicar(){
    console.log("o click esta fucionando")
    // this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
    //   this.postagem = resp
    //   location.assign('/feed')
    // })
  }

}
