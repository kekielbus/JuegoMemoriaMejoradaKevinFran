// Variables del juego
var temporizador = false;
var cartasDestapadas = 0;
var pares = 0;
var timerInicial = 40;
var timer = timerInicial;
var puntuaje = 0;
var movimientos = 0;

// Referencias del DOM
var mostrarTiempo = document.getElementById('restante');
var mostrarPuntuaje = document.getElementById('puntuaje');
var mostrarMovimientos = document.getElementById('movimientos');
var tablero = document.getElementById('tablero');

// Pares de países y ciudades con cartas especiales
var paises_ciudades = [
    
    
    { pais: 'Polonia', imagePais: './CARTAS_PAISES/PAISES/polonia.jpg', ciudad: 'Varsovia', imageCiudad: './CARTAS_PAISES/PAISES/varsovia.jpg' },
    { pais: 'Belgica', imagePais: './CARTAS_PAISES/PAISES/belgica.jpg', ciudad: 'Bruselas', imageCiudad: './CARTAS_PAISES/PAISES/bruselas.jpg' },
    { pais: 'Rumania', imagePais: './CARTAS_PAISES/PAISES/rumania.jpg', ciudad: 'Bucarest', imageCiudad: './CARTAS_PAISES/PAISES/bucarest.jpg' },
    { pais: 'China', imagePais: './CARTAS_PAISES/PAISES/china.jpg', ciudad: 'Pekin', imageCiudad: './CARTAS_PAISES/PAISES/pekin.jpg' },
    { pais: 'Australia', imagePais: './CARTAS_PAISES/PAISES/australia.jpg', ciudad: 'Canberra', imageCiudad: './CARTAS_PAISES/PAISES/canberra.jpg' },
    { pais: 'Hungría', imagePais: './CARTAS_PAISES/PAISES/hungria.jpg', ciudad: 'Budapest', imageCiudad: './CARTAS_PAISES/PAISES/budapest.jpg' },
    { pais: 'Bolivia', imagePais: './CARTAS_PAISES/PAISES/bolivia.jpg', ciudad: 'La paz', imageCiudad: './CARTAS_PAISES/PAISES/lapaz.jpg' },
    { pais: 'Albania', imagePais: './CARTAS_PAISES/PAISES/albania.jpg', ciudad: 'Tirana', imageCiudad: './CARTAS_PAISES/PAISES/tirana.jpg' },
    { pais: 'Argentina', imagePais: './CARTAS_PAISES/PAISES/argentina.jpg', ciudad: 'Buenos aires', imageCiudad: './CARTAS_PAISES/PAISES/buenosaires.jpg' },
    { pais: 'Brasil', imagePais: './CARTAS_PAISES/PAISES/brasil.jpg', ciudad: 'Brasilia', imageCiudad: './CARTAS_PAISES/PAISES/brasilia.jpg' },
    { pais: 'Cabo verde', imagePais: './CARTAS_PAISES/PAISES/caboverde.jpg', ciudad: 'Praia', imageCiudad: './CARTAS_PAISES/PAISES/praia.jpg' },
    { pais: 'Serbia', imagePais: './CARTAS_PAISES/PAISES/serbia.jpg', ciudad: 'Belgrado', imageCiudad: './CARTAS_PAISES/PAISES/belgrado.jpg' },
    { pais: 'Francia', imagePais: './CARTAS_PAISES/PAISES/francia.jpg', ciudad: 'Paris', imageCiudad: './CARTAS_PAISES/PAISES/paris.jpg' },
    { pais: 'India', imagePais: './CARTAS_PAISES/PAISES/india.jpg', ciudad: 'Nueva Delhi', imageCiudad: './CARTAS_PAISES/PAISES/nuevadelhi.jpg' },
    { pais: 'Singapur', imagePais: './CARTAS_PAISES/PAISES/singapur.jpg', ciudad: 'Singapur', imageCiudad: './CARTAS_PAISES/PAISES/singapuur.jpg' },
    { pais: 'Vietham', imagePais: './CARTAS_PAISES/PAISES/vietham.jpg', ciudad: 'Hanoi', imageCiudad: './CARTAS_PAISES/PAISES/hanoi.jpg' },
    { pais: 'Lituania', imagePais: './CARTAS_PAISES/PAISES/lituania.jpg', ciudad: 'Vilna', imageCiudad: './CARTAS_PAISES/PAISES/vilna.jpg' },
    { pais: 'Ghana', imagePais: './CARTAS_PAISES/PAISES/ghana.jpg', ciudad: 'Acra', imageCiudad: './CARTAS_PAISES/PAISES/acra.jpg' },
    { pais: 'Granada', imagePais: './CARTAS_PAISES/PAISES/granada.jpg', ciudad: 'Saint George', imageCiudad: './CARTAS_PAISES/PAISES/saintgeorge.jpg' },
    { pais: 'Niger', imagePais: './CARTAS_PAISES/PAISES/niger.jpg', ciudad: 'Niamey', imageCiudad: './CARTAS_PAISES/PAISES/niamey.jpg' },
    { pais: 'Nigeria', imagePais: './CARTAS_PAISES/PAISES/nigeria.jpg', ciudad: 'Abuya', imageCiudad: './CARTAS_PAISES/PAISES/abuya.jpg' },
    { pais: 'Nicaragua', imagePais: './CARTAS_PAISES/PAISES/nicaragua.jpg', ciudad: 'Managua', imageCiudad: './CARTAS_PAISES/PAISES/managua.jpg' },
    { pais: 'Nueva Zelanda', imagePais: './CARTAS_PAISES/PAISES/nuevazelanda.jpg', ciudad: 'Wellington', imageCiudad: './CARTAS_PAISES/PAISES/wellington.jpg' },
    { pais: 'Panama', imagePais: './CARTAS_PAISES/PAISES/panama.jpg', ciudad: 'Panamá', imageCiudad: './CARTAS_PAISES/PAISES/panamá.jpg' },
    { pais: 'Somalia', imagePais: './CARTAS_PAISES/PAISES/somalia.jpg', ciudad: 'Mogadisicio', imageCiudad: './CARTAS_PAISES/PAISES/mogadisicio.jpg' },
    { pais: 'Sri lanka', imagePais: './CARTAS_PAISES/PAISES/sirlanka.jpg', ciudad: 'Colombo', imageCiudad: './CARTAS_PAISES/PAISES/colombo.jpg' },
    { pais: 'Uruguay', imagePais: './CARTAS_PAISES/PAISES/uruguay.jpg', ciudad: 'Montevideo', imageCiudad: './CARTAS_PAISES/PAISES/montevideo.jpg' },
    { pais: 'Togo', imagePais: './CARTAS_PAISES/PAISES/togo.jpg', ciudad: 'Lome', imageCiudad: './CARTAS_PAISES/PAISES/lome.jpg' },
    { pais: 'Kuwait', imagePais: './CARTAS_PAISES/PAISES/kuwait.jpg', ciudad: 'Kuwait', imageCiudad: './CARTAS_PAISES/PAISES/kuwait1.jpg' },
    { pais: 'Mongolia', imagePais: './CARTAS_PAISES/PAISES/mongolia.jpg', ciudad: 'Ulan Bator', imageCiudad: './CARTAS_PAISES/PAISES/ulanbator.jpg' },
    { pais: 'Tailandia', imagePais: './CARTAS_PAISES/PAISES/tailandia.jpg', ciudad: 'Bangrok', imageCiudad: './CARTAS_PAISES/PAISES/bangrok.jpg' },
    { pais: 'Kenia', imagePais: './CARTAS_PAISES/PAISES/kenia.jpg', ciudad: 'Nairobi', imageCiudad: './CARTAS_PAISES/PAISES/nairobi.jpg' },
    { pais: 'Laos', imagePais: './CARTAS_PAISES/PAISES/laos.jpg', ciudad: 'Vientian', imageCiudad: './CARTAS_PAISES/PAISES/vientian.jpg' },
    { pais: 'Liberia', imagePais: './CARTAS_PAISES/PAISES/liberia.jpg', ciudad: 'Monrovia', imageCiudad: './CARTAS_PAISES/PAISES/monrovia.jpg' },
    { pais: 'Malta', imagePais: './CARTAS_PAISES/PAISES/malta.jpg', ciudad: 'La valeta', imageCiudad: './CARTAS_PAISES/PAISES/lavaleta.jpg' },
    { pais: 'Honduras', imagePais: './CARTAS_PAISES/PAISES/honduras.jpg', ciudad: 'Tegucigalpa', imageCiudad: './CARTAS_PAISES/PAISES/tegucigalpa.jpg' },
    { pais: 'Mozambique', imagePais: './CARTAS_PAISES/PAISES/mozambique.jpg', ciudad: 'Maputo', imageCiudad: './CARTAS_PAISES/PAISES/maputo.jpg' },
    { pais: 'Mexico', imagePais: './CARTAS_PAISES/PAISES/mexico.jpg', ciudad: 'Ciudad de méxico', imageCiudad: './CARTAS_PAISES/PAISES/ciudaddeméxico.jpg' },
    { pais: 'Arabia Saudita', imagePais: './CARTAS_PAISES/PAISES/arabiasaudita.jpg', ciudad: 'Riad', imageCiudad: './CARTAS_PAISES/PAISES/riad.jpg' },
    { pais: 'Fiyi', imagePais: './CARTAS_PAISES/PAISES/fiyi.jpg', ciudad: 'Suva', imageCiudad: './CARTAS_PAISES/PAISES/suva.jpg' },
    { pais: 'Palaos', imagePais: './CARTAS_PAISES/PAISES/palaoss.jpg', ciudad: 'Ngerulmud', imageCiudad: './CARTAS_PAISES/PAISES/ngerulmud.jpg' }


   
];
var cartasEspeciales = [
    { tipo: 'joker', imageEspecial: './CARTAS_PAISES/CARTAS_ESPECIALES/JOKER.jpg' },
    { tipo: 'estrella', imageEspecial: './CARTAS_PAISES/CARTAS_ESPECIALES/ESTRELLA.jpg' },
    { tipo: 'bankDevil', imageEspecial: './CARTAS_PAISES/CARTAS_ESPECIALES/BANKDEVIL.jpg' },
    { tipo: 'peste', imageEspecial: './CARTAS_PAISES/CARTAS_ESPECIALES/PESTE.jpg' },
    { tipo: 'browser', imageEspecial: './CARTAS_PAISES/CARTAS_ESPECIALES/BROWSER.jpg' },
    { tipo: 'minibrowser', imageEspecial: './CARTAS_PAISES/CARTAS_ESPECIALES/MINIBROWSER.jpg' },
    { tipo: 'flor', imageEspecial: './CARTAS_PAISES/CARTAS_ESPECIALES/FLOR.jpg' },
    { tipo: 'champiñon', imageEspecial: './CARTAS_PAISES/CARTAS_ESPECIALES/CHAMPIÑON.jpg' }
];


