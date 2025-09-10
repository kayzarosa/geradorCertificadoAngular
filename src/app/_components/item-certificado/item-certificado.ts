import { Component, Input } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css',
})
export class ItemCertificado {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() dateOfIssue: string = '';

  constructor(private router: Router) {}

  redirectCertificado() {
    this.router.navigate(['/certificado', this.id]);
  }
}
