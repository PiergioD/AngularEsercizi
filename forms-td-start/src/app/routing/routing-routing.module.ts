import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { TemplateDriveFormComponent } from '../template-drive-form/template-drive-form.component';
import { ReactiveEsercizioComponent } from '../reactive-esercizio/reactive-esercizio.component';

const routes: Routes = [
  { path: 'template', component: TemplateDriveFormComponent },
  {
    path: 'reattivo',
    component: ReactiveFormComponent,
  },
  { path: 'esercizio', component: ReactiveEsercizioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingRoutingModule {}
