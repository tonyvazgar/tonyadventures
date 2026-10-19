import { Component } from '@angular/core';
import { INSTAGRAM } from '../data';

@Component({
  selector: 'app-footer',
  template: `
  <footer>
    <div class="wrap">
      <p><strong>TonyAdventures</strong> · Cholula / Puebla</p>
      <p>Instagram <a [href]="'https://instagram.com/' + instagram"> &#64;{{ instagram }}</a></p>
    </div>
    <p>👀 Visitas: <span id="visitas">…</span></p>
  </footer>`,
})
export class FooterComponent { instagram = INSTAGRAM; }
