import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel } from '@ionic/angular/standalone';
import { Article } from 'src/app/interfaces';
import { News } from 'src/app/services/news';
import { ArticlesComponent } from "src/app/components/articles/articles.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonLabel,
    IonSegmentButton,
    IonSegment,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent, ArticlesComponent]
})
export class Tab2Page implements OnInit {

  public categories: string[] = ['business',
                                 'entertainment',
                                 'general',
                                 'health',
                                 'science',
                                 'sports',
                                 'technology'];
  /**
   * Holds the currently selected category. By default, it is set
   * to the first element in the categories array.
   */
  public selectedCategory: string = this.categories[0];
  public articles: Article[] = [];

  constructor( private newsService: News ) {}

  ngOnInit(): void {
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
      .subscribe( articles => {
        this.articles = [ ...this.articles, ...articles ]
      })
  }

  segmentChanged( event: any ) {
    this.selectedCategory = event.detail.value;
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
      .subscribe( articles => {
        this.articles = [ ...articles ]
      })
  }

}
