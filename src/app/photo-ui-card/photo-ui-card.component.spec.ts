import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoUiCardComponent } from './photo-ui-card.component';

describe('PhotoUiCardComponent', () => {
  let component: PhotoUiCardComponent;
  let fixture: ComponentFixture<PhotoUiCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoUiCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoUiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
