import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeVerificationPageRoutingModule } from './code-verification-routing.module';

import { CodeVerificationPage } from './code-verification.page';

import { HttpClient } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeVerificationPageRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [CodeVerificationPage],
})
export class CodeVerificationPageModule {}
