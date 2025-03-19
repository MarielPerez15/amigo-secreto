let amigos = [];
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); 
    if (nombre === "") {
        alert("Por favor ingresa un nombre.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre); 
    actualizarListaAmigos();
    input.value = ""; 
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para sortear.");
        return;
    }

    let asignaciones = {}; 
    let participantes = [...amigos]; 
    let sorteados = [...amigos];

    for (let i = 0; i < participantes.length; i++) {
        let amigo;
        do {
            amigo = sorteados[Math.floor(Math.random() * sorteados.length)];
        } while (amigo === participantes[i]); 

        asignaciones[participantes[i]] = amigo;
        sorteados = sorteados.filter((nombre) => nombre !== amigo);
    }

    mostrarResultado(asignaciones);
}

function mostrarResultado(asignaciones) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    for (const [participante, amigo] of Object.entries(asignaciones)) {
        const li = document.createElement("li");
        li.textContent = `${participante} → ${amigo}`;
        resultado.appendChild(li);
    }
}

