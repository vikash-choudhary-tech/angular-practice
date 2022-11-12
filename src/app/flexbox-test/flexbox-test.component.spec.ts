import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxTestComponent } from './flexbox-test.component';

describe('FlexboxTestComponent', () => {
  let component: FlexboxTestComponent;
  let fixture: ComponentFixture<FlexboxTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexboxTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
