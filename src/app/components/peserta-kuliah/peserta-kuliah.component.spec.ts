import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesertaKuliahComponent } from './peserta-kuliah.component';

describe('PesertaKuliahComponent', () => {
  let component: PesertaKuliahComponent;
  let fixture: ComponentFixture<PesertaKuliahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesertaKuliahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesertaKuliahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
