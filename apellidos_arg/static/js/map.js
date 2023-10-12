class provinciaPath{

    constructor (element) {
        this.element = element
        //tooltip
        this.element.setAttribute('data-toggle', 'tooltip')
        this.element.setAttribute('data-html', 'true')
        
    }

    fill(color) {
        this.element.setAttribute('style', `fill: ${color} !important;`);
        
    }

    textHover(texto) {
        this.element.setAttribute('title', texto)
        this.element.setAttribute('data-original-title', texto)
    }
    
    
    static default() {
        const pathElements = document.querySelectorAll('path');
        pathElements.forEach((path) => {
            const provincia = new provinciaPath(path)
            provincia.fill('#d3d3d3')
            provincia.textHover('')
        })
    }

    setToolTip(string) {
        this.element.setAttribute('title', string)
        console.log(string)
    }

    static findByName(name){
        return new provinciaPath(document.getElementById(name))
    }
}
//COLORES//

const defecto = '#d3d3d3'
const hastaCinco = "#A6D4FA";
const hastaDiez = "#89C1F9";
const hastaQuince = "#6CBFF7";
const hastaVeinte = "#4FBDF6";
const hastaVeinticinco = "#32ABF5";
const hastaTreinta = "#1599F4";
const hastaTreintaCinco = "#0087F2";
const hastaCuarenta = "#0079D9";
const hastaCuarentaCinco = "#006BC2";
const hastaCincuenta = "#005DAE";
const cien = '#000000';



// <p style="font-size: 25px;"> ${element[2]} || Cantidad: ${element[0]} </p>
const renderMap = (lista, total) => {
    lista.forEach(element => {
        cantidad = element[0]
        nombre_provincia = element[2]
        porcentaje = (element[0]*100)/total
        provincia = provinciaPath.findByName(element[1])
        provincia.textHover(`<p style="font-size: 25px;"> ${nombre_provincia} ${cantidad} (${Math.round(porcentaje * 100) / 100}%)</p>`)

        provincia = provinciaPath.findByName(element[1])
        if (porcentaje <=5) {
            provincia.fill(hastaCinco)

        }else if (porcentaje <=10){
            provincia.fill(hastaDiez)

        }else if (porcentaje <=15){
            provincia.fill(hastaQuince)

        }else if (porcentaje <=20){
            provincia.fill(hastaVeinte)

        }else if (porcentaje <=25){
            provincia.fill(hastaVeinticinco)

        }else if (porcentaje <=30) {
            provincia.fill(hastaTreinta)

        }else if (porcentaje <=35) {
            provincia.fill(hastaTreintaCinco)

        }else if (porcentaje <=40) {
            provincia.fill(hastaCuarenta)

        }else if (porcentaje <=45) {
            provincia.fill(hastaCuarentaCinco)

        }else if (porcentaje <100) {
            provincia.fill(hastaCincuenta)

        }else if (porcentaje === 100){
            provincia.fill(cien)

        }else {
            provincia.fill(defecto)
        }

    });
}