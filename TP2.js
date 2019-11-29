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

  let elementosVendidos = [];
  let suma = 0;
  for (let i=0;i<ventas.length;i++){
    if(nombre == ventas[i][4]){
      for(let x=0;x<ventas[i][4].length;x++){
       elementosVendidos.push(ventas[i][6][x]);
      }
    }
  }

  for (let i=0;i<elementosVendidos.length;i++){
    for(let x=0;x<precios.length;x++){
      if(elementosVendidos[i]==precios[x][0]){
          suma = suma + precios[x][1];  
      }
    }
  }
 return suma;
};

const componenteMasVendido =() =>{
};

const ventasSucursal =(sucursal) =>{
  let elementosVendidos = [];
  let suma = 0;
  for (let i=0;i<ventas.length;i++){
    if(sucursal == ventas[i][5]){
      for(let x=0;x<ventas[i][5].length;x++){
       elementosVendidos.push(ventas[i][6][x]);
      }
    }
  }

  for (let i=0;i<elementosVendidos.length;i++){
    for(let x=0;x<precios.length;x++){
      if(elementosVendidos[i]==precios[x][0]){
          suma = suma + precios[x][1];  
      }
    }
  }
 return suma;
};

const mejorVendedora =() =>{
  let laMejor = "";

  for(let i=0;i<vendedoras.length;i++){
    if (ventasVendedora(laMejor) < ventasVendedora(vendedoras[i])){
      laMejor = vendedoras[i];
    } 
  }
  
  return laMejor;
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