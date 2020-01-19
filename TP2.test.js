const trabajo = require('./tp2'),
precioDeComponente = trabajo.precioDeComponente;
encontrarComponenteEnVenta = trabajo.encontrarComponenteEnVenta;
vendedoras = trabajo.vendedoras;
ventas = trabajo.ventas;
precios = trabajo.precios;
sucursales = trabajo.surcursales;
precioMaquina = trabajo.precioMaquina;
cantidadVentasComponente = trabajo.cantidadVentasComponente;
ventasVendedora = trabajo.ventasVendedora;
componenteMasVendido= trabajo.componenteMasVendido;
ventasSucursal = trabajo.ventasSucursal;
mejorVendedora = trabajo.mejorVendedora;
ventaPromedio = trabajo.ventaPromedio;
totalProductoVendido = trabajo.totalProductoVendido;
ventaSumaTotal = trabajo.ventaSumaTotal;
obtenerIdVenta = trabajo.obtenerIdVenta;
agregarVenta = trabajo.agregarVenta;

 

test ('Función 1: precio de cada componente', () => {
  expect (precioDeComponente('Monitor GPRS 3000')).toBe(200)
});
test('precio de cada maquina', () => {
  expect(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500'])).toBe(320)
});
test ('Función 2:cantidad de venta por componente', () => {
    expect(cantidadVentasComponente('Motherboard ASUS 1500')).toBe(2)
  });
test('encontrar componente por venta', () => {
  expect(encontrarComponenteEnVenta(
      [100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'], 'Motherboard ASUS 1500'],
      'Motherboard ASUS 1500'))
    .toBe(1)
});
test('Funcion 3: retorna el importe total de ventas realizadas por vendedora', () => {
    expect(ventasVendedora("Grace")).toBe(990);
    expect(ventasVendedora("Ada")).toBe(670); 
});
test('Función 4: componente mas vendido', () => {
    expect(componenteMasVendido()).toBe('Monitor GPRS 3000')
})
test('Función 5: retorna el importe de las ventas totales realizadas por una sucursal', () => {  
    expect(ventasSucursal("Centro")).toBe(990);
});
test('Función 6: Devuelve el nombre de la vendedora que más ingresos generó', () => {
    expect(mejorVendedora() ).toBe("Grace");
}); 
test('Función 7: promedio de venta total', () => {
    expect(ventaPromedio()).toBe(353)   
});
test('venta suma total', () => {
  expect(ventaSumaTotal()).toBe(2120)
});
test('Función 8: Obtener un id de venta aleatorio entre 100000000 y 999999999', () => {
  let idVenta = obtenerIdVenta ();
  let valorAleatorio = (idVenta > 100000000 && idVenta  < 999999999);
  expect(valorAleatorio).toBeTruthy(); 
});
test('Función 9: agregando venta nueva', () => {
  const cantActual= ventas.length;
  agregarVenta(26, 12, 2019, 'harriet', 'belgrano', ['RAM Quinston Fury', 'HDD Wezter Dishital']);
  expect(ventas).toHaveLength(cantActual + 1);
});