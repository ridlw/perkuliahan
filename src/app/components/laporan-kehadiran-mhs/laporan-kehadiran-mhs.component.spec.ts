import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporanKehadiranMhsComponent } from './laporan-kehadiran-mhs.component';

describe('LaporanKehadiranMhsComponent', () => {
  let component: LaporanKehadiranMhsComponent;
  let fixture: ComponentFixture<LaporanKehadiranMhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaporanKehadiranMhsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanKehadiranMhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
