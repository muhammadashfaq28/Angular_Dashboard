import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-patient-registration',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './patient-registration.html',
  styleUrl: './patient-registration.css',
})
export class PatientRegistration {

  signUp = new FormGroup({

    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]+$/)
    ]),
    gender: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    number: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl(''),
    blood_group: new FormControl('', [Validators.required]),
    allergies: new FormControl(''),
    existing_diseases: new FormControl(''),
    ensurance_provider: new FormControl(''),
    insurance_number: new FormControl('', [Validators.minLength(4)]),
  })

  ageValidator(control: AbstractControl): ValidationErrors | null {
    const age = control.value;
    if (age < 18) return { tooYoung: true };
    return null;
  }

  allowOnlyLetters(event: KeyboardEvent) {
    const charCode = event.key;

    if (!/^[a-zA-Z\s]$/.test(charCode)) {
      event.preventDefault();
    }
  }
  blockPaste(event: ClipboardEvent) {
    event.preventDefault();
  }

  patients: any[] = [];

  constructor() {
    const data = localStorage.getItem('patients')
    if (data) {
      this.patients = JSON.parse(data)
    }
  }

  handleSubmit() {

  if (this.signUp.invalid) {
    this.signUp.markAllAsTouched();
    return;
  }

  if (this.editingIndex !== null) {

    this.patients[this.editingIndex] = this.signUp.value;

    this.editingIndex = null;

  } else {

    this.patients.push(this.signUp.value);

  }

  localStorage.setItem('patients', JSON.stringify(this.patients));

  this.signUp.reset();
}

  deletePatient(index: number) {
    this.patients.splice(index, 1);
    localStorage.setItem('patients', JSON.stringify(this.patients));
  }

  editingIndex: number | null = null;

  editPatient(index: number) {
  const patient = this.patients[index];

  this.signUp.patchValue(patient);

  this.editingIndex = index;
}

}  