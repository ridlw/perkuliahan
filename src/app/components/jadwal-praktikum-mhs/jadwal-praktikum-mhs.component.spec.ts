import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadwalPraktikumMhsComponent } from './jadwal-praktikum-mhs.component';

describe('JadwalPraktikumMhsComponent', () => {
  let component: JadwalPraktikumMhsComponent;
  let fixture: ComponentFixture<JadwalPraktikumMhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JadwalPraktikumMhsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JadwalPraktikumMhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
