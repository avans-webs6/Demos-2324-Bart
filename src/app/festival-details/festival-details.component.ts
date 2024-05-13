import { Component, Input } from '@angular/core';
import { Festival } from '../models/festival.model';

import { FestivalService } from '../festival.service';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-festival-details',
  templateUrl: './festival-details.component.html',
  styleUrl: './festival-details.component.css'
})
export class FestivalDetailsComponent {
  selected_id: string = "";

  subscription: Subscription | undefined;

  eventForm: any;

  constructor(private service: FestivalService, private route: ActivatedRoute, private formBuilder: UntypedFormBuilder) {
    this.selected_id = this.route.snapshot.paramMap.get('id') ?? "";

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.service.getFestival(this.selected_id).subscribe((festival: any) => {
      if (festival) {
        this.eventForm = this.formBuilder.group(festival);

        this.eventForm.valueChanges.subscribe(() => {
          this.service.updateEvent(this.eventForm.value)
        });
      }
    });
  }
}
