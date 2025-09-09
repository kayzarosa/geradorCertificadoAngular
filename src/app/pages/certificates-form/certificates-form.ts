import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificates-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificates-form.html',
  styleUrl: './certificates-form.css',
})
export class CertificatesForm {
  name: string = '';
  activity: string = '';
  listActivity: string[] = ['Arroz', 'Fijão'];

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched && control.errors?.['required'];
  }
}
