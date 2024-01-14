import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoUpdateComponent } from './photo-update.component';

describe('PhotoUpdateComponent', () => {
  let component: PhotoUpdateComponent;
  let fixture: ComponentFixture<PhotoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
