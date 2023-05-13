import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringKuliahComponent } from './monitoring-kuliah.component';

describe('MonitoringKuliahComponent', () => {
  let component: MonitoringKuliahComponent;
  let fixture: ComponentFixture<MonitoringKuliahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoringKuliahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringKuliahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
