import { Component } from '@angular/core';
import { wa } from '../data';

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
})
export class HeroComponent { wa = wa; }
