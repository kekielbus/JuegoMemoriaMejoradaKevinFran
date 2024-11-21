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
    { pais: 'Polonia', ciudad: 'Varsovia' },
    { pais: 'España', ciudad: 'Madrid' },
    { pais: 'Rumania', ciudad: 'Bucarest' },
    { pais: 'Noruega', ciudad: 'Oslo' },
    { pais: 'Montenegro', ciudad: 'Podgorica' },
    { pais: 'Hungría', ciudad: 'Budapest' },
    { pais: 'Eslovenia', ciudad: 'Liubliana' },
    { pais: 'Italia', ciudad: 'Roma' },
    { tipo: 'joker' },
    { tipo: 'estrella' },
    { tipo: 'bankDevil' },
    { tipo: 'peste' }
];

// Duplicar y mezclar cartas
var cartas = mezclarArray([...paises_ciudades, ...paises_ciudades]);

function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Crear el tablero dinámico
cartas.forEach((carta, index) => {
    var tarjeta = document.createElement('button');
    tarjeta.classList.add('carta');
    tarjeta.id = index;
    tarjeta.onclick = () => girar(index);
    tablero.appendChild(tarjeta);
});

// Función para iniciar el temporizador
function contarTiempo() {
    mostrarTiempo.innerHTML = `Tiempo restante: ${timer} segundos`;
    tiempoRegresivo = setInterval(() => {
        timer--;
        mostrarTiempo.innerHTML = `Tiempo restante: ${timer} segundos`;
        if (timer < 0) {
            clearInterval(tiempoRegresivo);
            bloquearTarjetas();
            mostrarTiempo.innerHTML = "¡Tiempo terminado!";
        }
    }, 1000);
}

// Bloquear todas las tarjetas cuando el tiempo se acaba
function bloquearTarjetas() {
    cartas.forEach((carta, index) => {
        var tarjeta = document.getElementById(index);
        tarjeta.innerHTML = carta.tipo
            ? `<span>${carta.tipo.toUpperCase()}</span>`
            : `<img src="${carta.imagen}" alt="${carta.ciudad}">`;
        tarjeta.disabled = true;
    });
}

// Lógica para girar cartas
var primeraId, segundaId, primeraEleccion, segundaEleccion;
function girar(id) {
    if (temporizador === false) {
        contarTiempo();
        temporizador = true;
    }

    var tarjeta = document.getElementById(id);

    if (tarjeta.innerHTML !== '' || tarjeta.disabled) return; // Ignora si la carta ya está revelada.

    if (cartas[id].tipo) {
        // Cartas especiales
        ejecutarCartaEspecial(cartas[id].tipo);
        return;
    }

    tarjeta.innerHTML = `<img src="${cartas[id].imagen}" alt="${cartas[id].ciudad}">`;
    tarjeta.disabled = true;

    if (cartasDestapadas === 0) {
        primeraEleccion = cartas[id];
        primeraId = id;
        cartasDestapadas++;
    } else if (cartasDestapadas === 1) {
        segundaEleccion = cartas[id];
        segundaId = id;
        cartasDestapadas++;
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if (primeraEleccion.pais === segundaEleccion.pais) {
            // Las cartas coinciden
            pares++;
            puntuaje += 3; // +3 puntos por acierto.
            mostrarPuntuaje.innerHTML = `Puntuaje: ${puntuaje}`;
            cartasDestapadas = 0;

            if (pares === paises_ciudades.length / 2) {
                clearInterval(tiempoRegresivo);
                mostrarTiempo.innerHTML = `¡Fantástico! Lo lograste en ${timerInicial - timer} segundos.`;
            }
        } else {
            // Las cartas no coinciden
            setTimeout(() => {
                document.getElementById(primeraId).innerHTML = '';
                document.getElementById(segundaId).innerHTML = '';
                document.getElementById(primeraId).disabled = false;
                document.getElementById(segundaId).disabled = false;
                cartasDestapadas = 0;
            }, 1000);
        }
    }
}

// Ejecutar efectos de cartas especiales
function ejecutarCartaEspecial(tipo) {
    switch (tipo) {
        case 'joker':
            alert("¡Joker! Las cartas se reinician.");
            cartasDestapadas = 0;
            cartas.forEach((_, index) => {
                var tarjeta = document.getElementById(index);
                tarjeta.innerHTML = '';
                tarjeta.disabled = false;
            });
            break;

        case 'estrella':
            alert("¡Estrella! Todas las cartas se revelarán por 3 segundos.");
            cartas.forEach((carta, index) => {
                var tarjeta = document.getElementById(index);
                tarjeta.innerHTML = carta.tipo
                    ? `<span>${carta.tipo.toUpperCase()}</span>`
                    : `<img src="${carta.imagen}" alt="${carta.ciudad}">`;
            });
            setTimeout(() => {
                cartas.forEach((_, index) => {
                    var tarjeta = document.getElementById(index);
                    tarjeta.innerHTML = '';
                    tarjeta.disabled = false;
                });
            }, 3000);
            break;

        case 'bankDevil':
            alert("¡Bank Devil! Pierdes 3 puntos.");
            puntuaje = Math.max(0, puntuaje - 3); // No bajar de 0.
            mostrarPuntuaje.innerHTML = `Puntuaje: ${puntuaje}`;
            break;

        case 'peste':
            alert("¡Peste! Pierdes 1 punto.");
            puntuaje = Math.max(0, puntuaje - 1); // No bajar de 0.
            mostrarPuntuaje.innerHTML = `Puntuaje: ${puntuaje}`;
            break;

        default:
            console.error("Tipo de carta especial desconocido:", tipo);
    }
}
