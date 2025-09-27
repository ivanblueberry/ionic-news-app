import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel } from '@ionic/angular/standalone';

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
            IonContent]
})
export class Tab2Page {

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

  constructor() {}

  segmentChanged( category: any ) {
    console.log(category);
  }

}
