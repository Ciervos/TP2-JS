const trabajo = require('./tp2'),
vendedoras = trabajo.vendedoras;
ventas = trabajo.ventas;
precios = trabajo.precios;
sucursales = trabajo.sucursales;
precioMaquina = trabajo.precioMaquina;
cantidadVentasComponentes = trabajo.cantidadVentasComponentes;
ventasVendedora = trabajo.ventasVendedora;
componenteMasVendido= trabajo.componenteMasVendido;
ventasSucursal = trabajo.ventasSucursal;
mejorVendedora = trabajo.mejorVendedora;
ventaPromedio = trabajo.ventaPromedio;
obtenerIdVenta = trabajo.obtenerIdVenta;
agregarVenta = trabajo.agregarVenta;

test('Funcion 3: retorna el importe total de ventas realizadas por vendedora', ()=>{
 
    expect(ventasVendedora("Grace")).toBe(990);

   });