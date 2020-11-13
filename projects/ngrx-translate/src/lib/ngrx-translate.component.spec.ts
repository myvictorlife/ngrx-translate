import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxTranslateComponent } from './ngrx-translate.component';

describe('NgrxTranslateComponent', () => {
  let component: NgrxTranslateComponent;
  let fixture: ComponentFixture<NgrxTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxTranslateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
