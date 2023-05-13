import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadwalPerkuliahanComponent } from './jadwal-perkuliahan.component';

describe('JadwalPerkuliahanComponent', () => {
  let component: JadwalPerkuliahanComponent;
  let fixture: ComponentFixture<JadwalPerkuliahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JadwalPerkuliahanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JadwalPerkuliahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
