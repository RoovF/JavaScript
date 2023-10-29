function validarIdade() {
    let inputValue = document.getElementById("idade").value;

    console.log("Idade:" + inputValue);

    if (inputValue <13) {
        console.log("Você é uma criança.");
    } else if (inputValue >=13 && inputValue <18) {
        console.log("Você é um adolescente.");
    }else{
        console.log("Você é um adulto.");
    }
}
