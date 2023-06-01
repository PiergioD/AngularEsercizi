import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RoutingRoutingModule } from './routing/routing-routing.module';
import { TemplateDriveFormComponent } from './template-drive-form/template-drive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveEsercizioComponent } from './reactive-esercizio/reactive-esercizio.component';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateDriveFormComponent,
    ReactiveEsercizioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
