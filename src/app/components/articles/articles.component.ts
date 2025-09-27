import { Component, Input, OnInit } from '@angular/core';
import { IonGrid, IonCard, IonCol, IonCardSubtitle, IonCardTitle, IonImg, IonCardContent, IonRow } from "@ionic/angular/standalone";
import { Article } from 'src/app/interfaces';
import { ArticleComponent } from "../article/article.component";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  imports: [IonGrid, IonCol, IonRow, ArticleComponent],
})
export class ArticlesComponent {

  @Input() articles: Article[] = [];

  constructor() { }

}
