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

const ventaPromedio =() =>{
};

const obtenerIdVenta =() =>{
};

const agregarVenta =(dia, mes, anio, vendedora, sucursal, componentes) =>{
};


/* --- Fin de funciones --- */


module.exports = {
    vendedoras,
    ventas,
    precios,
    surcursales,
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