import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EheaderComponent } from './eheader.component';

describe('EheaderComponent', () => {
  let component: EheaderComponent;
  let fixture: ComponentFixture<EheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
