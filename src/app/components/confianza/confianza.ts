import { Component } from '@angular/core';
import { confianzaData } from '../../data/confianza.data';

@Component({
  selector: 'app-confianza',
  imports: [],
  templateUrl: './confianza.html',
  styleUrl: './confianza.scss',
})
export class Confianza {
  items = confianzaData;
}
