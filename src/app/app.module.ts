import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxPieChartModule, DxSelectBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DxButtonModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxPieChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
