import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensasiKehadiranDosenComponent } from './dispensasi-kehadiran-dosen.component';

describe('DispensasiKehadiranDosenComponent', () => {
  let component: DispensasiKehadiranDosenComponent;
  let fixture: ComponentFixture<DispensasiKehadiranDosenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispensasiKehadiranDosenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensasiKehadiranDosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
