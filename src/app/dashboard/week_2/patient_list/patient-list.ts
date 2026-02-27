import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService, Patient } from '../patient-service';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-list.html',
  styleUrls: ['./patient-list.css'],
})
export class PatientListComponent {
  private patientService = inject(PatientService);
  patients = this.patientService.getPatients();

  selectPatient(patient: Patient) {
    this.patientService.selectPatient(patient);
  }
}
 