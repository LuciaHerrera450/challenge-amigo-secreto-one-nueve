// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre === '') {
        alert('Por favor, inserte un nombre')
        return;
    }

    amigos.push(nombre);
    limpiarCaja();
    mostrarAmigos();

}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    let i = 0;
    while (i < amigos.length){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
        i = i +1;
    }
   
}

function sortearAmigo(){
    if (amigos.length ===0) {
        alert('No hay amigos para sortear');
        return;
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    resultado.innerHTML = 'El amigo secreto es: '+ amigoSeleccionado;


}

function limpiarCaja(){
    document.getElementById('amigo').value = ''; 
    document.getElementById('amigo').focus();
}