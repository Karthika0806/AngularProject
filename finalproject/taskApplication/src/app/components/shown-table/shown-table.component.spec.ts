import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShownTableComponent } from './shown-table.component';

describe('ShownTableComponent', () => {
  let component: ShownTableComponent;
  let fixture: ComponentFixture<ShownTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShownTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShownTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
