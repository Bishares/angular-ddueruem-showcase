import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MaterialElementsComponent } from './material-elements.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

describe('MaterialElementsComponent', () => {
  let component: MaterialElementsComponent;
  let fixture: ComponentFixture<MaterialElementsComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialElementsComponent],
      imports: [
        MatButtonModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Clicking the "Basic" button should toggle gifVisible', async () => {
    const buttons = await loader.getAllHarnesses(
      MatButtonHarness.with({ text: 'Basic' })
    );
    expect(buttons.length).toBe(1);
    const basicButton = buttons[0];
    expect(component.gifVisible).toBeFalse();

    await basicButton.click();

    expect(component.gifVisible).toBeTrue();

    await basicButton.click();

    expect(component.gifVisible).toBeFalse();
  });
});
