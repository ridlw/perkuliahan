import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporanKehadiranDosenComponent } from './laporan-kehadiran-dosen.component';

describe('LaporanKehadiranDosenComponent', () => {
  let component: LaporanKehadiranDosenComponent;
  let fixture: ComponentFixture<LaporanKehadiranDosenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaporanKehadiranDosenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanKehadiranDosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
