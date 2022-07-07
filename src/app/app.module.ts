import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { SearchbooksComponent } from './searchbooks/searchbooks.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { DeletbookComponent } from './deletbook/deletbook.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbooksComponent,
    SearchbooksComponent,
    ViewbookComponent,
    DeletbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
