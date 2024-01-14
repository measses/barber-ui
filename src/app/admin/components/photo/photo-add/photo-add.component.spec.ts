import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAddComponent } from './photo-add.component';

describe('PhotoAddComponent', () => {
  let component: PhotoAddComponent;
  let fixture: ComponentFixture<PhotoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
