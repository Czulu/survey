import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MdButtonModule, MdSliderModule, MdInputModule, MdCardModule, MdDatepickerModule, MdNativeDateModule} from '@angular/material';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MdInputModule,
    MdCardModule,
    ReactiveFormsModule,
    FormsModule,
    MdButtonModule,
    BrowserAnimationsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
