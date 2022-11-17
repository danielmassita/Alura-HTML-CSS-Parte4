/*
05 - Medidas proporcionais
PRÓXIMA ATIVIDADE

Como usar as medidas proporcionais para deixar um elemento de 100% de largura com o equivalente a um terço do elemento pai, menos 10px? Selecione 2 alternativas.

A- width: calc( (100% / 3) - 10px )
Alternativa correta! Essa é uma forma mais complexa, não precisa dessa primeira conta!

B - width: calc( (100% / 3) )
Alternativa errada! Essa é uma forma um pouco completa de chegar a um terço do elemento, mas está faltando subtrair os 10px!

C - width: calc( 33% - 10px )
Alternativa correta! Essa é a forma mais direta!

06 - Consolidando o seu conhecimento
PRÓXIMA ATIVIDADE

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com a próxima aula.

07 - O que aprendemos?
PRÓXIMA ATIVIDADE

Nesta aula, aprendemos:

Seletores avançados CSS
Seletor >, para acessar os filhos de determinado elemento. Por exemplo, para acessar todos os p dentro de main:
main > p {
}COPIAR CÓDIGO
Seletor +, para acessar o primeiro irmão de determinado elemento. Por exemplo, para acessar o primeiro p após um img:
img + p {
}COPIAR CÓDIGO
Seletor ~, para acessar todos os irmãos de determinado elemento. Por exemplo, para acessar todos os p após um img:
img ~ p {
}COPIAR CÓDIGO
Seletor not, para acessar os elementos, exceto algum. Por exemplo, para acessar todos os p dentro de main, exceto o p que tem id missao:
main p:not(#missao) {
}COPIAR CÓDIGO
Como fazer contas com CSS, com a propriedade calc
*/