function generarCartasAleatorias(cantidadPares) {
    const cartasSeleccionadas = [];
    const indicesUsados = new Set();

    while (cartasSeleccionadas.length < (cantidadPares - 4) * 2) {
        const index = Math.floor(Math.random() * paises_ciudades.length);
        if (!indicesUsados.has(index)) {
            indicesUsados.add(index);
            const item = paises_ciudades[index];
            cartasSeleccionadas.push({ tipo: 'pais', pais: item.pais, image: item.imagePais });
            cartasSeleccionadas.push({ tipo: 'ciudad', ciudad: item.ciudad, image: item.imageCiudad });
        }
    }

    // Agregar cartas especiales
    for (let i = 0; i < 4; i++) {
        const especial = cartasEspeciales[Math.floor(Math.random() * cartasEspeciales.length)];
        cartasSeleccionadas.push({ tipo: 'especial', ...especial });
    }

    return cartasSeleccionadas;
}

// Barajar las cartas
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Inicializar cartas y tablero
let cartas = mezclarArray(generarCartasAleatorias(12));

function crearTablero() {
    tablero.innerHTML = '';
    cartas.forEach((carta, index) => {
        const tarjeta = document.createElement('button');
        tarjeta.classList.add('carta');
        tarjeta.id = `carta-${index}`;
        tarjeta.onclick = () => girar(index);
        tablero.appendChild(tarjeta);
    });
}

