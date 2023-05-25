import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteComponent } from './cliente/cliente.component';


@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class ClientesModule { }
