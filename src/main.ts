import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

// Importaciones necesarias para el Storage
import { IonicStorageModule } from '@ionic/storage-angular';
import { importProvidersFrom } from '@angular/core';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { provideHttpClient } from '@angular/common/http';

import { addIcons } from 'ionicons';
import {
  closeOutline, ellipsisVertical, globeOutline, heart, heartOutline,
  personOutline, shareOutline, starOutline
} from 'ionicons/icons';

addIcons({
  'person-outline': personOutline,
  'globe-outline' : globeOutline,
  'star-outline'  : starOutline,
  'ellipsis-vertical': ellipsisVertical,
  'share-outline' : shareOutline,
  'heart-outline' : heartOutline,
  'heart'         : heart,
  'close-outline' : closeOutline
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
    importProvidersFrom(IonicStorageModule.forRoot())
  ],
});
