import { ApplicationConfig, provideZoneChangeDetection,LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import { LocaleService } from './services/locale.service';

//registrar los idiomas
registerLocaleData(localeEs, 'es');
registerLocaleData(localeFr, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    //realizar el cambio del idioMa

    {
      provide:LOCALE_ID,
      // useValue:'es',
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale,
    },

  ]
};
