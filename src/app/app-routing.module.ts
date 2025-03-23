import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BandasComponent } from './components/bandas/bandas.component';
import { PelotaComponent } from './components/pelota/pelota.component';
import { RodilloComponent } from './components/rodillo/rodillo.component';
import { CremaComponent } from './components/crema/crema.component';
import { AceiteComponent } from './components/aceite/aceite.component';
import { PerfilComponent } from './components/perfil/perfil.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio-sesion', // Redirige a la pantalla de inicio de sesión al iniciar la app
    pathMatch: 'full'
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./page/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs/inicio',
    redirectTo: 'tabs/inicio',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./page/registro/registro.module').then( m => m.RegistroPageModule)
  },
  { path: 'app-bandas', component: BandasComponent },
  { path: 'app-pelota', component: PelotaComponent },
  { path: 'app-rodillo', component: RodilloComponent },
  { path: 'app-crema', component: CremaComponent },
  { path: 'app-aceite', component: AceiteComponent },
  { path: 'app-perfil', component: PerfilComponent },



  {
    path: 'nosotros',
    loadChildren: () => import('./page/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'acercade',
    loadChildren: () => import('./page/acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'metodopago',
    loadChildren: () => import('./page/metodopago/metodopago.module').then( m => m.MetodopagoPageModule)
  },
  {
    path: 'form-citas',
    loadChildren: () => import('./page/form-citas/form-citas.module').then( m => m.FormCitasPageModule)
  },
  {
    path: 'paypal',
    loadChildren: () => import('./page/paypal/paypal.module').then( m => m.PaypalPageModule)
  },
  {
    path: 'tarjeta',
    loadChildren: () => import('./page/tarjeta/tarjeta.module').then( m => m.TarjetaPageModule)
  },
  {
    path: 'mercado-pago',
    loadChildren: () => import('./page/mercado-pago/mercado-pago.module').then( m => m.MercadoPagoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
