
const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const ventas = [
  [ 100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
  [ 100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
  [ 100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva'] ],
  [ 100000003, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200'] ],
  [ 100000004, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200'] ],
  [ 100000005, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'] ]
];

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

//1:
const precioDeComponente = (componente) => {
  let componenteNombrePrecio = precios.find(elemento => elemento[0] === componente);
  return componenteNombrePrecio[1];
}
const precioMaquina = (componentes) => {
  return componentes.reduce((acumulador, componente) => {
    acumulador += precioDeComponente(componente);
    return acumulador;
  }, 0)
};

//2:
const cantidadVentasComponente = (componente) => {
  return ventas.reduce((acumulador, venta) => {
    acumulador += encontrarComponenteEnVenta(venta, componente);
    return acumulador;
  },0)
};

const encontrarComponenteEnVenta = (venta, componente) => {
  const filtro = venta[6].filter(elemento => elemento == componente)
  return filtro.length
}; 

//3:
const ventasVendedora = (nombre) => {
  let elementosVendidos = [];
  let suma = 0;
  for (let i = 0; i < ventas.length; i++){
    if(nombre == ventas[i][4]){
      for(let x = 0; x < ventas[i][4].length; x++){
        elementosVendidos.push(ventas[i][6][x]);
      }
    }
  }
  for (let i = 0; i < elementosVendidos.length; i++){
    for(let x = 0; x < precios.length; x++){
      if(elementosVendidos[i] == precios[x][0]){
          suma = suma + precios[x][1];  
      }
    }
  }
  return suma;
};

/* Otra posible solucion:
const ventasVendedora = (nombre) => {
  return ventaPorVendedora(nombre).reduce((acumulador, venta)=> {
    acumulador += precioMaquina(venta[6])
    return acumulador;
  }, 0);
};
const ventaPorVendedora = (nombre) => ventas.filter(venta => venta[4] == nombre);
*/

// 4:
const componenteMasVendido = () => {
  let componenteMasVendido = "";
  let cantidadMaxima = 0;
  for (componente of precios){
    let cantidad = cantidadVentasComponente(componente[0]);
    if(cantidad > cantidadMaxima){
      componenteMasVendido = componente[0];
      cantidadMaxima = cantidad;
    }
  }
  return componenteMasVendido;
};

// 5:
const ventasSucursal = (sucursal) => {
  let elementosVendidos = [];
  let suma = 0;
  for (let i = 0; i < ventas.length; i++){
    if(sucursal == ventas[i][5]){
      for(let x = 0; x < ventas[i][5].length; x++){
        elementosVendidos.push(ventas[i][6][x]);
      }
    }
  }
  for (let i = 0; i < elementosVendidos.length; i++){
    for(let x = 0; x < precios.length; x++){
      if(elementosVendidos[i] == precios[x][0]){
        suma = suma + precios[x][1];  
      }
    }
  }
 return suma;
};
/*Otra posible solución:
const ventasSucursal = (sucursal) => {
  return ventaPorSucursal(sucursal).reduce((acumulador, venta)=> {
    acumulador += precioMaquina(venta[6])
    return acumulador;
  }, 0);
};
const ventaPorSucursal = (sucursal) => ventas.filter(venta => venta[5] == sucursal);
*/

//6:
const mejorVendedora = () => {
  let laMejor = "";
  for(let i = 0; i < vendedoras.length; i++){
    if (ventasVendedora(laMejor) < ventasVendedora(vendedoras[i])){
      laMejor = vendedoras[i];
    } 
  }
  return laMejor;
};

// 7:
const ventaPromedio = () => {
  let promedio = ventaSumaTotal() / totalProductoVendido();
  return Math.floor(promedio);
};
//halando sumatotal:
const ventaSumaTotal = () => {
  return ventas.reduce((acumulador, venta) => {
    const componentes = venta[6];  
    acumulador += precioMaquina(componentes);
    return acumulador;
  }, 0);
}
//hallando el total de productos vendidos:
const totalProductoVendido = () => {
  return ventas.reduce((acumulador, venta) => {
    let cantComponentes = venta[6].length;
    acumulador += cantComponentes;
    return acumulador;
  }, 0);
}

//8:
//Se usa la siguiente formulacion: idAleatorio = Math.floor(Math.random()*(Y-X))+X
const obtenerIdVenta = () => {
  const IdAleatorio = Math.floor(Math.random() * (999999999 - 100000000) + 100000000);
  return IdAleatorio;
};

//9:
const agregarVenta = (dia, mes, anio, vendedora, sucursal, componentes) =>{
  ventas.push([obtenerIdVenta(), dia, mes, anio, vendedora, sucursal, componentes]);
};


/* --- Fin de funciones --- */


module.exports = {
  precioDeComponente,
  vendedoras,
  ventas,
  precios,
  sucursales,
  precioMaquina,
  encontrarComponenteEnVenta,
  cantidadVentasComponente,
  ventasVendedora,
  componenteMasVendido,
  ventasSucursal,
  mejorVendedora,
  ventaPromedio,
  totalProductoVendido,
  ventaSumaTotal, 
  obtenerIdVenta,
  agregarVenta,
};