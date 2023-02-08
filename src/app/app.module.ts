import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { AsideSectionComponent } from './components/aside-section/aside-section.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsSectionComponent,
    AsideSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
