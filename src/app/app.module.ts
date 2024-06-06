import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InspectionApiService } from './services/inspection-api.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayInspectionComponent } from './display-inspection/display-inspection.component';
import { PrimeNgSharedModule } from './prime-ng-shared/prime-ng-shared.module';
import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BooksService } from './services/books-service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayInspectionComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    PrimeNgSharedModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [InspectionApiService,
  BooksService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
