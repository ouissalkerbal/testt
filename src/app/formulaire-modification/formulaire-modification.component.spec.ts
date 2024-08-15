import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireModificationComponent } from './formulaire-modification.component';

describe('FormulaireModificationComponent', () => {
  let component: FormulaireModificationComponent;
  let fixture: ComponentFixture<FormulaireModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulaireModificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
