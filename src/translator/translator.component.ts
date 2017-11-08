import {Component, OnInit} from '@angular/core';
import {Language, TranslatorService} from './translator.service';
import {TranslatorModel, TranslatorState} from './translator.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-translator',
  templateUrl: 'translator.component.html',
  styleUrls: ['translator.component.scss'],
  providers: [TranslatorModel]
})

export class TranslatorComponent {
  /** Observable<string> containing the translated text */
  translatedText$: Observable<string>;

  /** constructor function */
  constructor(public translationService: TranslatorService, public translatorModel: TranslatorModel) {
    this.translatedText$ = translatorModel.model$.map((state: TranslatorState) => {
      return this.translationService.translate(state.text, state.fromLang, state.toLang);
    });
  }

  /**
   * Updates the model with a new value of the input text
   * @param value
   */
  updateInputText(value: string) {
    this.translatorModel.updateProperty('text', value);
  }

  /**
   * Changes the language on the model
   * @param prop
   * @param language
   */
  changeLanguage(prop: string, language: Language) {
    this.translatorModel.updateProperty(prop, language);
  }

  /**
   * Fired when swap language button is clicked. Uses the reducer function in order to calculate the new state
   */
  swapLanguages() {
    const newState = swapLanguagesReducer(this.translatorModel.getCurrentValue())
    this.translatorModel.update(newState);
  }
}

/**
 * Reducer function that switches the languages and returns the new computed state
 * @param state
 * @returns {TranslatorState}
 */
const swapLanguagesReducer = (state: TranslatorState): TranslatorState => {
  const newState: TranslatorState = {
    fromLang: state.toLang,
    toLang: state.fromLang,
    text: state.text
  };
  return newState;
};
