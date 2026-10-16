import { Component } from '@angular/core';
import { INSTAGRAM } from '../data';

@Component({
  selector: 'app-footer',
  template: `
  <footer>
    <div class="wrap">
      <p><strong>TonyAdventures</strong> · Cholula / Puebla</p>
      <p><a [href]="'https://instagram.com/' + instagram">Instagram &#64;{{ instagram }}</a></p>
    </div>
  </footer>`,
})
export class FooterComponent { instagram = INSTAGRAM; }
