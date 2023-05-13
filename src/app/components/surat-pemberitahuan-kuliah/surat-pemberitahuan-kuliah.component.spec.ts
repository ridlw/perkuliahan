import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuratPemberitahuanKuliahComponent } from './surat-pemberitahuan-kuliah.component';

describe('SuratPemberitahuanKuliahComponent', () => {
  let component: SuratPemberitahuanKuliahComponent;
  let fixture: ComponentFixture<SuratPemberitahuanKuliahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuratPemberitahuanKuliahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuratPemberitahuanKuliahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
