import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuratProgresPmbComponent } from './surat-progres-pmb.component';

describe('SuratProgresPmbComponent', () => {
  let component: SuratProgresPmbComponent;
  let fixture: ComponentFixture<SuratProgresPmbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuratProgresPmbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuratProgresPmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
