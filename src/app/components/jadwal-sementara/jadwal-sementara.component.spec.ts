import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadwalSementaraComponent } from './jadwal-sementara.component';

describe('JadwalSementaraComponent', () => {
  let component: JadwalSementaraComponent;
  let fixture: ComponentFixture<JadwalSementaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JadwalSementaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JadwalSementaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
