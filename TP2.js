/*Comentarios para luego borrar:

Ariana funciones 1,2 y 4
Luján funciones 3, 5 y 6
Rocio funciones 7,8 y 9

*/


const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const ventas = [
  [ 100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
  [ 100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
  [ 100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva'] ],
  [ 100000003, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200'] ],
  [ 100000004, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200'] ],
  [ 100000005, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'] ]
]

const precios = [
  [ 'Monitor GPRS 3000', 200 ],
  [ 'Motherboard ASUS 1500', 120 ],
  [ 'Monitor ASC 543', 250 ],
  [ 'Motherboard ASUS 1200', 100 ],
  [ 'Motherboard MZI', 30 ],
  [ 'HDD Toyiva', 90 ],
  [ 'HDD Wezter Dishital', 75 ],
  [ 'RAM Quinston', 110 ],
  [ 'RAM Quinston Fury', 230 ]
];

const sucursales = ['Centro', 'Caballito'];


/* --- funciones --- */
const precioMaquina =(componentes) =>{
};

const cantidadVentasComponente =(componente) =>{
};

const ventasVendedora =(nombre) =>{
  
};

const componenteMasVendido =() =>{
};

const ventasSucursal =(sucursal) =>{
};

const mejorVendedora =() =>{
};

// 7.-Hallando venta promedio de la venta total:
const ventaPromedio =() =>{
  let sumaTotal = ventaSumaTotal();
    let cantProductos = totalProductoVendido();

    let promedio = sumaTotal / cantProductos;
    
    return Math.floor(promedio);
};

//halando el total de ventas:
const ventaSumaTotal = () => {
  let sumaTotal = ventas.reduce((acumulador, venta) => {
    for(componente of venta[6]){
      let precioDeComponente = traerPrecioDeComponente(componente);
      acumulador += precioDeComponente;
    }
    return acumulador;
  }, 0)
  return sumaTotal;
}

//hallando el precio por componete llamado:
const traerPrecioDeComponente = (componente) => {
let precioComponente = precios.find(elemento => elemento[0] === componente );
return precioComponente[1];
}

//hallando el total de productos vendidos:
const totalProductoVendido = ()=>{
let cantProductosVendidos = ventas.reduce((acumulador,venta) =>{
    let cantComponentes = venta[6].length;
    acumulador += cantComponentes;
  return acumulador;
}, 0);
return cantProductosVendidos;
}

//8.- Obtener el Id de venta entre 100000000 y 999999999:
// idAleatorio = Math.floor(Math.random()*(Y-X))+X

const obtenerIdVenta =() =>{
  const IdAleatorio = Math.floor(Math.random() * (999999999 - 100000000) + 100000000);
  return IdAleatorio;
};

//9.- agregarVenta(id,dia, mes, anio, vendedora, sucursal, componentes)
const agregarVenta =(dia, mes, anio, vendedora, sucursal, componentes) =>{
};


/* --- Fin de funciones --- */


module.exports = {
    vendedoras,
    ventas,
    precios,
    sucursales,
    precioMaquina,
    cantidadVentasComponente,
    ventasVendedora,
    componenteMasVendido,
    ventasSucursal,
    mejorVendedora,
    ventaPromedio,
    obtenerIdVenta,
    agregarVenta,

};