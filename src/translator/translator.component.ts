import {Component, OnInit} from '@angular/core';
import {TranslatorService} from './translator.service';
import {TranslatorModel, TranslatorState} from './translator.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-translator',
  templateUrl: 'translator.component.html',
  styleUrls: ['translator.component.scss'],
  providers: [TranslatorModel]
})

export class TranslatorComponent implements OnInit {
  translatedText: Observable<string>;
  constructor(private translationService: TranslatorService, public translatorModel: TranslatorModel) {
    this.translatedText = translatorModel.model$.map((state: TranslatorState) => {
      return this.translationService.translate(state.text, state.fromLang, state.toLang);
    });
  }

  ngOnInit() {
  }

  translate(value: string) {
    this.translatorModel.updateProperty('text', value);
  }
}
