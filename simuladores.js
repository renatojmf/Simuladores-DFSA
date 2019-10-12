var etiquetas_iniciais;
var slots_iniciais;
var num_Slots = [];

function getInput(){
   etiquetas_iniciais = parseFloat(document.getElementById('etiquetas').value);
   slots_iniciais = parseFloat(document.getElementById('slots').value);
   calculations();
}

function lowerBound(colisoes){
    let novoSlot = 2 * colisoes;
    return novoSlot;
}

function eom_Lee(colisoes){
    let novoSlot = 2.38 * colisoes;
    return novoSlot;
}

function calculations(){
    let etiquetas = etiquetas_iniciais;
    let slots = slots_iniciais;
    let quadro = new Array(slots);

    while(etiquetas > 0){
        quadro = new Array(slots);

        //inicializando array
        for(let i = 0; i < quadro.length; i++){
            quadro[i] = 0;
        }

        //randomizador pra determinar etiquetas e slots
        for(let i = 0; i < etiquetas; i++){
            random = Math.floor(Math.random() * (slots + 1)); 
            let temp = random % slots;
            quadro[temp]+= 1;
        }

        let sucesso = 0;
        let colisao = 0;
        let vazio = 0;

        //checar a quantidade de slots vazios, sucesso e em colisão que ocorreram
        for(let i = 0; i < slots; i++){
            if(quadro[i] == 0){
                vazio++;
            } else if(quadro[i] == 1){
                sucesso++;
            } else if(quadro[i] > 1){
                colisao++;
            }
        }

        console.log("colisoes: " + colisao);
        etiquetas = etiquetas - sucesso;
        slots = lowerBound(colisao);
        console.log("slots: " + slots);
        num_Slots.push(slots);
    }

    for(let i = 0; i < num_Slots.length ; i++){
        console.log(num_Slots[i]);
    }
    //document.getElementById('result').innerHTML = slots;
}