import { Component } from '@angular/core';
import { dataList } from 'src/app/data/data';
import { News } from 'src/app/interfaces/news';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent {
  
  list: News[] = [];

  constructor(){
    this.list = dataList;
    console.log(this.list);
   }
  
   removeNews(): void{}
  
   upToRelevant(): void{}
   
  
}
