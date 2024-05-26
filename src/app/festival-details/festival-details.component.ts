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

  subscription: Subscription | undefined;

  festival: Festival | undefined;
  organiser: string = "";
  participants: string = "";

  constructor(private service: FestivalService, private route: ActivatedRoute) {
    this.selected_id = this.route.snapshot.paramMap.get('id') ?? "";

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.service.getFestival(this.selected_id).subscribe((festival: any) => {
      this.festival = festival;

      if (festival) {
        this.service.getFestivalOrganiser(this.selected_id).subscribe((organiser) => {
          this.organiser = organiser;
        })

        this.service.getFestivalParticipants(this.selected_id).subscribe((participants) => {
          this.participants = participants.join(', ');
        })
      }
    });
  }
}
