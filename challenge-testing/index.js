class CarritoCompra {
  constructor(nombre, cantidad, precio) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
    this.productos = [];
  }
  agregarProducto(producto) {
    if (
      typeof producto.cantidad !== "number" ||
      typeof producto.precio !== "number" ||
      producto.cantidad <= 0 ||
      producto.precio <= 0
    ) {
      throw new Error("Precio y cantidad deben ser números positivos");
    }
    this.productos.push(producto);
  }
  calcularTotal() {
    let totalCarrito = 0;
    for (const producto of this.productos) {
      totalCarrito += producto.precio * producto.cantidad;
    }
    return totalCarrito;
  }
  aplicarDescuento(porcentaje) {
    let totalCarrito = 0;
    for (const producto of this.productos) {
      totalCarrito += producto.precio * producto.cantidad;
    }
    let totalDescuento = totalCarrito * (porcentaje / 100);
    return totalCarrito - totalDescuento;
  }
}

module.exports = { CarritoCompra };
