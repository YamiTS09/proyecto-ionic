import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonActionSheet, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-form-citas',
  templateUrl: './form-citas.page.html',
  styleUrls: ['./form-citas.page.scss'],
  standalone: false,
})
export class FormCitasPage implements OnInit {
  
  isActionSheetOpen = false;

  constructor(private router: Router) {}

  setOpen(state: boolean) {
    this.isActionSheetOpen = state;
  }

  validarPago(metodo: string) {
    if (!metodo) {
      console.log('Error: No se ha seleccionado un método de pago');
      return;
    }
    try {
      console.log(`Redirigiendo a ${metodo}...`);
      this.router.navigate([`/${metodo}`]);
    } catch (error) {
      console.error('Error al redirigir:', error);
    }
  }

  actionSheetButtons = [
    {
      text: 'Pagar con PayPal',
      icon: 'logo-paypal',
      handler: () => this.validarPago('paypal')
    },
    {
      text: 'Pagar con Tarjeta',
      icon: 'card',
      handler: () => this.validarPago('tarjeta')
    },
    {
      text: 'Cancelar',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Acción cancelada');
      }
    }
  ];

  ngOnInit() {}
}