// Lógica para girar cartas
let primeraCarta = null;
let segundaCarta = null;

function resetEleccion() {
    primeraCarta = null;
    segundaCarta = null;
}

function girar(id) {
    const tarjeta = document.getElementById(`carta-${id}`);
    if (tarjeta.disabled || tarjeta.innerHTML !== '') return;

    // Mostrar la imagen de la carta
    tarjeta.innerHTML = `<img src="${cartas[id].image}" alt="">`;
    tarjeta.disabled = true;

    if (!primeraCarta) {
        // Guardar la primera carta seleccionada
        primeraCarta = { ...cartas[id], id };
    } else if (!segundaCarta) {
        // Guardar la segunda carta seleccionada
        segundaCarta = { ...cartas[id], id };

        if (primeraCarta.tipo === 'especial' || segundaCarta.tipo === 'especial') {
            // Manejar carta especial si una de las dos es especial
            manejarCartaEspecial(primeraCarta.tipo === 'especial' ? primeraCarta : segundaCarta);

            // Revertir el estado de la carta no especial (si existe)
            if (primeraCarta.tipo !== 'especial') {
                setTimeout(() => {
                    const tarjetaPrimera = document.getElementById(`carta-${primeraCarta.id}`);
                    tarjetaPrimera.innerHTML = '';
                    tarjetaPrimera.disabled = false;
                }, 1000);
            }

            if (segundaCarta.tipo !== 'especial') {
                setTimeout(() => {
                    const tarjetaSegunda = document.getElementById(`carta-${segundaCarta.id}`);
                    tarjetaSegunda.innerHTML = '';
                    tarjetaSegunda.disabled = false;
                }, 1000);
            }

            resetEleccion();
            return;
        }

        // Validar si el par coincide (país y ciudad)
        if (
            (primeraCarta.tipo === 'pais' && segundaCarta.tipo === 'ciudad' && primeraCarta.pais === segundaCarta.ciudad) ||
            (primeraCarta.tipo === 'ciudad' && segundaCarta.tipo === 'pais' && primeraCarta.ciudad === segundaCarta.pais)
        ) {
            pares++;
            puntuaje += 10;
            movimientos++;
            resetEleccion();
        } else {
            // Ocultar las cartas si no coinciden
            setTimeout(() => {
                document.getElementById(`carta-${primeraCarta.id}`).innerHTML = '';
                document.getElementById(`carta-${primeraCarta.id}`).disabled = false;
                document.getElementById(`carta-${segundaCarta.id}`).innerHTML = '';
                document.getElementById(`carta-${segundaCarta.id}`).disabled = false;
                resetEleccion();
            }, 1000);
        }
    }

    // Actualizar puntaje y movimientos
    mostrarPuntuaje.innerText = puntuaje;
    mostrarMovimientos.innerText = movimientos;

    // Validar si se ha ganado el juego
    if (pares === (cartas.length - 4) / 2) {
        setTimeout(() => alert('¡Has ganado!'), 500);
    }
}

