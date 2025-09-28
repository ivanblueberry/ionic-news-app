import { Component, OnInit, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { Article } from 'src/app/interfaces';
import { News } from 'src/app/services/news';
import { ArticlesComponent } from "src/app/components/articles/articles.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, IonLabel,
    IonSegmentButton,
    IonSegment,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent, ArticlesComponent]
})
export class Tab2Page implements OnInit {

  @ViewChild( IonInfiniteScroll, { static: true } ) infiniteScroll?: IonInfiniteScroll;

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
        this.articles = [ ...articles ]
      })
  }

  segmentChanged( event: Event ) {
    this.selectedCategory = (event as CustomEvent).detail.value;
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
      .subscribe( articles => {
        this.articles = [ ...articles ]
      })
  }

  loadData() {
    this.newsService.getTopHeadlinesByCategory( this.selectedCategory, true )
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
