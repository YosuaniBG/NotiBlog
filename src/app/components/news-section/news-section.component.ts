import { Component } from '@angular/core';
import { dataList } from 'src/app/data/data';
import { News } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent {
  
  newsList: News[] = [];
  newsToUpdate: News = {
    id: 0,
    author: "Desconocido",
    title: "Título",
    content: "Sin contenido aún...",
    urlToImage: "https://via.placeholder.com/150",
    publishedAt: "Hoy"
  };

  constructor(){
    this.newsList = dataList;
   }
  
   addNews($event: News): void{
    this.newsList.push($event);    
   }

   removeNews($event: any): void{
    console.log($event.target.id);
    if(this.newsList.length > 1)
      this.newsList.splice($event.target.id, 1);
   }

   selectNews($event: any): void{
    this.newsToUpdate = this.newsList[$event.target.id];
   }
  
   upToRelevant($event: any): void{
    let elem = this.newsList.splice($event.target.id, 1);
    console.log(elem);
    this.newsList.unshift(elem[0]);

   }
   
  
}
