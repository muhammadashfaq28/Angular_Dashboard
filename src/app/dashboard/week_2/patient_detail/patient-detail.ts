import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from '../patient-service';

@Component({
  selector: 'app-patient-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-detail.html',
  styleUrls: ['./patient-detail.css'],
})
export class PatientDetailComponent {

  // keepOrder = () => 0;

  private patientService = inject(PatientService);
  patient = this.patientService.getSelectedPatient();
}
