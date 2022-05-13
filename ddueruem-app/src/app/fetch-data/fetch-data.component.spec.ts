import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { of } from 'rxjs';
import { FeatureModelService } from './feature-model.service';

import { FetchDataComponent } from './fetch-data.component';

describe('FetchDataComponent', () => {
  let component: FetchDataComponent;
  let fixture: ComponentFixture<FetchDataComponent>;
  let featureModelServiceSpy: jasmine.SpyObj<FeatureModelService>;
  featureModelServiceSpy = jasmine.createSpyObj('FeatureModelService', [
    'getUsers',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchDataComponent],
      providers: [
        { provide: FeatureModelService, useValue: featureModelServiceSpy },
      ],
      imports: [MatButtonToggleModule],
    }).compileComponents();
  });

  beforeEach(() => {
    (featureModelServiceSpy.getUsers as jasmine.Spy).and.returnValue(of([]));
    fixture = TestBed.createComponent(FetchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
