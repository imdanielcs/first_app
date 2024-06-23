import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicadorPageRoutingModule } from './indicador-routing.module';

import { IndicadorPage } from './indicador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicadorPageRoutingModule
  ],
  declarations: [IndicadorPage]
})
export class IndicadorPageModule {}
