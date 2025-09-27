import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonCard, IonCardSubtitle, IonCardTitle, IonImg, IonCardContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { News } from 'src/app/services/news';
import { Article, NewsResponse } from 'src/app/interfaces';
import { ArticlesComponent } from "src/app/components/articles/articles.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonCardContent, IonImg, IonCardTitle, IonCardSubtitle, IonCard, IonRow, IonCol, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, ArticlesComponent],
})
export class Tab1Page implements OnInit {

  public articles: Article[] = [];

  constructor( private newService: News ) { }

  ngOnInit() {
    this.newService.getTopHeadlines()
      .subscribe( articles => this.articles.push( ...articles ));
  }
}
