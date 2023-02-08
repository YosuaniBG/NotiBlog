import { Component } from '@angular/core';
import { dataList } from 'src/app/data/data';
import { News } from 'src/app/interfaces/news';


@Component({
  selector: 'app-aside-section',
  templateUrl: './aside-section.component.html',
  styleUrls: ['./aside-section.component.scss']
})
export class AsideSectionComponent {

  list: News[] = dataList;

  noticia: News = {
    id: 0,
    author: "",
    title: "",
    content: "",
    urlToImage: "https://via.placeholder.com/150",
    publishedAt: ""
  }

  constructor(){

   }

  uploadImage($event: any): void{
    this.noticia.urlToImage =$event.target.value;
    console.log(this.noticia.urlToImage);
    
  }

 addNews(): void{
  this.noticia.id = this.list.length + 1;
  this.list.push(this.noticia);
  console.log(this.noticia);
  
 }

 updateNews(): void{}
 

}
