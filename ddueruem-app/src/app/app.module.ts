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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
