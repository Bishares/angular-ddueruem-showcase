import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmbeddedGraphComponent } from './embedded-graph/embedded-graph.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MaterialElementsComponent } from './material-elements/material-elements.component';
import { WebworkerComponent } from './webworker/webworker.component';

const routes: Routes = [
  {path: 'fetch-data', component: FetchDataComponent},
  {path: 'embedded-graph', component: EmbeddedGraphComponent},
  {path: 'material-elements', component: MaterialElementsComponent},
  {path: 'webworker', component: WebworkerComponent},
  {path: '', redirectTo: '/fetch-data', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
