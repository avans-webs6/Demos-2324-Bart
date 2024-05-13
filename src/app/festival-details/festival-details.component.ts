import { Component, Input } from '@angular/core';
import { Festival } from '../models/festival.model';

import { FestivalService } from '../festival.service';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-festival-details',
  templateUrl: './festival-details.component.html',
  styleUrl: './festival-details.component.css'
})
export class FestivalDetailsComponent {
  selected_id: string = "";

  festival: Festival | undefined;

  subscription: Subscription | undefined;

  constructor(private service: FestivalService, private route: ActivatedRoute) {
    this.selected_id = this.route.snapshot.paramMap.get('id') ?? "";
  
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.service.getFestival(this.selected_id).subscribe((festival: any) => {
      this.festival = festival;
    });
  }
}
