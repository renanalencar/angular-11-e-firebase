import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComumModule } from 'src/app/modules/comum/comum.module';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoComponent } from './departamento.component';

@NgModule({
  declarations: [DepartamentoComponent],
  imports: [
    ComumModule,
    ReactiveFormsModule,
    DepartamentoRoutingModule
  ]
})
export class DepartamentoModule { }
