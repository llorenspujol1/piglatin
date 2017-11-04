import {NgModule} from '@angular/core';

import {TranslatorComponent} from './translator.component';
import {TranslatorInputComponent} from './translator-input/translator-input.component';
import {TranslatorConfig, TranslatorService} from './translator.service';

export const translatorServiceFactory = () => {
  return new TranslatorService({languages: ['en', 'pg']} as TranslatorConfig);
};

@NgModule({
  imports: [],
  exports: [TranslatorComponent],
  declarations: [TranslatorComponent, TranslatorInputComponent],
  providers: [
    {
      provide: TranslatorService,
      useFactory: translatorServiceFactory
    }
  ],
})
export class TranslatorModule {
}
