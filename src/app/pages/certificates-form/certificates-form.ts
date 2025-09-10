import { Component, ViewChild } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ICertificate } from '../../interfaces/certificate';
import { CertificateService } from '../../_services/certificate-service';
import { v4 as uuid4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificates-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificates-form.html',
  styleUrl: './certificates-form.css',
})
export class CertificatesForm {
  constructor(private certificateService: CertificateService, private router: Router) {}
  @ViewChild('form') form!: NgForm;

  activity: string = '';

  certificate: ICertificate = {
    id: '',
    name: '',
    listActivities: [],
    dateOfIssue: '',
  };

  invalidField(control: NgModel) {
    return control.invalid && control.touched && control.errors?.['required'];
  }

  formValid() {
    return this.certificate.listActivities.length > 0 && this.certificate.name.length > 0;
  }

  addActivity() {
    if (this.activity.length <= 0) {
      return;
    }
    this.certificate.listActivities.push(this.activity);
    this.activity = '';
  }

  deleteActivity(index: number) {
    this.certificate.listActivities.splice(index, 1);
  }

  currentDate() {
    const dateActual = new Date();
    const day = String(dateActual.getDate()).padStart(2, '0');
    const month = String(dateActual.getMonth() + 1).padStart(2, '0');
    const year = String(dateActual.getFullYear());

    return `${day}/${month}/${year}`;
  }

  submit() {
    if (!this.formValid()) {
      return;
    }

    this.certificate.id = uuid4();
    this.certificate.dateOfIssue = this.currentDate();

    this.certificateService.addNewCertificate(this.certificate);

    // this.certificate = this.stateBeginCertificate();
    // this.form.resetForm();

    this.router.navigate(['certificado', this.certificate.id]);
  }

  // stateBeginCertificate(): ICertificate {
  //   return {
  //     id: '',
  //     name: '',
  //     listActivities: [],
  //     dateOfIssue: '',
  //   };
  // }
}
