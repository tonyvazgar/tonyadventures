import { Component } from '@angular/core';
import { wa } from '../data';

@Component({
  selector: 'app-whatsapp-button',
  template: `<a class="btn wa" [href]="wa('Hola Tony, vi tu página de transporte de bicicletas y quiero informes :)')">WhatsApp</a>`,
})
export class WhatsappButtonComponent { wa = wa; }
