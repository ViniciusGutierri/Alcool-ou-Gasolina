function calcular(event) {
    event.preventDefault();

    let valAlcool = document.getElementById("alcool").value;
    let valGas = document.getElementById("gas").value;
    let resultCalc = document.getElementById("result__calc");
    let txtResult = document.getElementById("txt__result");
    let alcoolResult = document.getElementById("alcool__result");
    let gasResult = document.getElementById("gas__result");

    let calc = (valAlcool / valGas);


    if(calc < 0.7) {
        txtResult.innerHTML = "Compensa usar Álcool";
        alcoolResult.innerHTML = "Álcool: R$" + valAlcool;
        gasResult.innerHTML = "Gasolina: R$" + valGas;
    
    } else {
        txtResult.innerHTML = "Compensa usar Gasolina";
        alcoolResult.innerHTML = "Álcool: R$" + valAlcool;
        gasResult.innerHTML = "Gasolina: R$" + valGas;
    }

    resultCalc.classList.remove("hide");
}