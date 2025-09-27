import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// To make API requests
import { provideHttpClient } from '@angular/common/http';

// Iconography Setup
import { addIcons } from 'ionicons';
import { globeOutline,
         personOutline,
         starOutline,
       } from 'ionicons/icons'

addIcons({
  'person-outline': personOutline,
  'globe-outline' : globeOutline,
  'star-outline'  : starOutline
})

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
  ],
});
