import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuratEvaluasiPmbComponent } from './surat-evaluasi-pmb.component';

describe('SuratEvaluasiPmbComponent', () => {
  let component: SuratEvaluasiPmbComponent;
  let fixture: ComponentFixture<SuratEvaluasiPmbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuratEvaluasiPmbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuratEvaluasiPmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
