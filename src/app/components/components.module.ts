import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandasComponent } from './bandas/bandas.component';
import { IonicModule } from '@ionic/angular';
import { PelotaComponent } from './pelota/pelota.component';
import { RodilloComponent } from './rodillo/rodillo.component';
import { CremaComponent } from './crema/crema.component';
import { AceiteComponent } from './aceite/aceite.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  
  declarations: [
    BandasComponent,
    PelotaComponent,
    RodilloComponent,
    CremaComponent,
    AceiteComponent,
    PerfilComponent,
    ],
  imports: [
    CommonModule,
    IonicModule,
    BandasComponent,
    PelotaComponent,
    RodilloComponent,
    CremaComponent,
    AceiteComponent,
    PerfilComponent,
  ]
})
export class ComponentsModule { }
