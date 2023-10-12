form_last_name.addEventListener('submit', (e) => {
    inputLastName = document.getElementById('form_last_name')
    e.preventDefault();
    lastName = (last_name.value).toUpperCase()
    if (lastName.trim() === '') {
        inputLastName.classList.add('rojo')
        detalle.innerHTML = ''
        total.innerHTML = ''
    }else{
        inputLastName.classList.remove('rojo')
        sendLastName(lastName)
        detalle.innerHTML = ''
        total.innerHTML = '<p>Buscando...</p>'
        provinciaPath.default()
    }
    
})


url = '/apellidos_json'

function sendLastName  (lastName)  {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('X-CSRFToken', csrftoken);  // Agregar el token de seguridad en el encabezado

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {                
                //console.log('OOOKKK')
                let response = JSON.parse(xhr.responseText);
                renderData(response)
            } else {
                console.log('ERROR!!!!')
                throw new Error('Error en la solicitud: ' + xhr.status);
            }
        }

        xhr.onerror = function () {

            // Ha ocurrido un error en la solicitud
        };
    }

    let requestData = { lastName : lastName };  // Objeto con la lista de datos
    xhr.send(JSON.stringify(requestData));

};


// Obtener el token de seguridad desde el cookie
let csrftoken = getCookie('csrftoken');
////////////////////////////////////////////////
//////////////-----------COOKIE-------------////
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


