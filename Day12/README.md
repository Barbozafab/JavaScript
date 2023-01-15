# Day12 - Regular Expressions

* Criando um padrão
    * `new RegExp(patter, flag)`
    * `/pattern/flag`

* Métodos do objeto `RegExp`
    * `test()`
    * `match()`
    * `search()`
    * `replace()`

* Padrões
    * `[...]` Conjunto de caracteres
    * `\` Escape
    * `.` Qualquer caractere exceto `\n`
    * `^...$` Início e fim do padrão
    * `\b` Início ou fim de uma palavra
    * `[^...]` Exceto os caracteres dentro do conjunto
    * `*` Zero ou mais vezes
    * `+` Uma ou mais vezes
    * `?` Zero ou uma vez
    * `{x}` Exatamente `x` caracteres
    * `{x,}` Pelo menos `x` caracteres
    * `{x,y}` De `x` a `y` caracteres
    * `|` Ou
    * `(...)` Grupo de captura

## Regex Cheatsheet
![Regex Cheatsheet](/Day12/regex.png)
Créditos: [Asabeneh](https://github.com/Asabeneh)
