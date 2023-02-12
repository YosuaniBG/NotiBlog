import { Component, Input, Output, EventEmitter } from '@angular/core';
import { News } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-aside-section',
  templateUrl: './aside-section.component.html',
  styleUrls: ['./aside-section.component.scss'],
})
export class AsideSectionComponent {

  date: Date = new Date();
  counter: number = 6;  //Se inicializa con un valor mayor a la longitud de la lista que tendra los datos iniciales

  @Input() List: News[] = [];
  @Input() modeUpdate: boolean = false;
  @Input() newsToUpdate: News = {
    id: this.counter,
    author: "",
    title: "",
    content: "",
    urlToImage: "",
    publishedAt: ""
  };
  

  @Output() objNews: EventEmitter<News>;

  constructor() {
    this.objNews = new EventEmitter();
 
  }

  loadImagePreview(): string{
    return (this.newsToUpdate.urlToImage !== '') ? this.newsToUpdate.urlToImage : "https://via.placeholder.com/150";
  }

  createNews(): void {
    if(this.newsToUpdate.author !== '' && this.newsToUpdate.title !== '' && this.newsToUpdate.urlToImage !== '' && this.newsToUpdate.content !== ''){
      let noticia: News = {
        id: this.newsToUpdate.id,
        author: this.newsToUpdate.author,
        title: this.newsToUpdate.title,
        content: this.newsToUpdate.content,
        urlToImage: this.newsToUpdate.urlToImage,
        publishedAt: this.newsToUpdate.publishedAt
      };
      this.objNews.emit(noticia);
      if(!this.modeUpdate) this.counter++; 
      this.cleanForm();      
    }else
      alert('No puede dejar campos vacios');
    
  }


  cleanForm(): void{
      this.newsToUpdate.id = this.counter;
      this.newsToUpdate.author = '',
      this.newsToUpdate.title = '',
      this.newsToUpdate.content = '',
      this.newsToUpdate.urlToImage = '',
      this.newsToUpdate.publishedAt = this.date.toISOString().substring(0, 10)
  }

}
