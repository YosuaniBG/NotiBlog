import { Component } from '@angular/core';
import { dataList } from 'src/app/data/data';
import { News } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss'],
})
export class NewsSectionComponent {
  date: Date = new Date();

  newsList: News[] = [];
  modeUpdate: boolean = false;
  newsToUpdate: News = {
    id: 0,
    author: '',
    title: '',
    content: '',
    urlToImage: '',
    publishedAt: this.date.toISOString().substring(0, 10),
  };

  constructor() {
    this.newsList = dataList;
  }


  addOrUpdateNews($event: News): void {
    if (!this.newsList.find((elem) => elem.id === $event.id)) {
      this.newsList.push($event);
    } else {
      const index: number = this.newsList.findIndex(
        (elem) => elem.id === $event.id
      );
      this.newsList.splice(index, 1, $event);
    }
    this.modeUpdate = false;
  }

  removeNews($event: any): void {
    (this.newsList.length > 1) ? this.newsList.splice($event.target.id, 1) : alert("Error: No puedes eliminar la última noticia que queda");
  }

  selectNews($event: any): void {
    this.newsToUpdate = this.newsList[$event.target.id];
    this.modeUpdate = true;
  }

  upToRelevant($event: any): void {
    let elem = this.newsList.splice($event.target.id, 1);
    this.newsList.unshift(elem[0]);
  }
}
