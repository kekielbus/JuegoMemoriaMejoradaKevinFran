// Variables del juego
var temporizador = false;
var cartasDestapadas = 0;
var pares = 0;
var timerInicial = 360;
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
    { pais: 'Polonia', imagePais: '/Imagenes/Paises/polonia.jpg', ciudad: 'Varsovia', imageCiudad: '/Imagenes/Paises/varsovia.jpg' },
    { pais: 'Belgica', imagePais: '/Imagenes/Paises/belgica.jpg', ciudad: 'Bruselas', imageCiudad: '/Imagenes/Paises/bruselas.jpg' },
    { pais: 'Rumania', imagePais: '/Imagenes/Paises/rumania.jpg', ciudad: 'Bucarest', imageCiudad: '/Imagenes/Paises/bucarest.jpg' },
    { pais: 'China', imagePais: '/Imagenes/Paises/china.jpg', ciudad: 'Pekin', imageCiudad: '/Imagenes/Paises/pekin.jpg' },
    { pais: 'Australia', imagePais: '/Imagenes/Paises/australia.jpg', ciudad: 'Canberra', imageCiudad: '/Imagenes/Paises/canberra.jpg' },
    { pais: 'Hungría', imagePais: '/Imagenes/Paises/hungria.jpg', ciudad: 'Budapest', imageCiudad: '/Imagenes/Paises/budapest.jpg' },
    { pais: 'Bolivia', imagePais: '/Imagenes/Paises/bolivia.jpg', ciudad: 'La paz', imageCiudad: '/Imagenes/Paises/lapaz.jpg' },
    { pais: 'Albania', imagePais: '/Imagenes/Paises/albania.jpg', ciudad: 'Tirana', imageCiudad: '/Imagenes/Paises/tirana.jpg' },
    { pais: 'Argentina', imagePais: '/Imagenes/Paises/argentina.jpg', ciudad: 'Buenos aires', imageCiudad: '/Imagenes/Paises/buenosaires.jpg' },
    { pais: 'Brasil', imagePais: '/Imagenes/Paises/brasil.jpg', ciudad: 'Brasilia', imageCiudad: '/Imagenes/Paises/brasilia.jpg' },
    { pais: 'Cabo verde', imagePais: '/Imagenes/Paises/caboverde.jpg', ciudad: 'Praia', imageCiudad: '/Imagenes/Paises/praia.jpg' },
    { pais: 'Serbia', imagePais: '/Imagenes/Paises/serbia.jpg', ciudad: 'Belgrado', imageCiudad: '/Imagenes/Paises/belgrado.jpg' },
    { pais: 'Francia', imagePais: '/Imagenes/Paises/francia.jpg', ciudad: 'Paris', imageCiudad: '/Imagenes/Paises/paris.jpg' },
    { pais: 'India', imagePais: '/Imagenes/Paises/india.jpg', ciudad: 'Nueva Delhi', imageCiudad: '/Imagenes/Paises/nuevadelhi.jpg' },
    { pais: 'Singapur', imagePais: '/Imagenes/Paises/singapur.jpg', ciudad: 'Singapur', imageCiudad: '/Imagenes/Paises/singapuur.jpg' },
    { pais: 'Vietham', imagePais: '/Imagenes/Paises/vietham.jpg', ciudad: 'Hanoi', imageCiudad: '/Imagenes/Paises/hanoi.jpg' },
    { pais: 'Lituania', imagePais: '/Imagenes/Paises/lituania.jpg', ciudad: 'Vilna', imageCiudad: '/Imagenes/Paises/vilna.jpg' },
    { pais: 'Ghana', imagePais: '/Imagenes/Paises/ghana.jpg', ciudad: 'Acra', imageCiudad: '/Imagenes/Paises/acra.jpg' },
    { pais: 'Granada', imagePais: '/Imagenes/Paises/granada.jpg', ciudad: 'Saint George', imageCiudad: '/Imagenes/Paises/saintgeorge.jpg' },
    { pais: 'Niger', imagePais: '/Imagenes/Paises/niger.jpg', ciudad: 'Niamey', imageCiudad: '/Imagenes/Paises/niamey.jpg' },
    { pais: 'Nigeria', imagePais: '/Imagenes/Paises/nigeria.jpg', ciudad: 'Abuya', imageCiudad: '/Imagenes/Paises/abuya.jpg' },
    { pais: 'Nicaragua', imagePais: '/Imagenes/Paises/nicaragua.jpg', ciudad: 'Managua', imageCiudad: '/Imagenes/Paises/managua.jpg' },
    { pais: 'Nueva Zelanda', imagePais: '/Imagenes/Paises/nuevazelanda.jpg', ciudad: 'Wellington', imageCiudad: '/Imagenes/Paises/wellington.jpg' },
    { pais: 'Panama', imagePais: '/Imagenes/Paises/panama.jpg', ciudad: 'Panamá', imageCiudad: '/Imagenes/Paises/panamá.jpg' },
    { pais: 'Somalia', imagePais: '/Imagenes/Paises/somalia.jpg', ciudad: 'Mogadisicio', imageCiudad: '/Imagenes/Paises/mogadisicio.jpg' },
    { pais: 'Sri lanka', imagePais: '/Imagenes/Paises/srilanka.jpg', ciudad: 'Colombo', imageCiudad: '/Imagenes/Paises/colombo.jpg' },
    { pais: 'Uruguay', imagePais: '/Imagenes/Paises/uruguay.jpg', ciudad: 'Montevideo', imageCiudad: '/Imagenes/Paises/montevideo.jpg' },
    { pais: 'Togo', imagePais: '/Imagenes/Paises/togo.jpg', ciudad: 'Lome', imageCiudad: '/Imagenes/Paises/lome.jpg' },
    { pais: 'Kuwait', imagePais: '/Imagenes/Paises/kuwait.jpg', ciudad: 'Kuwait', imageCiudad: '/Imagenes/Paises/kuwait1.jpg' },
    { pais: 'Mongolia', imagePais: '/Imagenes/Paises/mongolia.jpg', ciudad: 'Ulan Bator', imageCiudad: '/Imagenes/Paises/ulanbator.jpg' },
    { pais: 'Tailandia', imagePais: '/Imagenes/Paises/tailandia.jpg', ciudad: 'Bangrok', imageCiudad: '/Imagenes/Paises/bangrok.jpg' },
    { pais: 'Kenia', imagePais: '/Imagenes/Paises/kenia.jpg', ciudad: 'Nairobi', imageCiudad: '/Imagenes/Paises/nairobi.jpg' },
    { pais: 'Laos', imagePais: '/Imagenes/Paises/laos.jpg', ciudad: 'Vientian', imageCiudad: '/Imagenes/Paises/vientian.jpg' },
    { pais: 'Liberia', imagePais: '/Imagenes/Paises/liberia.jpg', ciudad: 'Monrovia', imageCiudad: '/Imagenes/Paises/monrovia.jpg' },
    { pais: 'Malta', imagePais: '/Imagenes/Paises/malta.jpg', ciudad: 'La valeta', imageCiudad: '/Imagenes/Paises/lavaleta.jpg' },
    { pais: 'Honduras', imagePais: '/Imagenes/Paises/honduras.jpg', ciudad: 'Tegucigalpa', imageCiudad: '/Imagenes/Paises/tegucigalpa.jpg' },
    { pais: 'Mozambique', imagePais: '/Imagenes/Paises/mozambique.jpg', ciudad: 'Maputo', imageCiudad: '/Imagenes/Paises/maputo.jpg' },
    { pais: 'Mexico', imagePais: '/Imagenes/Paises/mexico.jpg', ciudad: 'Ciudad de méxico', imageCiudad: '/Imagenes/Paises/ciudaddeméxico.jpg' },
    { pais: 'Arabia Saudita', imagePais: '/Imagenes/Paises/arabiasaudita.jpg', ciudad: 'Riad', imageCiudad: '/Imagenes/Paises/riad.jpg' },
    { pais: 'Fiyi', imagePais: '/Imagenes/Paises/fiyi.jpg', ciudad: 'Suva', imageCiudad: '/Imagenes/Paises/suva.jpg' },
    { pais: 'Palaos', imagePais: '/Imagenes/Paises/palaos.jpg', ciudad: 'Ngerulmud', imageCiudad: '/Imagenes/Paises/ngerulmud.jpg' }
];

