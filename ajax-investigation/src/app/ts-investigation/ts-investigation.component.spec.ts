import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsInvestigationComponent } from './ts-investigation.component';

describe('TsInvestigationComponent', () => {
  let component: TsInvestigationComponent;
  let fixture: ComponentFixture<TsInvestigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsInvestigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
