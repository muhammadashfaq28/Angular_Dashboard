import { Injectable, signal } from '@angular/core';

export interface Patient {
  id: number;
  name: string;
  age: number;
  address: string;
  disease: string;
  CheckAt: Date;
  Next_Appointment: string;
}

@Injectable({ providedIn: 'root' })
export class PatientService {

  private patients = signal<Patient[]>([
    {
      id: 1,
      name: 'Virat Kohli',
      age: 30,
      address: 'Lahore',
      disease: 'Hepatitis A to Z All',
      CheckAt: new Date('2026-01-20'),
      Next_Appointment: 'Two Month Later'
    },
    {
      id: 2,
      name: 'Charlie',
      age: 25,
      address: 'Karachi',
      disease: 'Kidney Failure',
      CheckAt: new Date('2026-01-20'),
      Next_Appointment: 'Half Later'
    },
    {
      id: 3,
      name: 'Petter',
      age: 28,
      address: 'DGK',
      disease: 'Heart Attack',
      CheckAt: new Date('2026-01-20'),
      Next_Appointment: 'One Month Later'
    },
    {
      id: 4,
      name: 'Donald Trump',
      age: 22,
      address: 'FSD',
      disease: 'Headache',
      CheckAt: new Date('2026-01-20'),
      Next_Appointment: 'Two Month Later'
    },
    {
      id: 5,
      name: 'Ali',
      age: 35,
      address: 'BWP',
      disease: 'Fever',
      CheckAt: new Date('2026-01-20'),
      Next_Appointment: 'Three Month Later'
    }
  ]);

  private selectedPatient = signal<Patient | null>(null);   //private


  getPatients() {
    return this.patients;
  }


  getSelectedPatient() {
    return this.selectedPatient;
  }


  selectPatient(patient: Patient) {
    this.selectedPatient.set(patient);
  }
}