var cartasEspeciales = [
    { tipo: 'joker', imageEspecial: '/Imagenes/CartasEspeciales/joker.jpg' },
    { tipo: 'estrella', imageEspecial: '/Imagenes/CartasEspeciales/estrella.jpg' },
    { tipo: 'bankDevil', imageEspecial: '/Imagenes/CartasEspeciales/bankdevil.jpg' },
    { tipo: 'peste', imageEspecial: '/Imagenes/CartasEspeciales/peste.jpg' },
    { tipo: 'browser', imageEspecial: '/Imagenes/CartasEspeciales/browser.jpg' },
    { tipo: 'minibrowser', imageEspecial: '/Imagenes/CartasEspeciales/minibrowser.jpg' },
    { tipo: 'flor', imageEspecial: '/Imagenes/CartasEspeciales/flor.jpg' },
    { tipo: 'champiñon', imageEspecial: '/Imagenes/CartasEspeciales/champiñon.jpg' }
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
        cartaDiv.innerHTML = `<img src="/Imagenes/Trasera/detrasMundo.jpg" alt="Carta volteada">`;
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
        puntuaje += 20; // Puntuar 3 puntos por par correcto
        mostrarPuntuaje.innerHTML = `Puntuaje: ${puntuaje}`;

        verificarFinJuego();
        
        // Restablecer la carta seleccionada
        cartaSeleccionada = null;

        // Desbloquear la selección de cartas
        bloqueada = false;
    } else {
        // No son un par, voltear las cartas de vuelta después de un retraso
        setTimeout(() => {
            cartaSeleccionada.cartaDiv.innerHTML = `<img src="/Imagenes/Trasera/detrasMundo.jpg" alt="Carta volteada">`;
            segundaCartaDiv.innerHTML = `<img src="/Imagenes/Trasera/detrasMundo.jpg" alt="Carta volteada">`;
            cartaSeleccionada.cartaDiv.classList.remove('destapada');
            segundaCartaDiv.classList.remove('destapada');

            // Restablecer la carta seleccionada
            cartaSeleccionada = null;

            // Desbloquear la selección de cartas
            bloqueada = false;
        }, 1000);
    }

    
}

