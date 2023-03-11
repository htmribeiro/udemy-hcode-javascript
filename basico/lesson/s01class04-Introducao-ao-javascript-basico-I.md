# Introdução ao JavaScript e Preparação do Ambiente

## 04 - Introdução ao JavaScript - Básico I  

#### console.log  

Exibe informações no console do Navegador  

#### F12  

Abrirá o código no console do Navegador  

#### Case Sensitive  

Letras MAIÚSCULAS e minúsculas diferem  

#### Script Incorporado  

Quando o arquivo Js está no mesmo arquivo HTML  

### Comentários  

Ignoram trechos de códigos  
**Comentário de bloco:**  

- É utilizado o símbolo -**```\**\```**  

**Comentário de linha:**  

- É utilizado o símbolo -**```\\```**  

### Variável  

Um espaço na memória que armazena valor  

#### var  

O comando utilizado para declarar variáveis no JavaScript  

#### let  

Este comando declara variáveis definindo o escopo de atuação  
Leva em conta o escopo em que foi definida, ou seja, aonde você declarou a variável  
Quando declaramos uma variável com **let** ela se torna uma ***variável mutável***, sendo assim, podemos reatribuir um novo valor a ela  

#### const  

Declara constantes  
O valor declarado nunca muda  
"***constante*** é constante e ***variável*** é variável"  

#### Function  

Função anônima que irá dentro de uma variável  e invocá-la por meio de uma variável  

### Tipo de dados  

#### Number  

Em JavaScript tanto inteiros como float são do mesmo tipo  

#### typeOf  

Comando para saber o tipo de dado de uma variável  

#### Boolean  

True or False  
No JavaScriptas variáveis são **Fracamente tipadas** tipo de dado variável  

#### parseInt, parseFloat  

Funções de conversáo *toString*  

### Objetos  

#### Array  

São variáveis com o mesmo nome e tipo  
Armazenando mais de um vetor  

### Operadores  

#### =  

**Operador de atribuição**  

#### ==

**Operador de comparação**  
Compara o valor de duas expressões

```
let a = 10;
const b = "10";
console.log(a == b);
//output > true 
```

Isso ocorre porque o operador (==) ignora o tipo de dado  

#### ===

Compara o valor e o tipo de dados  

#### !==

Compara se os valores e tipos são diferentes  

#### !=

Compara se os valores são diferentes  

#### &&

**Operador lógico AND**  

- Compara as duas condições que precisam ser verdadeiras para que a expressão seja validada como verdadeira  

#### ||

**Operador lógico OR**  

- Compara as duas condições, bastando apenas uma delas serem verdadeiras para que a expressão seja validada como verdadeira. A expressão somente será falsa se todas as condições comparadas forem falsas  

#### ++ ou +=

**Operador Incremental**  

- Utilizado em Loops para incrementar o valor de uma variável  

#### -- ou -=

**Operador Decremental**  

- Utilizado em Loops para decrementar o valor de uma variável  

### Controle de Fluxo

#### If(condição){instruções}

Uma condição If que for verdadeira **anulará** as demais condições else if ou else  

#### Switch

Estrutura de controle com opções pré-definidas  
Utilize sempre o comando **break** para interromper o bloco.  

### Laços de Repetição

#### For(valor inicial; valor final; incremento){Instruções}

**break**  

- Interrompe a execução do laço quando alcança a instrução desejada

**continue**  

- Similar ao break, porém ignora a instrução e vai para a próxima iteração

## Template String

### \` (crase)

#### Recurso incrível do ${ js }  

Recurso do js que permite pular linha numa string  
Permite inserção de comandos dentro de um texto
