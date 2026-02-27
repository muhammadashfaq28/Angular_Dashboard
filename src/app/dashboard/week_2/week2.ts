import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientListComponent } from './patient_list/patient-list';
import { PatientDetailComponent } from './patient_detail/patient-detail';

@Component({
  selector: 'app-week2',
  standalone: true,
  imports: [CommonModule, PatientListComponent, PatientDetailComponent],
  templateUrl: './week2.html'
})
export class Week2 {}
