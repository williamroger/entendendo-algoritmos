# Entendendo Algoritmos
Repositório criado para registrar todo conteúdo estudado durante a leitura do livro "Entendendo algoritmos" de Adytia Y. Bhargava.

📚 Abaixo deixo registrado tudo o que aprendi sobre estruturas de dados durante a leitura deste livro sensacional! 

## 🧐 Pesquisa Binária
A pesquisa binária é um algoritmo que recebe como entrada uma lista ordenada de elementos e o elemento alvo da busca. Se o elemento alvo da busca estiver presente dentro da lista então a pesquisa binária retorna a sua posição dentro da lista, caso contrário a pesquisa binária retorna um valor nulo `null` ou `-1`. 

O funcionamento da pesquisa binária consiste em dividir ao meio a lista ordenada de elementos, pegar o elemento que está posicionado no meio da lista, então é feita uma comparação para verificar se o elemento do meio da lista é igual ao elemento alvo que está sendo buscado, se o elemento no meio da lista for igual ao elemento que está sendo buscado então o elemento alvo foi encontrado e basta apenas retornar a posição de onde o elemento foi encontrado dentro da lista, porém se não for igual então deverá ser feita outra verificação para saber se o elemento do meio da lista é maior ou menor que o elemento alvo que está sendo buscado.

Se o elemento do meio da lista for maior que elemento buscado então metade da lista (a partir do elemento do meio da lista até o final da lista) poderá ser descartada e uma nova busca deverá ser realizada repetindo todo o processo anterior.

Se o elemento do meio da lista for menor que elemento buscado então metade da lista (a partir do elemento do meio da lista até o início da lista) poderá ser descartada e uma nova busca deverá ser realizada repetindo todo o processo anterior.

Esse processo deverá ser repetido até que o elemento alvo seja encontrado, ou até que toda a lista tenha sido percorrida e caso o elemento alvo não tenha sido encontrado então a pesquisa binária deverá retornar valor um valor nulo.

Esse processo de dividir pela metade reduz drasticamente o número de elementos que precisamos verificar, tornando a busca binária muito eficiente. Pode parecer simples, mas é incrivelmente poderoso em listas grandes.

[Visualizar implementação](https://github.com/williamroger/entendendo-algoritmos/blob/main/pesquisaBinaria/index.js)

## 🔀 Ordenação por Seleção
A ordenação por seleção é um algoritmo utilizado para organizar listas de elementos desorganizadas em uma ordem específica, seja do menor para o maior, do maior para o menor ou em ordem alfabética. 
Esse algoritmo recebe como entrada uma lista desordenada e retornar uma nova lista ordenada de acordo com o tipo de ordem que se deseja aplicar para a lista.

Aplicando o algoritmo de Ordenação por Seleção para ordenar uma lista em ordem crescente (do menor para o maior).

A ordenação por seleção crescente é feita em algumas etapas, que consiste basicamente em percorrer a lista desordenada encontrar o índice de onde está posicionado o menor valor dessa lista e criar uma nova lista ordenada a partir dessa informação tranferindo os valores da lista desordenada para a nova lista ordenada.

[Visualizar implementação](https://github.com/williamroger/entendendo-algoritmos/blob/main/ordenacaoPorSelecao/index.js)

## 🔄 Recursão
Recursão é quando uma função chama a si mesma, até que uma condição seja verdadeira e a execução da função seja interrompida.

Toda função recursiva precisa informar quando a recursão deve parar de acontecer, caso contrário a função entrará em um loop infinito e isso faz com que tenhamos um sobrefluxo da pilha de chamada (call stack) mais conhecido como "stack overflow" que ocorre quando ficamos sem memória para manter os itens na pilha.

Uma função recursiva deve possuir em sua estrutura duas partes fundamentais: o caso-base e o caso recursivo.
- O caso recursivo é quando a função chama a si mesma.
- O caso base (também conhecido como condição base) é quando a função não chama a si mesma novamente, isso acontece quando uma condição dentro da função é verdadeira e a execução da função é interrompida, o que garante que a função não entrará em um loop infinito.

As funções recursivas utilizam a pilha de chamada (call stack) para armazenar valores de variáveis a cada chamada de função, literalmente ”empilhando” uma função em cima da outra, e removendo as funções sempre que a execução de uma função chega ao fim.

[Visualizar implementação](https://github.com/williamroger/entendendo-algoritmos/blob/main/recursao/index.js)