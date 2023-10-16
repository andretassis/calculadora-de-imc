const height = document.getElementById('height');
const weight = document.getElementById('weight');
const resultIMC = document.querySelector('.result__imc')
const resultFrase = document.getElementById('result_frase')

function calculaIMC() {
        
        //converte altura em cm para m 
        const heightConvert = height.value/100

        const imc = (weight.value / (heightConvert * heightConvert)).toFixed(1)
        resultIMC.textContent = imc

        if (imc < 18.4 || imc > 24.99) {
            resultFrase.textContent = "Seu IMC sugere que seu peso está incorreto para sua altura."
        } else {
            resultFrase.textContent = "Seu IMC sugere que seu peso está correto para sua altura."
        }
    
}

height.addEventListener('blur', function() {
    if (height.value ) {
        calculaIMC()
    }
})

weight.addEventListener('blur', function() {
    if (weight.value) {
        calculaIMC()
    }
})


