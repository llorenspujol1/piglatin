import {Injectable} from '@angular/core';
import {translateEnToPg} from './translators/piglatin-english.translator';

export type Language = 'en' | 'pg';

export interface TranslatorConfig {
  languages: Language[];
}

@Injectable()
export class TranslatorService {
  private availableLanguages: Language[];

  constructor(private config: TranslatorConfig) {
    this.availableLanguages = [...this.config.languages];
  }

  translate(value: string, originLang: Language, destinationLang: Language): string {
    if (!isAvailableLanguage(this.availableLanguages, originLang)) {
      console.error(`Language ${originLang} is not an available language`);
      return '';
    }
    if (!isAvailableLanguage(this.availableLanguages, destinationLang)) {
      console.error(`Language ${destinationLang} is not an available language`);
      return '';
    }

    return translateEnToPg(value);
  }
}

const isAvailableLanguage = (languages: Language[], language): boolean => !!languages.find((item) => item === language);


