import { Component, OnInit } from '@angular/core';
import { PaypalService } from 'src/app/services/paypal.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.page.html',
  styleUrls: ['./paypal.page.scss'],
  standalone: false,
})
export class PaypalPage implements OnInit {

  constructor(private paypalService: PaypalService) {}

  realizarPago() {
    this.paypalService.crearPago().subscribe((res: any) => {
      if (res && res.links) {
        const linkAprobacion = res.links.find((link: any) => link.rel === 'approve');
        if (linkAprobacion) {
          window.location.href = linkAprobacion.href; 
        }
      }
    });
  }
  ngOnInit() {
  }

}
