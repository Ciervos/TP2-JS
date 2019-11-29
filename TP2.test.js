const trabajo = require('./tp2'),
vendedoras = trabajo.vendedoras;
ventas = trabajo.ventas;
precios = trabajo.precios;
sucursales = trabajo.surcursales;
precioMaquina = trabajo.precioMaquina;
cantidadVentasComponentes = trabajo.cantidadVentasComponentes;
ventasVendedora = trabajo.ventasVendedora;
componenteMasVendido= trabajo.componenteMasVendido;
ventasSucursal = trabajo.ventasSucursal;
mejorVendedora = trabajo.mejorVendedora;
ventaPromedio = trabajo.ventaPromedio;
obtenerIdVenta = trabajo.obtenerIdVenta;
agregarVenta = trabajo.agregarVenta;







test ('precio de cada componente', ()=>{
  expect (precioDeComponente('Monitor GPRS 3000')).toBe(200)
});
test('precio de cada maquina', ()=>{
  expect (precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500'])).toBe(320)
});
test('encontrar componente por venta', ()=>{
  expect (encontrarComponenteEnVenta(
    [100000000, 4, 2, 2019, 'Grace', 'Centro', 
    ['Monitor GPRS 3000', 'Motherboard ASUS 1500'],
    'Motherboard ASUS 1500'],'Motherboard ASUS 1500')).toBe(1)
});
test ('cantidad de venta por componente', () =>{
  expect (cantidadVentasComponente('Motherboard ASUS 1500')).toBe(2)
});
test ('encontrar componente en venta', () =>{
  expect ( encontrarComponenteEnVenta(
    [ 100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
    'Motherboard ASUS 1500').toBe(1))
});

test ('venta total por vendedora', () =>{
  expect (ventasVendedora('Ada')).toBe(670) 
});
test ('venta por cada vendedora', ()=>{
  expect (ventaPorVendedora('Ada')).toHaveLength(2)
});
test ('suma total de productos vendidos', ()=>{
  expect (totalProductoVendido()).toBe(14)
});
test ('venta suma total', () =>{
  expect (ventaSumaTotal()).toBe(2114)
});
test ('promedio de venta total', ()=>{
  expect (ventaPromedio()).toBe(151)   
});
test ('obteniendo un id de venta aleatorio entre 100000000 y 999999999', ()=>{

  let idVenta = obtenerIdVenta ();
  let valorAleatorio = (idVenta > 100000000 && idVenta  < 999999999);

  expect (valorAleatorio).toBe(true)   
});
test ('agregando venta nueva', ()=>{
  const cantActual= ventas.length;
  agregarVenta(26, 12, 2019, 'harriet', 'belgrano', ['RAM Quinston Fury','HDD Wezter Dishital']);
  expect(ventas).toHaveLength(cantActual + 1);
});