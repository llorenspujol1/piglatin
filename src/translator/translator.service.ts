import {Injectable} from '@angular/core';
import {
  translateWordPgToEn, translateTextWords,
  translateWordEnToPg
} from './translators/piglatin-english.translator';

export type Language = 'en' | 'pg';

export interface TranslatorConfig {
  languages: Language[];
}

@Injectable()
export class TranslatorService {
  private _availableLanguages: Language[];
  get availableLanguages() { return this._availableLanguages; }

  constructor(private config: TranslatorConfig) {
    this._availableLanguages = [...this.config.languages];
  }

  translate(value: string, originLang: Language, destinationLang: Language): string {
    // check possible language incompatibilities
    if (!isAvailableLanguage(this._availableLanguages, originLang)) {
      console.error(`Language ${originLang} is not an available language`);
      return '';
    }
    if (!isAvailableLanguage(this._availableLanguages, destinationLang)) {
      console.error(`Language ${destinationLang} is not an available language`);
      return '';
    }
    // calculate result
    if (originLang === destinationLang) {
      return value;
    } else if (originLang === 'en') {
      return translateTextWords(value, translateWordEnToPg);
    } else if (originLang === 'pg') {
      return translateTextWords(value, translateWordPgToEn);
    }
  }
}

const isAvailableLanguage = (languages: Language[], language): boolean => !!languages.find((item) => item === language);


