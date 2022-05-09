import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedGraphComponent } from './embedded-graph.component';

describe('EmbeddedGraphComponent', () => {
  let component: EmbeddedGraphComponent;
  let fixture: ComponentFixture<EmbeddedGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbeddedGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
