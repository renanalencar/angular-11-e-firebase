import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { ComumModule } from 'src/app/modules/comum/comum.module';

import { ListaRoutingModule } from './lista-routing.module';

@NgModule({
  declarations: [],
  imports: [
    ComumModule,
    NgSelectModule,
    ListaRoutingModule
  ]
})
export class ListaModule { }
