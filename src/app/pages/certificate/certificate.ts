import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificateService } from '../../_services/certificate-service';
import { ICertificate } from '../../interfaces/certificate';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css',
})
export class Certificate implements OnInit {
  id: string | null = null;
  certificate: ICertificate | undefined;

  @ViewChild('certificateContainer') certificateElement!: ElementRef;

  constructor(private certificateService: CertificateService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.certificate = this.certificateService.certificates.find((item) => item.id == this.id);
    });
  }

  downloadCertificate() {
    if (this.certificate == undefined) {
      return;
    }

    html2canvas(this.certificateElement.nativeElement, { scale: 3 }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'certificado_' + this.certificate?.name.replaceAll(' ', '_') + '.png';
      link.click();
    });
  }
}
