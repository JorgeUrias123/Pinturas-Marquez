import { Producto } from "../components/productos/interface/producto.interface";

export const catalogo_productos: Producto[] = [
  {
    id: 'galon',
    nombre: 'Galón',
    subtitulo: '4 litros · Acabado mate',
    icon: '../../assets/icons/productos/galon.svg',
    precios: [
      { label: 'Blanco', monto: '$300' }
    ],
    bgClass: 'card-galon'
  },
    {
    id: 'cubeta-blanca',
    nombre: 'Cubeta Blanca',
    subtitulo: '19 litros · Acabado mate',
    icon: '../../assets/icons/productos/cubeta.svg',
    precios: [
      { label: '1 cubeta', monto: '$850' },
      { label: '2 cubetas', monto: '$1,600', ahorro: true }
    ],
    bgClass: 'card-blanca'
  },
  {
    id: 'cubeta-color',
    nombre: 'Cubeta Color',
    subtitulo: '19 litros · Todos los tonos',
    icon: '../../assets/icons/productos/colores.svg',
    precios: [
      { label: '1 cubeta', monto: '$900' },
      { label: '2 cubetas', monto: '$1,700', ahorro: true }
    ],
    bgClass: 'card-color'
  }
]