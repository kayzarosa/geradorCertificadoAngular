import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';

@Component({
  selector: 'app-certificates-form',
  imports: [SecondaryButton, PrimaryButton],
  templateUrl: './certificates-form.html',
  styleUrl: './certificates-form.css',
})
export class CertificatesForm {}
