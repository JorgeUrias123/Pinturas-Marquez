import { Component, signal } from '@angular/core';
import { catalogo_colores } from '../../data/colores.data';
import { Color } from './interface/color.interface';

@Component({
  selector: 'app-colores',
  imports: [],
  templateUrl: './colores.html',
  styleUrl: './colores.scss',
})
export class Colores {
  colorActivo = signal<Color | null>(null);
  colores = catalogo_colores;

  seleccionar(color: Color) {
    this.colorActivo.set(this.colorActivo()?.id === color.id ? null : color);
  }

}
