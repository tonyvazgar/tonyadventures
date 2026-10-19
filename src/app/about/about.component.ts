import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [`
    .about p { margin: 0 0 14px; }
    .about p:last-child { margin-bottom: 0; }
    .cierre { font-weight: 600; font-size: 19px; }
  `],
})
export class AboutComponent {}