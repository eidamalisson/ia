const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado: "pergunta 1",
alternativas: ["alternativa1","alternativa2"]
},
{
enunciado: "pergunta2"
alternativa: ["alternativa1","altermativa2"]
}
]
let atual=0;
let perguntaatual;
let historiaFinal="";

function mostrapergunta(){
    if (atual>= perguntaatual.lenght){
        mostraResultado();
        return;
    }
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = PerguntaAtual.enunciado;
caixaAlternativas.textContent="";
textoResultado.textContent="";
mostraAlternativa();
}
function mostrapergunta{
for(const alternativa of perguntaatual.alternativa){

const botaoalternativa = document.createElement("button");
botaoalternativa.testcontent = alternativa.texto;
botaoalternativa.addEventListener("click",()=>respostaSelecionada(alternativa))
    atual++;
    mostrapergunta();
})
caixaAlternativas.appendChild(botaoalternativa);
  }
}

Function respostaSelecionada(opçaoSelecionada){
const afirmacao = opcaoSelecionada.afirmacao;
historiaFinal +afirmacao +" ";
atual++
}

function mostraResultado(){
caixaPerguntas.textContent = "conclusao...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent ="";


}


mostrapergunta();