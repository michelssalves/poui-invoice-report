import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioRcapComponent } from './relatorio-rcap.component';

describe('RelatorioRcapComponent', () => {
  let component: RelatorioRcapComponent;
  let fixture: ComponentFixture<RelatorioRcapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioRcapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioRcapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
