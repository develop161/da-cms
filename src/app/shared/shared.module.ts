import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConvertToSpacesPipe
  ],
  exports: [
    ConvertToSpacesPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
