import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardSubtitle, IonCardTitle, IonImg, IonCardContent } from "@ionic/angular/standalone";
import { Article } from 'src/app/interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  imports: [IonCard, IonCardSubtitle, IonCardTitle, IonImg, IonCardContent],
})
export class ArticleComponent  implements OnInit {

  @Input() article?: Article;
  @Input() index?: number;


  constructor() { }

  ngOnInit() {}

}
