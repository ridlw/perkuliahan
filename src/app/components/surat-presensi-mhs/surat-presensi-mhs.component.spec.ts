import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuratPresensiMhsComponent } from './surat-presensi-mhs.component';

describe('SuratPresensiMhsComponent', () => {
  let component: SuratPresensiMhsComponent;
  let fixture: ComponentFixture<SuratPresensiMhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuratPresensiMhsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuratPresensiMhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
