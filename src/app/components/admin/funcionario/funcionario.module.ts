import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { ComumModule } from 'src/app/modules/comum/comum.module';
import { FilterDepartamentoPipe } from 'src/app/pipes/filter-departamento.pipe';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioComponent } from './funcionario.component';



@NgModule({
  declarations: [FuncionarioComponent, FilterDepartamentoPipe],
  imports: [
    ComumModule,
    NgSelectModule,
    FuncionarioRoutingModule
  ],
})
export class FuncionarioModule { }
