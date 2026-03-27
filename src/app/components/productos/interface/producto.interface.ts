export interface Producto {
  id: string;
  nombre: string;
  subtitulo: string;
  icon: string;
  precios: { label: string; monto: string; ahorro?: boolean }[];
  bgClass: string;
}