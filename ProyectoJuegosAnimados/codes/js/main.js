// Variables del juego
var temporizador = false;
var cartasDestapadas = 0;
var pares = 0;
var timerInicial = 90;
var timer = timerInicial;
var puntuaje = 0;
var movimientos = 0;
var cartas = [];


// Referencias del DOM
const mostrarTiempo = document.getElementById('restante');
const mostrarPuntuaje = document.getElementById('puntuaje');
const mostrarMovimientos = document.getElementById('movimientos');
const tablero = document.getElementById('tablero');
// Pares de países y ciudades con cartas especiales
const paises_ciudades = [
    
    
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
    { pais: 'Sri lanka', imagePais: './CARTAS_PAISES/PAISES/srilanka.jpg', ciudad: 'Colombo', imageCiudad: './CARTAS_PAISES/PAISES/colombo.jpg' },
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
    { pais: 'Palaos', imagePais: './CARTAS_PAISES/PAISES/palaos.jpg', ciudad: 'Ngerulmud', imageCiudad: './CARTAS_PAISES/PAISES/ngerulmud.jpg' }


   
];
var cartasEspeciales = [
    { tipo: 'joker', imageEspecial: './CARTAS_PAISES/CARTAS_ESPECIALES/joker.jpg' },
    { tipo: 'estrella', imageEspecial: './CARTAS_PAISES/CARTAS_ESPECIALES/estrella.jpg' },
    { tipo: 'bankDevil', imageEspecial: './CARTAS_PAISES/CARTAS_ESPECIALES/bankdevil.jpg' },
    { tipo: 'peste', imageEspecial: './CARTAS_PAISES/CARTAS_ESPECIALES/peste.jpg' },
    { tipo: 'browser', imageEspecial: './CARTAS_PAISES/CARTAS_ESPECIALES/browser.jpg' },
    { tipo: 'minibrowser', imageEspecial: './CARTAS_PAISES/CARTAS_ESPECIALES/minibrowser.jpg' },
    { tipo: 'flor', imageEspecial: './CARTAS_PAISES/CARTAS_ESPECIALES/flor.jpg' },
    { tipo: 'champiñon', imageEspecial: './CARTAS_PAISES/CARTAS_ESPECIALES/champiñon.jpg' }
];

// Función para generar las cartas aleatorias
function generarCartasAleatorias() {
    const cartasSeleccionadas = [];
    const indicesUsados = new Set();

    // Seleccionar 12 pares únicos de países/ciudades
    while (cartasSeleccionadas.length < 12 * 2) {
        const index = Math.floor(Math.random() * paises_ciudades.length);
        if (!indicesUsados.has(index)) {
            indicesUsados.add(index);
            const item = paises_ciudades[index];
            cartasSeleccionadas.push({ tipo: 'pais', pais: item.pais, image: item.imagePais });
            cartasSeleccionadas.push({ tipo: 'ciudad', ciudad: item.ciudad, image: item.imageCiudad });
        }
    }

    // Agregar 4 cartas especiales
    for (let i = 0; i < 4; i++) {
        const especial = cartasEspeciales[Math.floor(Math.random() * cartasEspeciales.length)];
        cartasSeleccionadas.push({ tipo: 'especial', especial: especial.tipo, image: especial.imageEspecial });
    }

    // Mezclar las cartas y devolverlas
    return mezclarArray(cartasSeleccionadas);
}

// Función para mezclar el array
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar los elementos
    }
    return array;
}

// Función para crear el tablero de cartas
function crearTablero() {
    tablero.innerHTML = ''; // Limpiar el tablero
    cartas.forEach((carta, index) => {
        const cartaDiv = document.createElement('div');
        cartaDiv.classList.add('carta');
        cartaDiv.setAttribute('id', `carta-${index}`);
        cartaDiv.addEventListener('click', () => manejarSeleccionCarta(carta, cartaDiv));

        // Mostrar la carta volteada por defecto
        cartaDiv.innerHTML = `<img src="./CARTA_TRASERA/cartavolteada.jpg" alt="Carta volteada">`;
        tablero.appendChild(cartaDiv);
    });
    iniciarTemporizador(); // Aseguramos que el temporizador se inicie cuando se crea el tablero
}

// Inicializar las cartas y el tablero
cartas = generarCartasAleatorias(); // Generar cartas aleatorias
crearTablero(); // Crear el tablero


let cartaSeleccionada = null; // Variable para la primera carta seleccionada
let bloqueada = false; // Bloquear la selección de cartas mientras se comparan


