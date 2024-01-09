import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkingRangeComponent } from './user-working-range.component';

describe('UserWorkingRangeComponent', () => {
  let component: UserWorkingRangeComponent;
  let fixture: ComponentFixture<UserWorkingRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWorkingRangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserWorkingRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
