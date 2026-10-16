import { Component } from '@angular/core';
import { DATES, wa } from '../data';

@Component({
  selector: 'app-dates',
  templateUrl: 'dates.component.html',
})
export class DatesComponent { dates = DATES; wa = wa; }
