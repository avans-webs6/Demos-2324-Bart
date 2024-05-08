import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalCreateComponent } from './festival-create.component';

describe('FestivalCreateComponent', () => {
  let component: FestivalCreateComponent;
  let fixture: ComponentFixture<FestivalCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FestivalCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FestivalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
