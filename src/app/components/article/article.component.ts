import { Component, Input } from '@angular/core';
import { ActionSheetController, IonCard, IonCardSubtitle, IonCardTitle, IonImg, IonCardContent, IonCol, IonRow, IonButton, IonIcon } from "@ionic/angular/standalone";
import { Article } from 'src/app/interfaces';

import { Browser } from '@capacitor/browser';
import { Share } from '@capacitor/share';

import { StorageService } from 'src/app/services/storage';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  imports: [IonIcon, IonButton, IonRow, IonCol, IonCard, IonCardSubtitle, IonCardTitle, IonImg, IonCardContent],
})
export class ArticleComponent {

  @Input() article?: Article;
  @Input() index?: number;


  constructor( private actionSheetController: ActionSheetController,
               private storageService: StorageService
              ) { }


  openArticle = async () => {
    await Browser.open({ url: `${this.article?.url}` });
  };

  async onOpenMenu() {

    const articleInFavorites = this.storageService.getLocalArticles.find(
      art => art.title === this.article?.title
    );

    const actionSheetController = await this.actionSheetController.create({
      header: 'Options',
      buttons: [
        {
          text: 'Share',
          icon: 'share-outline',
          handler: () => this.onShareArticle()
        },
        {
          text: articleInFavorites ? 'Remove Favorite' : 'Favorite',
          icon: articleInFavorites ? 'heart' : 'heart-outline',
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

  async onShareArticle() {
    if (!this.article) return;

    const { title, url } = this.article;

    await Share.share({
      title: title || 'Article',
      url: url || '',
      dialogTitle: 'Share this article'
    });
  }

  onToggleFavorite() {
    if(this.article) {
      this.storageService.saveRemoveArticle(this.article);
      console.log('Toggled favorite status');
    }
  }
}
