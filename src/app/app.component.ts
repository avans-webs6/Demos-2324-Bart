import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Festivals';

  festival: string = "";

  selected: string = "";

  festivals: string[] = [ "Paaspop", "Pinkpop", "Lowlands" ];

  onSelect(festival: string) {
    this.selected = festival == this.selected ? "" : festival;
  }

  onAppend() {
    const index = this.festivals.indexOf(this.festival);
    if (index < 0) {
      this.festivals.push(this.festival);
    }
  }
}
