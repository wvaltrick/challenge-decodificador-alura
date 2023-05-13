document.getElementById("txt").value = ""   //limpa a caixa de texto a cada refresh 
document.getElementById("mensagem").value = ""  //limpa a caixa de texto da mensagem criptografada a cada refresh
let botao = document.querySelector('.btn-copiar')

function encriptar() {      //ativada a clicar no botão Criptografar
    let texto = document.getElementById("txt").value;
    let tituloMsg = document.getElementById("titulo");
    let paragrafo = document.getElementById("paragrafo");
    let imagemBoneco = document.getElementById("img-boneco");
    
    let textoNormalizado = texto.normalize("NFD")
    let textoSemAcentos = textoNormalizado.replace(/[\u0300-\u036f]/g, "") //remove os acentos caso o usuário digite
    let textoCifrado = textoSemAcentos    //procura no texto as letras indicadas e substitui pela palavra indicada utilizando expressões regulares
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")

    if (texto.length != 0) {    //verificar se há texto digitado na caixa, caso haja faz o processo de criptografia
        document.getElementById("mensagem").value = textoCifrado.toLowerCase()  //coloca o texto em minúsculo, caso o usuário digitel alguma letra em maiúsculo
        botao.style.setProperty('display', 'inline')    //insere o botão copiar
        mensagem.style.setProperty('display', 'block')  //insere a caixa de texto após clicar em um dos botões cripto/descripto
        tituloMsg.textContent = ""      //apaga texto Nenhuma msg encontrada
        paragrafo.textContent = ""      //apaga o digite um texto que vc deseja
        document.getElementById("txt").value = ""   //limpa a caixa de texto
        imagemBoneco.remove()   //remove a imagem do boneco

    } else {        //caso não houver texto emite um alerta
        alert ("Digite algum texto para criptografar ou descriptografar.")
    }
}

function desencriptar() {           //ativada a clicar no botão descriptografar
    let texto = document.getElementById("txt").value;
    let tituloMsg = document.getElementById("titulo");
    let paragrafo = document.getElementById("paragrafo");
    let imagemBoneco = document.getElementById("img-boneco");
    
    let textoNormalizado = texto.normalize("NFD")
    let textoSemAcentos = textoNormalizado.replace(/[\u0300-\u036f]/g, "")  //remove os acentos caso o usuário digite
    let textoCifrado = textoSemAcentos        //procura no texto as palavras indicadas e substitui pela letra indicada
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")

    if (texto.length != 0) {        //verificar se há texto digitado na caixa, caso haja faz o processo de descriptografia
        mensagem.style.setProperty('display', 'block')
        document.getElementById("mensagem").value = textoCifrado.toLowerCase() //coloca o texto em minúsculo, caso o usuário digitel alguma letra em maiúsculo
        tituloMsg.textContent = ""
        paragrafo.textContent = ""
        imagemBoneco.remove()
        botao.style.setProperty('display', 'inline')
        
    } else {            //caso não houver texto emite um alerta
        alert ("Digite algum texto para criptografar ou descriptografar.")
    }
}

document.getElementById('btn-copiar').addEventListener('click', function(ev){   //botão copiar para o clipboard
    let button = ev.currentTarget
    const textoCopiado = document.getElementById("mensagem")    //seleciona o texto da caixa mensagem
    if (button.innerText === 'Copiar'){         
        button.innerText = 'Copiado'       //muda o texto do botão para copiado, indicando que o texto foi copiado com sucesso
        window.navigator.clipboard.writeText(textoCopiado.value)    //copia o texto da caixa mensagem
    } else {
        button.innerText = 'Copiar'
    }
})