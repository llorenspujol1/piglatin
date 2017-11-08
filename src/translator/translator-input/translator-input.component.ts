import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Subscription} from "rxjs/Subscription";

// Unique id for translator inputs
let nextUniqueId = 0;

@Component({
  moduleId: module.id,
  selector: 'app-translator-input',
  templateUrl: 'translator-input.component.html',
  styleUrls: ['translator-input.component.scss']
})

export class TranslatorInputComponent implements OnInit, OnDestroy {
  private _sub: Subscription;
  private _uid = `translator-input-${nextUniqueId++}`;
  get uid() { return this._uid; }
  @ViewChild('translatorInput') translatorInput: ElementRef;
  /** Label of the textarea */
  @Input() label: string;
  /** Text input of the text area. Caution with this Input, because inputs have state so always have to be coehrent with this input */
  @Input() text: string;
  /** Readonly property */
  @Input() readonly: boolean;
  /** Output event emitter for input changes */
  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    this._sub = Observable.fromEvent(this.translatorInput.nativeElement, 'input')
      .debounceTime(600)
      .map((keyboardEvent: any) => keyboardEvent.target.value)
      .subscribe(value => {
        this.inputChange.next(value);
      });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
