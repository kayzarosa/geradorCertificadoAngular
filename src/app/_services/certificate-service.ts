import { Injectable } from '@angular/core';
import { ICertificate } from '../interfaces/certificate';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  certificates: ICertificate[] = [];

  addNewCertificate(certificate: ICertificate) {
    this.certificates.unshift({ ...certificate });
    localStorage.setItem('certificates', JSON.stringify(this.certificates));
  }
}
