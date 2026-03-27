import { Component } from '@angular/core';
import { contactoData } from '../../data/contacto.data';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {
  contactos = contactoData;
  waLink = `https://wa.me/526683222977?text=Hola%20Pinturas%20M%C3%A1rquez%2C%20quiero%20pedir%20una%20cotizaci%C3%B3n`;
}
