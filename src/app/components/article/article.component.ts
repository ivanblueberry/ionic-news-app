import { Component, Input } from '@angular/core';
import { IonCard, IonCardSubtitle, IonCardTitle, IonImg, IonCardContent, IonCol, IonRow, IonButton, IonIcon } from "@ionic/angular/standalone";
import { Article } from 'src/app/interfaces';

import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  imports: [IonIcon, IonButton, IonRow, IonCol, IonCard, IonCardSubtitle, IonCardTitle, IonImg, IonCardContent],
})
export class ArticleComponent {

  @Input() article?: Article;
  @Input() index?: number;


  constructor() { }

  onClick() {
  }

  openArticle = async () => {
    await Browser.open({ url: `${this.article?.url}` });
  };

}
