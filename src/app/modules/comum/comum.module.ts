import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng//button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { TabViewModule } from 'primeng/tabview';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  imports: [
    CommonModule, ButtonModule, FieldsetModule, InputMaskModule, MessagesModule, CheckboxModule,
    DialogModule, InputTextModule, InputTextareaModule, DropdownModule, ToolbarModule,
    ConfirmDialogModule, CalendarModule, TabViewModule, ToggleButtonModule
  ],
  exports: [
    ButtonModule, FieldsetModule, InputMaskModule, MessagesModule, CheckboxModule,
    DialogModule, InputTextModule, InputTextareaModule, DropdownModule, ToolbarModule,
    ConfirmDialogModule, CalendarModule, TabViewModule, ToggleButtonModule

  ],
  declarations: []
})
export class PrimeNGModule { }