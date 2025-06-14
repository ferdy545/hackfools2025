let lista = document.getElementsByClassName("tarefa");
let pontos = 0;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function adicionarTarefa(text="", eh_tarefa_inicial=false) {
    const ul = document.getElementById('ultarefas');
    const input = document.getElementById('novaTarefa');
    let texto = text;
    //console.log(texto);
    if(text===""){
        texto = input.value.trim();
        input.value = '';
    }

    if (texto === '') {
        mostrarPopup('Digite uma tarefa!');
        return;
    }
    
    const id = texto.toLowerCase().replace(/\s+/g, '-');
    
    const li = document.createElement('li');
    li.className = `tarefa`;

    const futureTime = new Date();
    futureTime.setSeconds(futureTime.getSeconds() + 30);
    const hoursnovo = futureTime.getHours().toString().padStart(2, '0');
    const minutesnovo = futureTime.getMinutes().toString().padStart(2, '0');
    const secondsnovo = futureTime.getSeconds().toString().padStart(2, '0');
    const timestamp = `${hoursnovo}:${minutesnovo}:${secondsnovo}`;
    
    if (eh_tarefa_inicial == false) {
        li.innerHTML = `
        <input type="checkbox" id="${id}-${timestamp}"><label for="${id}-${timestamp}">${texto} às ${timestamp}</label>
        `;
    } else {
        li.innerHTML = `
        <input type="checkbox" id="${id}-${timestamp}"><label for="${id}-${timestamp}">${texto}</label>
        `;
    }

    // Remover item da lista ao clicar na checkbox
    li.onclick = async function () {
        tocarsomPato();
        await delay(20);
        this.firstElementChild.disabled = true;
        pontos += 1;
        document.getElementById('score').innerHTML = pontos;
        await delay(1500); // espera 1,5 segundo
        this.remove();
        mostrarPopupDeParabensAutomatico("Parabéns por fazer o óbvio!!")
    };

    ul.appendChild(li);
}

function tarefasIniciais() {
    adicionarTarefa("Acordar às 06:00:00", true);
    adicionarTarefa("Almoçar às 12:00:00", true);
}

async function loopR() {
  while (true) {
    //if(respiradas.length < 10){
        adicionarTarefa("Respirar", false);
        await delay(18000); // Espera 8 segundo antes de repetir
    //}
  }
}
async function loopP() {
  while (true) {
    adicionarTarefa("Piscar o olho", false);
    await delay(8000); // Espera 8 segundo antes de repetir
  }
}

tarefasIniciais();
loopR();
loopP();

function formatarHorario(date) {
    let horas = date.getHours().toString().padStart(2, '0');
    let minutos = date.getMinutes().toString().padStart(2, '0');
    let segundos = date.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
}

function atualizarHorario() {
    let agora = new Date();
    document.title = formatarHorario(agora); 
    document.getElementById('conteudo-movel').innerHTML = `<p>${formatarHorario(agora)}</p>`;
}

setInterval(atualizarHorario, 1000);

function tocarsomPato() {
    const somPatoElement = document.getElementById('somPato');
    if (somPatoElement) {
        somPatoElement.play();
        somPatoElement.currentTime = 0;
    } else {
        console.warn("Elemento de áudio com ID 'somPato' não encontrado");
    }
}

function compareTimestamps() {
    const currentTimestamp = formatarHorario(new Date()); // Get the current time in HH:MM:SS format
    const listItems = document.querySelectorAll('#ultarefas li'); // Select all list items inside #ultarefas

    listItems.forEach(item => {
        const timestampId = item.id; // Get timestamp from the id (HH:MM:SS format)
        
        // Compare current time with timestampId (both are strings)
        if (currentTimestamp >= timestampId) {
           // alert('você se esqueceu de completar uma tarefa');
           // setTimeout(item.removee(){
           // }, 1000);
        }
    });
}


// Call the function every second to compare timestamps
setInterval(compareTimestamps, 1000);


