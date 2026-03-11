import { Injectable } from '@angular/core';
import { PedidosService } from './pedidos.service';
import { ProductosService } from './productos.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private pedidosService: PedidosService,
    private productosService: ProductosService
  ) {}

  getPedidosHoy() {
    const pedidos = this.pedidosService.getPedidos();
    return pedidos.length;
  }

  getVentasHoy() {
    const pedidos = this.pedidosService.getPedidos();

    return pedidos.reduce((total:any, pedido:any) => {
      return total + pedido.total;
    }, 0);
  }

  getPlatillos() {
    const productos = this.productosService.getProductos();
    return productos.length;
  }

  getPendientes() {
    const pedidos = this.pedidosService.getPedidos();

    return pedidos.filter((p:any) => p.estado === 'pendiente').length;
  }

}