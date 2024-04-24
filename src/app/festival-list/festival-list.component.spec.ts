import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalListComponent } from './festival-list.component';

describe('FestivalListComponent', () => {
  let component: FestivalListComponent;
  let fixture: ComponentFixture<FestivalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FestivalListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FestivalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
