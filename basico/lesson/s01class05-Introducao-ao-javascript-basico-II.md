# Introdução ao JavaScript e Preparação do Ambiente

## 04 - Introdução ao JavaScript - Básico I  

### Função e Objeto

*Funções* são **Trechos de Códigos** que podem ser reutilizados  
As *Funções* executam algo e retornam algum valor  

#### return

Encerra a função e retorna um valor  

### Tipos de função

1. **Tipo Comum**
   * Podemos chamá-la quantas vezes quiser  

1. **Tipo Anônima**
   * Não tem nome e podemos executar um trecho em um determinado contexto

1. **Tipo Arrow function** *(ES6)*
   * Funções mais simples que permite que o nosso código não fique mais legível, mais estruturado e não tão isolado uma vez que os recursos e comportamentos do bloco escrito dentro da *arrow function* interagem com o bloco externo

#### Argumentos ou Args

Permitem acessar **Parâmetros** de uma função  

#### Callback

**Função de retorno** como parâmetro após uma ação  

#### DOM

**Document Object Model** a estrutura como o HTML é formado  

### Eventos (Event)

Ações realizadas na aplicação que dispara rotinas  

#### Window

Manipulamos a aplicação  
Nos possibilita acesso ao histórico do usuário, dar refresh na janela, mudar propriedades da janela  
Por exemplo:  

- *windows.open* para abrir uma nova janela  
- *windows.close* para fechar uma nova janela  
- *windows.focus* para dar foco em uma janela  
e devemos adicionar uma escuta (Listener) na janela com o comando **addEventListener**  

#### Date

**TimeStamp** - é o formato como a data é armazenada dentro do JavaScript e em muitas linguagens baseadas em C  
Quantidade de milisegundos desde 01/01/1970 até hoje  

```
let agora = new Date();
```  

- agora.getDate() // da classe agora, eu quero o dia  
- agora.getFullYear() // da classe agora, eu quero o ano  
- agora.getMonth() +1 // da classe agora, eu quero o mês, pelo fato da função se iniciar em zero, adicionamos +1 para trazer o mês corrente  
- agora.toLocaleDateString("pt-BR") // da classe agora, eu quero a data local

### Array

Variável indexada, cuja posição são os índices e os valores são as posições dentro dele  

#### ForEach

Laço para percorrer Array  

### Orientação a Objetos

#### Classes

Agrupam **Atributos e métodos** no mesmo lugar  
A ***Classe*** irá englobar todos os assuntos em comum  

- *Variáveis* passam a se chamarem **Atributos**
  - - ***Atributo*** é a informação que a classe armazena
- *Funções* passa a se chamarem **Métodos**
  - -   ***Método*** São as ações que essa classe deverá executar  

#### This

É um comando interno usado para referenciar um *atributo* ou um *método* dentro da mesma classe  

#### Instância (new)

É quando o objeto representa uma classe  

```Tips:``` **Quanto mais inteligente** for sua classe, mais limpo será seu código  
