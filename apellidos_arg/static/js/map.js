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
    }
    
    
    static default() {
        const pathElements = document.querySelectorAll('path');
        pathElements.forEach((path) => {
            const provincia = new provinciaPath(path)
            provincia.fill('#d3d3d3')
        })
    }

    setToolTip(string) {
        this.element.setAttribute('title', string)
    }

    static findByName(name){
        return new provinciaPath(document.getElementById(name))
    }
}
//COLORES//
defecto = '#d3d3d3'
hastaDiez = '#ff9095'
hastaVeinte = '#ee767f'
hastaTreinta = '#ee767f'
hastaCuarenta = '#cb4353'
hastaCincuenta = '#ba293d'
cien = '#000'


// <p style="font-size: 25px;"> ${element[2]} || Cantidad: ${element[0]} </p>

const renderMap = (lista, total) => {
    lista.forEach(element => {
        porcentaje = (element[0]*100)/total
        provincia = provinciaPath.findByName(element[1])
        provincia.textHover(`<p style="font-size: 25px;"> ${element[2]} ${element[0]} (${Math.round(porcentaje * 100) / 100}%)</p>`)
        
        provincia = provinciaPath.findByName(element[1])
        if (porcentaje <=10) {
            provincia.fill(hastaDiez)

        }else if (porcentaje <=20){
            provincia.fill(hastaVeinte)

        }else if (porcentaje <=30){
            provincia.fill(hastaTreinta)

        }else if (porcentaje <=40){
            provincia.fill(hastaCuarenta)

        }else if (porcentaje <100){
            provincia.fill(hastaCincuenta)

        }else if (porcentaje === 100){
            provincia.fill(cien)
        }else {
            provincia.fill(defecto)
        }

    });
}