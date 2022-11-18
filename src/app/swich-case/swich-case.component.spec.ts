import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwichCaseComponent } from './swich-case.component';

describe('SwichCaseComponent', () => {
  let component: SwichCaseComponent;
  let fixture: ComponentFixture<SwichCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwichCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwichCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
