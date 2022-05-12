import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EmbeddedGraphComponent } from './embedded-graph/embedded-graph.component';
import { MaterialElementsComponent } from './material-elements/material-elements.component';
import { WebworkerComponent } from './webworker/webworker.component';
import { MockModule } from './mock-server/mock.module';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { D3ExampleComponent } from './embedded-graph/d3-example/d3-example.component';
import { CanvasExampleComponent } from './embedded-graph/canvas-example/canvas-example.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';

let extraModules = environment.mockApi ? [MockModule] : [];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FetchDataComponent,
    EmbeddedGraphComponent,
    MaterialElementsComponent,
    WebworkerComponent,
    ...extraModules,
    D3ExampleComponent,
    CanvasExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
