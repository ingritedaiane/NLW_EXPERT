const perguntas = [
    {
        pergunta: "Qual é a função usada para imprimir algo no console?",
        respostas: [
            "console.print()",
            "console.log()",
            "console.display()"
        ],
        correta: 1
    },
    {
        pergunta: "Como se declara uma variável em JavaScript?",
        respostas: [
            "var myVar;",
            "let myVar;",
            "const myVar;"
        ],
        correta: 2
    },
    {
        pergunta: "Qual destas estruturas de controle é usada para executar um bloco de código repetidamente?",
        respostas: [
            "if-else",
            "for loop",
            "switch"
        ],
        correta: 1
    },
    {
        pergunta: "Qual função é usada para converter uma string em um número inteiro?",
        respostas: [
            "parseInt()",
            "stringToInt()",
            "toInteger()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual operador é usado para comparar igualdade sem levar em conta o tipo de dado?",
        respostas: [
            "==",
            "===",
            "!="
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'push()' faz em um array?",
        respostas: [
            "Remove um elemento do final do array",
            "Adiciona um elemento no final do array",
            "Inverte a ordem dos elementos do array"
        ],
        correta: 1
    },
    {
        pergunta: "Qual destes é um tipo de dado primitivo em JavaScript?",
        respostas: [
            "Array",
            "Object",
            "Boolean"
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array?",
        respostas: [
            "pop()",
            "shift()",
            "splice()"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'charAt()' faz em uma string?",
        respostas: [
            "Retorna o caractere na posição especificada",
            "Substitui um caractere por outro",
            "Concatena duas strings"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão '2 + '2' em JavaScript?",
        respostas: [
            "Erro",
            "22",
            "4"
        ],
        correta: 1
    }
];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')

  const button = document.querySelector('button')

  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  

  for (const item of perguntas) { // pra cada item de pergunta
    const quizItem = template.content.cloneNode(true) // cloneNode para clonar o nó, e para repetir todos adiciona true
    quizItem.querySelector('h3').textContent = item.pergunta //modifica a pergunta
  

    // laço para as respostas, "para cada resposta de item repostas"
    for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
    }
        quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove() 

     // colocar a pergunta na tela
    quiz.appendChild(quizItem) 
  }
     function finalizar() {
        document.getElementById("button").innerHTML = mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
        }

        function reload() {
            location.reload();
            
            }

    
