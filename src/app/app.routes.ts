import { Routes } from '@angular/router';
import { Certificates } from './pages/certificates/certificates';
import { CertificatesForm } from './pages/certificates-form/certificates-form';
import { Certificate } from './pages/certificate/certificate';

export const routes: Routes = [
  {
    path: '',
    component: Certificates,
  },
  {
    path: 'certificado/novo',
    component: CertificatesForm,
  },
  {
    path: 'certificado/:id',
    component: Certificate,
  },
];
