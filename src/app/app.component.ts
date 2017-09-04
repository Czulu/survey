import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SurveyFormData} from './classes/SurveyFormData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formData = window.localStorage.getItem('surveyForm') ? JSON.parse(window.localStorage.getItem('surveyForm')) : new SurveyFormData();
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(1999, 0, 1);
  togglePrint = false;
  surveyForm = new FormGroup ({
    email: new FormControl(this.formData.email, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
    firstName: new FormControl(this.formData.firstName, [
      Validators.required]),
    lastName: new FormControl(this.formData.lastName, [
      Validators.required]),
    city: new FormControl(this.formData.city, [
      Validators.required]),
    phone: new FormControl(this.formData.phone, [
      Validators.required,
      Validators.pattern(/^\+?[\/.()-]*([0-9][\/.()-]*){9,}$/)]),
    postalCode: new FormControl(this.formData.postalCode, [
      Validators.pattern(/[0-9]{2}-[0-9]{3}/)]),
    // minlength validator does not work for number inputs
    nip: new FormControl(this.formData.nip, [
      Validators.pattern(/^\D*(?:\d\D*){10}$/)]),
    pesel: new FormControl(this.formData.pesel, [
      Validators.pattern(/^\D*(?:\d\D*){11}$/)]),
    birthDate: new FormControl(new Date(this.formData.birthDate)),
    rating: new FormControl(this.formData.rating)
  });

  onSubmit() {
    const data = JSON.stringify(this.surveyForm.value);

    window.localStorage.setItem('surveyForm', data);
  }

  sliderChange(event) {
    this.surveyForm.controls['rating'].setValue(event.value);
    this.surveyForm.markAsDirty();
  }
}
