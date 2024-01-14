import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveUpdateComponent } from './leave-update.component';

describe('LeaveUpdateComponent', () => {
  let component: LeaveUpdateComponent;
  let fixture: ComponentFixture<LeaveUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
