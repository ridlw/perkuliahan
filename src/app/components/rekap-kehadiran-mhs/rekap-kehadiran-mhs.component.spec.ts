import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapKehadiranMhsComponent } from './rekap-kehadiran-mhs.component';

describe('RekapKehadiranMhsComponent', () => {
  let component: RekapKehadiranMhsComponent;
  let fixture: ComponentFixture<RekapKehadiranMhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RekapKehadiranMhsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapKehadiranMhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
