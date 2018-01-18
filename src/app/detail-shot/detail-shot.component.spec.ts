import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailShotComponent } from './detail-shot.component';

describe('DetailShotComponent', () => {
  let component: DetailShotComponent;
  let fixture: ComponentFixture<DetailShotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailShotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
