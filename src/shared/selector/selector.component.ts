import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

let nextUniqueId = 0;

@Component({
  selector: 'app-selector',
  templateUrl: 'selector.component.html'
})

export class SelectorComponent implements OnInit {
  private _uid = `select-component-${nextUniqueId++}`;
  get uid() { return this._uid; }
  @Input() label: string;
  @Input() listItems: string[];
  @Input() selectedItem: string;
  /** notifies when a new item is clicked */
  @Output() itemClicked: EventEmitter<string> = new EventEmitter();
  // constructor
  constructor() {
  }

  ngOnInit() {
  }

  onChange(item) {
    this.itemClicked.next(item);
  }
}