// Función para manejar la selección de cartas
function manejarSeleccionCarta(carta, cartaDiv) {
    // No hacer nada si la carta ya está destapada o si hay un proceso de comparación en curso
    if (cartaDiv.classList.contains('destapada') || bloqueada) {
        return;
    }

    // Voltear la carta
    cartaDiv.innerHTML = `<img src="${carta.image}" alt="${carta.tipo}">`;
    cartaDiv.classList.add('destapada');
    cartasDestapadas++;

    // Si la carta es especial, manejarla de inmediato
    if (carta.tipo === 'especial') {
        manejarCartaEspecial(carta);
        return;
    }

    // Si no hay ninguna carta seleccionada, guardar la primera carta seleccionada
    if (cartaSeleccionada === null) {
        cartaSeleccionada = { cartaDiv, carta };
        return;
    }

    // Si ya hay una carta seleccionada, proceder con la segunda
    let segundaCartaDiv = cartaDiv;
    let segundaCarta = carta;

    // Contabilizar el movimiento
    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

    // Bloquear la selección de nuevas cartas mientras se comparan
    bloqueada = true;

    // Verificar si son un par correcto
    const esParCorrecto = (
        (cartaSeleccionada.carta.tipo === 'pais' && segundaCarta.tipo === 'ciudad' &&
            paises_ciudades.some(
                (pair) => pair.pais === cartaSeleccionada.carta.pais && pair.ciudad === segundaCarta.ciudad
            )) ||
        (cartaSeleccionada.carta.tipo === 'ciudad' && segundaCarta.tipo === 'pais' &&
            paises_ciudades.some(
                (pair) => pair.ciudad === cartaSeleccionada.carta.ciudad && pair.pais === segundaCarta.pais
            ))
    );

    if (esParCorrecto) {
        // Son un par correcto
        pares++;
        puntuaje += 3; // Puntuar 3 puntos por par correcto
        mostrarPuntuaje.innerHTML = `Puntuaje: ${puntuaje}`;

        // Restablecer la carta seleccionada
        cartaSeleccionada = null;

        // Desbloquear la selección de cartas
        bloqueada = false;
    } else {
        // No son un par, voltear las cartas de vuelta después de un retraso
        setTimeout(() => {
            cartaSeleccionada.cartaDiv.innerHTML = `<img src="./CARTA_TRASERA/cartavolteada.jpg" alt="Carta volteada">`;
            segundaCartaDiv.innerHTML = `<img src="./CARTA_TRASERA/cartavolteada.jpg" alt="Carta volteada">`;
            cartaSeleccionada.cartaDiv.classList.remove('destapada');
            segundaCartaDiv.classList.remove('destapada');

            // Restablecer la carta seleccionada
            cartaSeleccionada = null;

            // Desbloquear la selección de cartas
            bloqueada = false;
        }, 1000);
    }

    
}


function verificarParCorrecto(primera, segunda) {
    return (
        (primera.tipo === 'pais' && segunda.tipo === 'ciudad' &&
            paises_ciudades.some(pair => pair.pais === primera.pais && pair.ciudad === segunda.ciudad)) ||
        (primera.tipo === 'ciudad' && segunda.tipo === 'pais' &&
            paises_ciudades.some(pair => pair.ciudad === primera.ciudad && pair.pais === segunda.pais))
    );
}

