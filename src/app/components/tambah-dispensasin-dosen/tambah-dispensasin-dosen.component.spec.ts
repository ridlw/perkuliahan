import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahDispensasinDosenComponent } from './tambah-dispensasin-dosen.component';

describe('TambahDispensasinDosenComponent', () => {
  let component: TambahDispensasinDosenComponent;
  let fixture: ComponentFixture<TambahDispensasinDosenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahDispensasinDosenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahDispensasinDosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
