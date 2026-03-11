import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedidos:any[] = JSON.parse(localStorage.getItem('pedidos') || '[]');

  constructor() {}

  getPedidos(){
    return this.pedidos;
  }

  guardarPedido(pedido:any){

    pedido.id = Date.now();
    pedido.estado = 'pendiente';

    this.pedidos.push(pedido);

    localStorage.setItem('pedidos', JSON.stringify(this.pedidos));
  }

  actualizarEstado(id:number, estado:string){

    const pedido = this.pedidos.find(p => p.id === id);

    if(pedido){
      pedido.estado = estado;
      localStorage.setItem('pedidos', JSON.stringify(this.pedidos));
    }

  }

}