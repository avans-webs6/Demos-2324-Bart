import { Component, EventEmitter, Output } from '@angular/core';
import { Festival } from '../models/festival.model';

@Component({
  selector: 'app-festival-list',
  templateUrl: './festival-list.component.html',
  styleUrl: './festival-list.component.css'
})
export class FestivalListComponent {
  @Output()
  onSelect = new EventEmitter();

  selected: Festival | undefined;

  festivals: Festival[] = [
    new Festival("Paaspop", "Maart", "Schijndel"),
    new Festival("Pinkpop", "Juni", "Landgraaf"),
    new Festival("Appelpop", "September", "Tiel")];

  onClick(festival: Festival) {
    this.selected = festival == this.selected ? undefined : festival;
    this.onSelect.emit(this.selected);
  }
}
