import { Component } from '@angular/core';
import { PRICES } from '../data';

@Component({
  selector: 'app-prices',
  template: `
  <section>
    <div class="wrap">
      <h2>Precios</h2>
      <div class="grid two">
        @for (p of prices; track p.title) {
          <div class="card"><h3>{{ p.title }}</h3><div class="price">{{ p.price }}</div><p>{{ p.text }}</p></div>
        }
      </div>
    </div>
  </section>`,
})
export class PricesComponent { prices = PRICES; }
