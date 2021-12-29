let autos = require('./autos');

const concesionaria = {
  autos: autos,
 
  buscarAuto: function(patente) {
     for (let i = 0; i < autos.length; i++) {
      
       if (autos[i].patente == patente) {
         return autos[i]
       }
       
     }
     return null;
  },
  venderAuto: function(patente){
     const auto = this.buscarAuto(patente);
     if (auto){
       auto.vendido = true
     }
  },
  autosParaLaVenta: function(){
      return autos = this.autos.filter(function(auto){
        return !auto.vendido;
  })
},
  autosNuevos: function(){         
    let autos_ventas = this.autosParaLaVenta(); // 1. array con auto no vendidos [{}, {}]   
    return autos_ventas.filter( auto => auto.km<=100 );  // 2. Recorrer o filtar el array  que km <= 100 
},
  listaDeVentas: function(){
    let ventas = this.autos.filter(function(patente){
      return patente.vendido == true
    });
      let lista = [];
      ventas.forEach(function(costo) {
      lista.push(costo.precio);
    })
      return lista;
  },
  
  totalDeVentas: function(){
    const total = this.listaDeVentas().reduce((acu, item) => {
      return acu + item;
    }, 0);
      return total
  },
  puedeComprar: function(auto,persona){
    let valorDeCuota = auto.precio / auto.cuotas
    if(auto.precio <= persona.capacidadDePagoTotal && valorDeCuota <= persona.capacidadDePagoEnCuotas){
    return true;
    }    
    return false
  },
  autosQuePuedeComprar: function(persona){
    let autosVenta = this.autosParaLaVenta();
    let lista = autosVenta.filter(auto => this.puedeComprar(auto,persona))
    return lista;
    
  } 

};
  
  let persona = {nombre: "Juan", capacidadDePagoEnCuotas: 20000, capacidadDePagoTotal: 100000};

  
console.log(concesionaria.buscarAuto('APL123'))
concesionaria.venderAuto('APL123')
console.log(concesionaria.autosParaLaVenta())
console.log(concesionaria.autosNuevos())
console.log(concesionaria.listaDeVentas())
console.log(concesionaria.totalDeVentas())
let auto = concesionaria.buscarAuto('JJK116')
console.log(concesionaria.puedeComprar(auto,persona))