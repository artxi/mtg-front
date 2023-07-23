import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetComponent } from './set.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SetComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SetComponent
  ]
})
export class SetModule { }
