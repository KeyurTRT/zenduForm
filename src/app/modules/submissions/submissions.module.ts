import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionsRoutingModule } from './submissions-routing.module';
import { SubmissionsComponent } from './submissions/submissions.component';
import { SharedModule } from '../shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps'
import { GlobalService } from '../shared/services/global.service';

@NgModule({
  declarations: [
    SubmissionsComponent
  ],
  imports: [
    CommonModule,
    SubmissionsRoutingModule,
    SharedModule,
    GoogleMapsModule
  ],
  providers: [
    GlobalService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SubmissionsModule { }
