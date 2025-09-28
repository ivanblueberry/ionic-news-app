import { Component, Input } from '@angular/core';
import { ActionSheetController, IonCard, IonCardSubtitle, IonCardTitle, IonImg, IonCardContent, IonCol, IonRow, IonButton, IonIcon } from "@ionic/angular/standalone";
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


  constructor( private actionSheetController: ActionSheetController) { }


  openArticle = async () => {
    await Browser.open({ url: `${this.article?.url}` });
  };

  async onOpenMenu() {
    const actionSheetController = await this.actionSheetController.create({
      header: 'Options',
      buttons: [
        {
          text: 'Share',
          icon: 'share-outline',
          handler: () => this.onShareArticle()
        },
        {
          text: 'Favorites',
          icon: 'heart-outline',
          handler: () => this.onToggleFavorite()
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel'
        }
      ]
    });

    await actionSheetController.present();
  }

  onShareArticle() {
    console.log('share article')
  }

  onToggleFavorite() {
    console.log('toggle')
  }
}
