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
    expect (traerPrecioDeComponente('Monitor GPRS 3000')).toBe(200)
});
test ('suma total de las ventas', ()=>{
  expect (ventaSumaTotal()).toBe(2120)
});
test ('suma total de productos vendidos', ()=>{
  expect (totalProductoVendido()).toBe(14)
});
test ('promedio de venta total', ()=>{
  expect (ventaPromedio()).toBe(151)   
});

