import {NgModule} from '@angular/core';

import {SelectorComponent} from './selector.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [SelectorComponent],
  declarations: [SelectorComponent],
  providers: [],
})
export class SelectorComponentModule {
}
