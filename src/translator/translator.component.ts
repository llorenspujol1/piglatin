import {Component, OnInit} from '@angular/core';
import {Language, TranslatorService} from './translator.service';
import {TranslatorModel, TranslatorState} from './translator.model';
import {Observable} from 'rxjs/Observable';
import {deepCopy} from "../core/utils";

@Component({
  selector: 'app-translator',
  templateUrl: 'translator.component.html',
  styleUrls: ['translator.component.scss'],
  providers: [TranslatorModel]
})

export class TranslatorComponent implements OnInit {
  translatedText: Observable<string>;
  constructor(public translationService: TranslatorService, public translatorModel: TranslatorModel) {
    this.translatedText = translatorModel.model$.map((state: TranslatorState) => {
      console.log('model new state', state);
      return this.translationService.translate(state.text, state.fromLang, state.toLang);
    });
  }

  ngOnInit() {
  }

  translate(value: string) {
    this.translatorModel.updateProperty('text', value);
  }

  changeLanguage(prop: string, language: Language) {
    this.translatorModel.updateProperty(prop, language);
  }

  swapLanguages() {
    const newState = swapLanguagesReducer(this.translatorModel.getCurrentValue())
    this.translatorModel.update(newState);
  }
}

const swapLanguagesReducer = (state: TranslatorState): TranslatorState => {
  const newState: TranslatorState = {
    fromLang: state.toLang,
    toLang: state.fromLang,
    text: state.text
  };
  return newState;
};
