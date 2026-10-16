import { Component } from '@angular/core';
import { PHOTOS } from '../data';

@Component({
  selector: 'app-gallery',
  template: `
  <section>
    <div class="wrap">
      <h2>Galería</h2>
      <div class="grid three">
        @for (f of photos; track f) { <img class="pic" [src]="f" alt="Rodada con TonyAdventures" loading="lazy"> }
        @empty {
          @for (i of [1,2,3]; track i) { <div class="ph">Tu foto en bici aquí</div> }
        }
      </div>
    </div>
  </section>`,
})
export class GalleryComponent { photos = PHOTOS; }
