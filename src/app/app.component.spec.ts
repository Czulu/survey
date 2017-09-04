import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MdButtonModule, MdSliderModule, MdInputModule, MdCardModule, MdDatepickerModule, MdNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import {SurveyFormData} from './classes/SurveyFormData';

describe('AppComponent', () => {
  let fixture;
  let app;
  beforeEach(async(() => {
    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return JSON.stringify(new SurveyFormData());
    });
    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      return;
    });
    TestBed.configureTestingModule({
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
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
    });
  }));

  it('should create the app and get data from local storage', () => {
    expect(app).toBeTruthy();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('should have set birth date ranges', () => {
    expect(app.minDate instanceof Date).toBeTruthy();
    expect(app.maxDate instanceof Date).toBeTruthy();
  });

  it('should write to local storage on submit', () => {
    app.onSubmit();
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('should update rating on slider change', () => {
    app.sliderChange({value: 2});
    expect(app.surveyForm.controls['rating'].value).toEqual(2);
  });
});
