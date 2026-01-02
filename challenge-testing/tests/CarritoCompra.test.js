//tests/CarritoCompra.test.js
const { CarritoCompra } = require("../index");

describe("tests clase constructor CarritoCompra", () => {
  let carrito;
  let piano, guitarra, violin;

  beforeEach(() => {
    carrito = new CarritoCompra();

    piano = { nombre: "piano", cantidad: 2, precio: 1000 };
    guitarra = { nombre: "guitarra", cantidad: 1, precio: 800 };
    violin = { nombre: "violin", cantidad: 1, precio: 900 };
  });

  test("probamos que la istancia de la clase sea un objeto", () => {
    expect(typeof carrito).toBe("object");
  });

  test("deberia inicializarse el carrito como un array vacio", () => {
    expect(carrito.productos.length).toBe(0);
    expect(carrito.productos).toEqual([]);
    expect(Array.isArray(carrito.productos)).toBe(true);
  });

  test("verificamos que exista el metodo agregarProducto", () => {
    expect(typeof carrito.agregarProducto).toBe("function");
    expect(carrito.agregarProducto).toBeDefined();
  });

  test("deberia recibir un producto-objeto y lo agrega al carrito", () => {
    carrito.agregarProducto(piano);
    expect(carrito.productos[0].nombre).toBe("piano");
    expect(carrito.productos[0].cantidad).toBe(2);
    expect(carrito.productos[0].precio).toBe(1000);
  });

  test("deberia salir error si se ingresa un precio que no sea un numero ", () => {
    expect(() => {
      carrito.agregarProducto({ nombre: "piano", cantidad: 2, precio: "mil" });
    }).toThrow("Precio y cantidad deben ser números positivos");
  });

  test("deberia salir error si se ingresa una cantidad que no sea un numero", () => {
    expect(() => {
      carrito.agregarProducto({
        nombre: "piano",
        cantidad: "dos",
        precio: 1000,
      });
    }).toThrow("Precio y cantidad deben ser números positivos");
  });

  test("deberia salir error si se ingresa un numero negativo en el precio", () => {
    expect(() => {
      carrito.agregarProducto({ nombre: "piano", cantidad: 2, precio: -500 });
    }).toThrow("Precio y cantidad deben ser números positivos");
  });

  test("deberia salir error si se ingresa un numero negativo en la cantidad", () => {
    expect(() => {
      carrito.agregarProducto({ nombre: "piano", cantidad: -2, precio: 1000 });
    }).toThrow("Precio y cantidad deben ser números positivos");
  });

  test("verificamos que exista el metodo calcularTotal", () => {
    expect(typeof carrito.calcularTotal).toBe("function");
    expect(carrito.calcularTotal).toBeDefined();
  });

  test("deberia calcular el total de la compra sumando los precios de los productos en el carrito", () => {
    carrito.agregarProducto(piano);
    carrito.agregarProducto(guitarra);
    carrito.agregarProducto(violin);
    expect(carrito.calcularTotal()).toBe(3700);
  });

  test("deberia aplicar un descuento al total de la compra segun porcentaje especificado", () => {
    carrito.agregarProducto(piano);
    carrito.agregarProducto(guitarra);

    const totalConDescuento = carrito.aplicarDescuento(50);
    expect(totalConDescuento).toBe(1400);
  });
});
