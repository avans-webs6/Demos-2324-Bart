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

  selected_id: string = "";

  festivals: Festival[] = [];

  constructor(private service: FestivalService) {
    service.getFestivals().subscribe(festivals => {
      this.festivals = festivals;
    })
  }

  onClick(festival: Festival) {
    this.selected_id = festival.id == this.selected_id ? "" : festival.id;
    this.onSelect.emit(this.selected_id);
  }

  onDelete(festival: Festival) {
    this.service.deleteFestival(festival);
  }
}
