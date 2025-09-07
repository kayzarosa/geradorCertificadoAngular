import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ItemCertificado } from '../../_components/item-certificado/item-certificado';

@Component({
  selector: 'app-certificates',
  imports: [SecondaryButton, ItemCertificado],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css',
})
export class Certificates {}
