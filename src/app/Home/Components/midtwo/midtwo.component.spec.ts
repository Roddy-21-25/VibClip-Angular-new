import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidtwoComponent } from './midtwo.component';

describe('MidtwoComponent', () => {
  let component: MidtwoComponent;
  let fixture: ComponentFixture<MidtwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MidtwoComponent]
    });
    fixture = TestBed.createComponent(MidtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
