import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(1999, 0, 1);
  surveyForm = new FormGroup ({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
    firstName: new FormControl('', [
      Validators.required]),
    lastName: new FormControl('', [
      Validators.required]),
    city: new FormControl('', [
      Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\+?[\/.()-]*([0-9][\/.()-]*){9,}$/)]),
    postalCode: new FormControl('', [
      Validators.pattern(/[0-9]{2}-[0-9]{3}/)]),
    // minlength validator does not work for number inputs
    nip: new FormControl('', [
      Validators.pattern(/^\D*(?:\d\D*){10}$/)]),
    pesel: new FormControl('', [
      Validators.pattern(/^\D*(?:\d\D*){11}$/)]),
    birthDate: new FormControl()
  });
}
