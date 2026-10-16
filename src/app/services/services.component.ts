import { Component } from '@angular/core';
import { SERVICES } from '../data';

@Component({
  selector: 'app-services',
  template: `
  <section class="first">
    <div class="wrap">
      <h2>Qué hacemos</h2>
      <div class="grid three">
        @for (s of services; track s.title) {
          <div class="card"><h3>{{ s.icon }} {{ s.title }}</h3><p>{{ s.text }}</p></div>
        }
      </div>
    </div>
  </section>`,
})
export class ServicesComponent { services = SERVICES; }
