import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadwalPerkuliahanMhsComponent } from './jadwal-perkuliahan-mhs.component';

describe('JadwalPerkuliahanMhsComponent', () => {
  let component: JadwalPerkuliahanMhsComponent;
  let fixture: ComponentFixture<JadwalPerkuliahanMhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JadwalPerkuliahanMhsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JadwalPerkuliahanMhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
