import {BaseModel} from '../core/base.model';
import {Injectable} from '@angular/core';
import {Language} from './translator.service';

const initialState: TranslatorState = {
  fromLang: 'en',
  toLang: 'pg',
  text: 'This is the PigLatin translator'
};

export interface TranslatorState {
  fromLang: Language;
  toLang: Language;
  text: string;
}

@Injectable()
export class TranslatorModel extends BaseModel<TranslatorState> {

  constructor() {
    super(initialState);
  }

}
