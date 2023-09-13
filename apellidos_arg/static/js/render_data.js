const renderData = (response) => {
    let totalPais = 0
    let listaDataToMap = []
    
    //fragmento = document.createDocumentFragment()
    fragmentoTotal = document.createDocumentFragment()
    if (response.message === 'Success') {
        arrayData = response.info
        arrayData.forEach(e => {
            //const item = document.createElement('P')
            totalPais += e[0]
            //item.innerHTML = `cant: ${e[0]}, provincia: ${e[1]}`
            //fragmento.appendChild(item)

            //Limpieza de data
            provinciaToId = e[1].replace(/\s+/g, '_').toLowerCase();
            provinciaToId = removeTildes(provinciaToId)
            
            //data para enviar al mapa
            listaDataToMap.push([e[0], provinciaToId, e[1]])
        });
        renderMap(listaDataToMap, totalPais)
        total_p = document.createElement('P')
        total.innerHTML = ''
        total_p.innerHTML = `Total : ${totalPais}`
        fragmentoTotal.appendChild(total_p)
    }else {
        nothingItem = document.createElement('P')
        nothingItem.innerHTML = 'No se encontró información'
        fragmentoTotal.appendChild(nothingItem)
    }
    total.appendChild(fragmentoTotal)
    //detalle.appendChild(fragmento)
    
    
}

function removeTildes(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }