import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalCreateComponent } from './festival-create.component';
import { FormsModule } from '@angular/forms';

describe('FestivalCreateComponent', () => {
  let component: FestivalCreateComponent;
  let fixture: ComponentFixture<FestivalCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FestivalCreateComponent],
      imports: [FormsModule]
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
