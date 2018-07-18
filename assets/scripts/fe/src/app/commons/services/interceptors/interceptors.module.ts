import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokenService } from './token.service';
import { XsrfService } from './xsrf.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TokenService, XsrfService]
})
export class InterceptorsModule { }
