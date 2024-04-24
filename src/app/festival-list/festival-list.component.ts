import { Component, EventEmitter, Output } from '@angular/core';
import { Festival } from '../models/festival.model';

import { FestivalService } from '../festival.service';

@Component({
  selector: 'app-festival-list',
  templateUrl: './festival-list.component.html',
  styleUrl: './festival-list.component.css'
})
export class FestivalListComponent {
  @Output()
  onSelect = new EventEmitter();

  selected: Festival | undefined;

  festivals: Festival[] = [];

  constructor(service: FestivalService) {
    service.getFestivals().subscribe(festivals => {
      this.festivals = festivals;
    })
  }

  onClick(festival: Festival) {
    this.selected = festival == this.selected ? undefined : festival;
    this.onSelect.emit(this.selected);
  }
}
