import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDispensasiComponent } from './edit-dispensasi.component';

describe('EditDispensasiComponent', () => {
  let component: EditDispensasiComponent;
  let fixture: ComponentFixture<EditDispensasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDispensasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDispensasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
