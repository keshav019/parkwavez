import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoactionSelectorComponent } from './loaction-selector.component';

describe('LoactionSelectorComponent', () => {
  let component: LoactionSelectorComponent;
  let fixture: ComponentFixture<LoactionSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoactionSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoactionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
