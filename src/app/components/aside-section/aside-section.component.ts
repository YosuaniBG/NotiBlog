import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { dataList } from 'src/app/data/data';
import { News } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-aside-section',
  templateUrl: './aside-section.component.html',
  styleUrls: ['./aside-section.component.scss'],
})
export class AsideSectionComponent {

  data: Date = new Date();
  counter: number = 6;

  @Input() List: News[] = [];
  @Input() newsToUpdate: News = {
    id: this.counter,
    author: "",
    title: "",
    content: "",
    urlToImage: "https://via.placeholder.com/150",
    publishedAt: this.data.toISOString().substring(0, 10)
  };

  @Output() objNews: EventEmitter<News>;

  

  // id: number = 6;
  // author: string = '';
  // title: string = '';
  // content: string =
  //   'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat sed ullam vel corporis officia nostrum tempore pariatur eaque qui culpa, eum at voluptas vitae assumenda laboriosam nihil voluptatum et itaque!';
  // urlToImage: string = 'https://via.placeholder.com/150';
  // publishedAt: string = this.data.toISOString().substring(0, 10);


  constructor() {
    this.objNews = new EventEmitter();
  }

  // uploadImage($event: any): void {
  //   this.urlToImage = $event.target.value;
  // }

  createNews(): void {
    let noticia: News = {
      id: this.newsToUpdate.id,
      author: this.newsToUpdate.author,
      title: this.newsToUpdate.title,
      content: this.newsToUpdate.content,
      urlToImage: this.newsToUpdate.urlToImage,
      publishedAt: this.newsToUpdate.publishedAt
    };
    if(!this.List.find(elem => elem.id === noticia.id)){
      this.objNews.emit(noticia);
      this.counter++;
    }      
  }

  cleanForm(): void{
      // this.newsToUpdate.id = this.counter,
      // this.newsToUpdate.author = '',
      // this.newsToUpdate.title = '',
      // this.newsToUpdate.content = '',
      // this.newsToUpdate.urlToImage = '',
      // this.newsToUpdate.publishedAt = ''
  }

}
