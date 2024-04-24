import { Component, Input } from '@angular/core';
import { Festival } from '../models/festival.model';

@Component({
  selector: 'app-festival-details',
  templateUrl: './festival-details.component.html',
  styleUrl: './festival-details.component.css'
})
export class FestivalDetailsComponent {
  @Input()
  festival: Festival | undefined;
}
