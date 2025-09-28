import { Component, OnInit, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonCard, IonCardSubtitle, IonCardTitle, IonImg, IonCardContent, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { News } from 'src/app/services/news';
import { Article, NewsResponse } from 'src/app/interfaces';
import { ArticlesComponent } from "src/app/components/articles/articles.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, IonHeader, IonToolbar, IonTitle, IonContent, ArticlesComponent],
})
export class Tab1Page implements OnInit {

  @ViewChild( IonInfiniteScroll, { static: true } ) infiniteScroll?: IonInfiniteScroll;

  public articles: Article[] = [];

  constructor( private newService: News ) { }

  ngOnInit() {
    this.newService.getTopHeadlines()
      .subscribe( articles => this.articles.push( ...articles ));
  }

  loadData() {
    this.newService.getTopHeadlinesByCategory( 'business', true )
      .subscribe( articles => {
        if ( articles.length === this.articles.length ){
          this.infiniteScroll!.disabled = true;
          return;
        }

        this.articles = articles;
        this.infiniteScroll?.complete();
      })
  }
}
