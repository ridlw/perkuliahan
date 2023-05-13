import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahJadwalComponent } from './tambah-jadwal.component';

describe('TambahJadwalComponent', () => {
  let component: TambahJadwalComponent;
  let fixture: ComponentFixture<TambahJadwalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahJadwalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahJadwalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
