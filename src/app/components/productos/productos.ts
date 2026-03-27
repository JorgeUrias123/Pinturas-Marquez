import { Component } from '@angular/core';
import { catalogo_productos } from '../../data/productos.data';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.scss',
})
export class Productos {
  productos = catalogo_productos;
}
