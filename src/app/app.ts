import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Productos } from './components/productos/productos';
import { Colores } from './components/colores/colores';
import { Confianza } from './components/confianza/confianza';
import { Contacto } from './components/contacto/contacto';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    Productos,
    Colores,
    Confianza,
    Contacto,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pinturas-marquez');
}
