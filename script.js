const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPerguntas = document.querySelector("caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");
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

function mostrapergunta(){
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = PerguntaAtual.enunciado;
}
mostrapergunta();