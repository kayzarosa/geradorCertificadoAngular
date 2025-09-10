import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ItemCertificado } from '../../_components/item-certificado/item-certificado';
import { RouterLink } from '@angular/router';
import { CertificateService } from '../../_services/certificate-service';
import { ICertificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificates',
  imports: [SecondaryButton, ItemCertificado, RouterLink],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css',
})
export class Certificates implements OnInit {
  certificates: ICertificate[] = [];

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    this.certificates = this.certificateService.certificates;
  }
}
