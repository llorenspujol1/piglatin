import {Component, OnInit} from '@angular/core';
import {TranslatorService} from "./translator.service";

@Component({
  selector: 'app-translator',
  templateUrl: 'translator.component.html',
  styleUrls: ['translator.component.scss']
})

export class TranslatorComponent implements OnInit {
  constructor(private translationService: TranslatorService) {
  }

  ngOnInit() {
  }

  translate(value: string) {
    console.log(value);
    const translation = this.translationService.translate(value, 'en', 'pg');
    console.log(translation);
  }
}
