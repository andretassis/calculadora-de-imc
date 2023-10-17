const height = document.getElementById('height');
const weight = document.getElementById('weight');
const resultIMC = document.querySelector('.result__imc')
const resultFrase = document.getElementById('result_frase')
const resultPeso = document.getElementById('result_peso')


function calculaIMC() {
    const imcPesoMin = 18.6
    const imcPesoMax = 24.9
        
    //converte altura em cm para m 
    const heightConvert = height.value/100

    // calcula imc
    const imc = (weight.value / (heightConvert * heightConvert)).toFixed(1)
    resultIMC.textContent = imc

    // calcula peso min e max de acordo com a altura fornecida
    const pesoMin = Math.round(imcPesoMin * (heightConvert * heightConvert))
    const pesoMax = Math.round(imcPesoMax * (heightConvert * heightConvert))

    if (imc < 18.4 || imc > 24.99) {
        resultFrase.textContent = "Seu IMC sugere que seu peso está incorreto para sua altura."
        resultPeso.textContent = `Seu peso ideal é entre ${pesoMin} e ${pesoMax} quilos.`
    } else {
        resultFrase.textContent = "Seu IMC sugere que seu peso está correto para sua altura."
        resultPeso.textContent = ` `
    }
    
}

height.addEventListener('blur', function() {
    if (height.value <= 0) {
        const erro = document.getElementById('erroAltura')
        erro.classList.add("erro")
        erro.classList.remove("certo")
    } else {
        calculaIMC()
    }
})

weight.addEventListener('blur', function() {
    if (weight.value <= 0) {
        const erro = document.getElementById('erroPeso')
        erro.classList.add("erro")
        erro.classList.remove("certo")
    } else {
        calculaIMC()
    }
})


