import { Injectable } from '@angular/core';
import { Festival } from './models/festival.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivalService {

  festivals: Festival[] = [];

  constructor() {
    this.festivals.push(new Festival("Paaspop", "Maart", "Schijndel"));
    this.festivals.push(new Festival("Pinkpop", "Juni", "Landgraaf"));
    this.festivals.push(new Festival("Appelpop", "September", "Tiel"));
  }

  getFestivals(): Observable<Festival[]> {
    return of(this.festivals);
  }
}
