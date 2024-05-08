import { Component } from '@angular/core';
import { Festival } from './models/festival.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Festivals';

  selected_id: string = "";

  onSelect(selected_id: string) {
    this.selected_id = selected_id;
  }
}