// Función para manejar cartas especiales
function manejarCartaEspecial(carta) {
    switch (carta.especial) {
        case 'joker':
            alert('¡Carta Joker! Se reinicia el tablero.');
            cartas = generarCartasAleatorias(); // Generar un nuevo conjunto de cartas
            crearTablero();
            clearInterval(temporizador); // Detener el temporizador
            timer = timerInicial; // Restablecer el tiempo
            mostrarTiempo.innerText = `Tiempo: ${timer}s`; // Actualizar el tiempo en el DOM
            iniciarTemporizador(); // Iniciar el temporizador de nuevo
            break;
        case 'estrella':
            alert('¡Carta Estrella! Todas las cartas serán visibles durante 3 segundos.');

            // Seleccionar todas las cartas que están en el tablero
            let todasLasCartas = document.querySelectorAll('.carta');

            // Voltear todas las cartas (hacerlas visibles)
            todasLasCartas.forEach(carta => {
                // Voltear la carta mostrando su imagen correspondiente
                const cartaId = carta.id.replace('carta-', ''); // Obtener el id de la carta
                const cartaData = cartas[cartaId]; // Obtener los datos de la carta desde el arreglo
                carta.innerHTML = `<img src="${cartaData.image}" alt="${cartaData.tipo}">`; // Voltear la carta
                carta.classList.add('visible'); // Agregar la clase visible para indicar que la carta está volteada
            });

            // Después de 3 segundos, ocultar todas las cartas nuevamente
            setTimeout(() => {
                todasLasCartas.forEach(carta => {
                    // Volver a poner la carta volteada
                    carta.innerHTML = `<img src="./CARTA_TRASERA/cartavolteada.jpg" alt="Carta volteada">`;
                    carta.classList.remove('visible'); // Eliminar la clase visible
                });
            }, 3000); // 3 segundos
            break;
        case 'bankDevil':
            alert('¡Carta Bank Devil! Pierdes 10 puntos.');
            puntuaje -= 10;
            mostrarPuntuaje.innerHTML = `Puntuaje: ${puntuaje}`;
            break;
        case 'peste':
            alert('¡Carta Peste! Pierdes 5 puntos.');
            puntuaje -= 5;
            mostrarPuntuaje.innerHTML = `Puntuaje: ${puntuaje}`;
            break;
        case 'champiñon':
            timer += 10; // Suma 10 segundos
            mostrarTiempo.innerText = timer;
            alert('¡El Champiñón ha sumado 10 segundos a tu tiempo!');
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
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Restablecer las variables
    cartasDestapadas = 0;
    pares = 0;
    puntuaje = 0;
    movimientos = 0;
    timer = timerInicial;
    mostrarPuntuaje.innerHTML = `Puntuaje: ${puntuaje}`;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
    mostrarTiempo.innerText = `Tiempo: ${timer}s`;
    cartas = generarCartasAleatorias(); // Generar nuevas cartas aleatorias
    crearTablero(); // Crear el nuevo tablero
    ocultarOpciones(); // Ocultar las opciones de finalizar juego
}

// Función para iniciar el temporizador
function iniciarTemporizador() {
    mostrarTiempo.innerText = `Tiempo: ${timer}s`;
    temporizador = setInterval(() => {
        if (timer > 0) {
            timer--;
            mostrarTiempo.innerText = `Tiempo: ${timer}s`;
        } else {
            clearInterval(temporizador);
            mostrarOpcionesFinalizar(); // Mostrar las opciones al finalizar
        }
    }, 1000);
}

// Función para mostrar las opciones al finalizar el juego
function mostrarOpcionesFinalizar() {
    // Mostrar tres botones al finalizar el tiempo
    const opcionesDiv = document.getElementById('opcionesFinalizar');
    opcionesDiv.style.display = 'block';
}

// Función para ocultar las opciones al reiniciar el juego
function ocultarOpciones() {
    const opcionesDiv = document.getElementById('opcionesFinalizar');
    opcionesDiv.style.display = 'none';
}

// Función para guardar la puntuación en el ranking
function guardarPuntuacionEnRanking() {
    const aliasJugador = localStorage.getItem('alias');
    if (aliasJugador) {
        const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
        ranking.push({ alias: aliasJugador, puntuacion: puntuaje, tiempo: mostrarTiempo.innerText, dificultad: 'Alta' }); // Aquí puedes cambiar 'Alta' por la dificultad seleccionada
        ranking.sort((a, b) => b.puntuacion - a.puntuacion); // Ordenar de mayor a menor
        localStorage.setItem('ranking', JSON.stringify(ranking));
        alert('¡Puntuación guardada exitosamente en el ranking!');
    } else {
        alert('No se encontró el nombre del jugador. Por favor, inicia sesión primero.');
        window.location.href = 'formulario.html'; // Ajusta la ruta si es necesario
    }
}

// Función para redirigir al ranking
function redirigirRanking() {
    window.location.href = 'ranking.html'; // Redirigir al ranking
}

// Función para redirigir al juego de niveles
function redirigirJuegoNiveles() {
    window.location.href = 'formulario.html'; // Redirigir al formulario o a otro archivo de niveles
}

// Función para reiniciar el juego al final
function reiniciarJuegoFinal() {
    reiniciarJuego(); // Llamamos a la función de reinicio del juego
}



// Llamar a esta función para reiniciar el juego, por ejemplo, con un botón:
const botonReiniciar = document.getElementById('reiniciar');
botonReiniciar.addEventListener('click', reiniciarJuego);

// Iniciar el juego
cartas = generarCartasAleatorias();
crearTablero();