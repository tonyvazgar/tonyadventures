import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { TrustComponent } from './trust/trust.component';
import { PricesComponent } from './prices/prices.component';
import { StepsComponent } from './steps/steps.component';
import { DatesComponent } from './dates/dates.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';

// Aquí solo se ordenan las secciones. Para agregar una nueva:
// 1) crea su carpeta/componente  2) impórtalo abajo  3) ponlo en el template.
@Component({
  selector: 'app-root',
  imports: [
    HeroComponent, ServicesComponent, TrustComponent, PricesComponent, StepsComponent,
    DatesComponent, GalleryComponent, FooterComponent, WhatsappButtonComponent,
  ],
  template: `
    <app-hero />
    <main>
      <app-dates />
      <app-gallery />
      <app-services />
      <app-trust />
      <app-prices />
      <app-steps />
    </main>
    <app-footer />
    <app-whatsapp-button />
  `,
})
export class App {}
