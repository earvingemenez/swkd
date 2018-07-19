import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrevdefaultDirective } from './prevdefault/prevdefault.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PrevdefaultDirective],
  declarations: [PrevdefaultDirective]
})
export class DirectivesModule { }