// Temporizador
function iniciarTemporizador() {
    if (temporizador) return;

    temporizador = true;
    const intervalo = setInterval(() => {
        if (timer > 0) {
            timer--;
            mostrarTiempo.innerText = timer;
        } else {
            clearInterval(intervalo);
            alert('¡Se acabó el tiempo!');
            reiniciarJuego();
        }
    }, 1000);
}

// Reiniciar el juego
function reiniciarJuego() {
    temporizador = false;
    pares = 0;
    timer = timerInicial;
    puntuaje = 0;
    movimientos = 0;
    mostrarTiempo.innerText = timer;
    mostrarPuntuaje.innerText = puntuaje;
    mostrarMovimientos.innerText = movimientos;
    cartas = mezclarArray(generarCartasAleatorias(12));
    crearTablero();
}

// Manejar cartas especiales
function manejarCartaEspecial(carta) {
    switch (carta.tipo) {
        case 'joker':
            cartas = mezclarArray(cartas);
            crearTablero();
            alert('¡Cartas remezcladas!');
            break;
        case 'estrella':
            mostrarCartasPorTiempo(3000);
            break;
        // Más casos según el tipo de carta especial...
    }
}
// Manejar cartas especiales
function manejarCartaEspecial(carta) {
    switch (carta.tipo) {
        case 'joker':
            cartas = mezclarArray(cartas);
            crearTablero();
            alert('¡Cartas remezcladas!');
            break;
        case 'estrella':
            mostrarCartasPorTiempo(3000); // Muestra todas las cartas durante 3 segundos
            alert('¡Puedes ver las cartas por 3 segundos!');
            break;
        case 'bankDevil':
            puntuaje = Math.max(0, puntuaje - 3); // Resta 3 puntos, sin bajar de 0
            alert('¡El Bank Devil te ha quitado 3 puntos!');
            break;
        case 'peste':
            puntuaje = Math.max(0, puntuaje - 1); // Resta 1 punto, sin bajar de 0
            alert('¡La peste te ha quitado 1 punto!');
            break;
        case 'browser':
            timer = Math.max(0, timer - 20); // Resta 20 segundos, sin bajar de 0
            mostrarTiempo.innerText = timer;
            alert('¡El Browser ha restado 20 segundos de tu tiempo!');
            break;
        case 'minibrowser':
            timer = Math.max(0, timer - 10); // Resta 10 segundos, sin bajar de 0
            mostrarTiempo.innerText = timer;
            alert('¡El MiniBrowser ha restado 10 segundos de tu tiempo!');
            break;
        case 'flor':
            timer += 20; // Suma 20 segundos
            mostrarTiempo.innerText = timer;
            alert('¡La Flor ha sumado 20 segundos a tu tiempo!');
            break;
        case 'champiñon':
            timer += 10; // Suma 10 segundos
            mostrarTiempo.innerText = timer;
            alert('¡El Champiñón ha sumado 10 segundos a tu tiempo!');
            break;
        default:
            alert('Carta especial desconocida.');
            break;
    }

    mostrarPuntuaje.innerText = puntuaje;
}
function mostrarCartasPorTiempo(tiempo) {
    cartas.forEach((carta, index) => {
        const tarjeta = document.getElementById(`carta-${index}`);
        tarjeta.innerHTML = `<img src="${carta.image}" alt="">`;
    });

    setTimeout(() => {
        cartas.forEach((_, index) => {
            const tarjeta = document.getElementById(`carta-${index}`);
            if (!tarjeta.disabled) {
                tarjeta.innerHTML = ''; // Oculta las cartas después del tiempo
            }
        });
    }, tiempo);
}




// Iniciar el juego
crearTablero();
iniciarTemporizador();