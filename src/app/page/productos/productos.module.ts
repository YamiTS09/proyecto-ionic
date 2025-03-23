import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPageRoutingModule } from './productos-routing.module';

import { ProductosPage } from './productos.page';
import { BandasComponent } from 'src/app/components/bandas/bandas.component';
import { PelotaComponent } from 'src/app/components/pelota/pelota.component';
import { RodilloComponent } from 'src/app/components/rodillo/rodillo.component';
import { CremaComponent } from 'src/app/components/crema/crema.component';
import { AceiteComponent } from 'src/app/components/aceite/aceite.component';
import { PerfilComponent } from 'src/app/components/perfil/perfil.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosPageRoutingModule,
    PerfilComponent,
    BandasComponent,
    PelotaComponent,
    RodilloComponent,
    CremaComponent,
    AceiteComponent
  ],
  declarations: [ProductosPage]
})
export class ProductosPageModule {}
