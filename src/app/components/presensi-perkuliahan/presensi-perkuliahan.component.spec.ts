import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresensiPerkuliahanComponent } from './presensi-perkuliahan.component';

describe('PresensiPerkuliahanComponent', () => {
  let component: PresensiPerkuliahanComponent;
  let fixture: ComponentFixture<PresensiPerkuliahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresensiPerkuliahanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresensiPerkuliahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
