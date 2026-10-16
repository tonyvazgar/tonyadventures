import { Component } from '@angular/core';
import { STEPS } from '../data';

@Component({
  selector: 'app-steps',
  template: `
  <section>
    <div class="wrap">
      <h2>Así de fácil</h2>
      <ol class="steps">
        @for (s of steps; track s.title) {
          <li><div><strong>{{ s.title }}</strong><br><span>{{ s.text }}</span></div></li>
        }
      </ol>
    </div>
  </section>`,
})
export class StepsComponent { steps = STEPS; }