function verificarFinJuego() {
    if (pares === 12) { // Suponiendo que el juego termina al encontrar 12 pares correctos
        clearInterval(temporizador); // Detener el temporizador
        alert('¡Felicidades, has completado el juego!');
        
        // Ocultar tablero
        tablero.style.display = 'none';
        mostrarOpcionesFinalizar()
        // Mostrar opciones finales
        document.getElementById('ocpionesFinalizar').style.display = 'block';
    }

    if (timer <= 0) { // Si el tiempo se acaba
        clearInterval(temporizador); // Detener el temporizador
        alert('¡El tiempo ha terminado!');
        
        // Ocultar tablero
        tablero.style.display = 'none';
        
        // Mostrar opciones finales
        document.getElementById('ocpionesFinalizar').style.display = 'block';
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
                    carta.innerHTML = `<img src="/Imagenes/Trasera/detrasMundo.jpg" alt="Carta volteada">`;
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
            mostrarTiempo.innerText = `Tiempo: ${timer}s`; // Actualizar el tiempo en el DOM
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
            clearInterval(temporizador); // Detener el temporizador cuando llegue a 0
            // Ocultar el tablero y mostrar las opciones finales
            tablero.style.display = 'none';
            mostrarOpcionesFinalizar();
        }
    }, 1000);
}

// Función para mostrar las opciones al finalizar el juego
function mostrarOpcionesFinalizar() {
    // Ocultar el tablero del juego
    const tablero = document.getElementById('tablero'); // Asegúrate de que este ID coincida con el del tablero
    tablero.style.display = 'none';

    // Mostrar las opciones finales
    const opcionesDiv = document.getElementById('opcionesFinalizar');
    opcionesDiv.style.display = 'block'; // Asegúrate de que el contenedor de opciones exista en el HTML
}

// Función para ocultar las opciones al reiniciar el juego
function ocultarOpciones() {
    const tablero = document.getElementById('tablero'); // Asegúrate de que este ID coincida con el del tablero
    tablero.style.display = 'block';

    const opcionesDiv = document.getElementById('opcionesFinalizar');
    opcionesDiv.style.display = 'none';
}

// Función para guardar la puntuación en el ranking
function guardarPuntuacionEnRanking() {
    const aliasJugador = localStorage.getItem('alias');
    if (aliasJugador) {
        const puntuacion = obtenerPuntuacion(); // Asegúrate de que esta función devuelva la puntuación correcta.
        const tiempo = mostrarTiempo ? mostrarTiempo.innerText : '00:00'; // Verifica que 'mostrarTiempo' esté definido.
        const dificultad = localStorage.getItem('dificultad') || 'Alta'; // Obtén la dificultad guardada en localStorage.
        
        const ranking = JSON.parse(localStorage.getItem('ranking')) || [];

        console.log('Alias: ', aliasJugador);
        console.log('Puntuación: ', puntuacion);
        console.log('Tiempo: ', tiempo);
        console.log('Dificultad: ', dificultad);

        // Agregar al ranking
        ranking.push({ alias: aliasJugador, kfPoints: puntuacion, tiempo: tiempo, dificultad: dificultad });

        // Ordenar el ranking por puntuación de mayor a menor
        ranking.sort((a, b) => b.kfPoints - a.kfPoints);

        // Guardar el ranking actualizado en localStorage
        localStorage.setItem('ranking', JSON.stringify(ranking));

        alert('¡Puntuación guardada exitosamente en el ranking!');

        // Redirigir al ranking
        redirigirRanking();
    } else {
        alert('No se encontró el nombre del jugador. Por favor, inicia sesión primero.');
        redirigirJuegoNiveles();
    }
}

function obtenerPuntuacion(){
    return puntuaje;
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

// Obtener referencia al botón de reiniciar
const botonReiniciar = document.getElementById('reiniciar');

// Función para manejar el reinicio
function manejarReiniciar() {
    location.reload(); // Recargar la página
}

// Añadir un event listener al botón de reiniciar
botonReiniciar.addEventListener('click', manejarReiniciar);

// Llamar a esta función para reiniciar el juego, por ejemplo, con un botón:

botonReiniciar = document.getElementById('reiniciar');
botonReiniciar.addEventListener('click', reiniciarJuego);

// Iniciar el juego
cartas = generarCartasAleatorias();
crearTablero();