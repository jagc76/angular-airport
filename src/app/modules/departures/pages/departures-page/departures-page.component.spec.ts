import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparturesPageComponent } from './departures-page.component';

describe('DeparturesPageComponent', () => {
  let component: DeparturesPageComponent;
  let fixture: ComponentFixture<DeparturesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparturesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparturesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
