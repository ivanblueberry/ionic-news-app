import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonIcon} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';

import { StorageService } from '../../services/storage';
import { ArticlesComponent } from 'src/app/components/articles/articles.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, ArticlesComponent,IonGrid, IonRow, IonCol, IonIcon],
})
export class Tab3Page {
  constructor( public storageService: StorageService ) {}
}
