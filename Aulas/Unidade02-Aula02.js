/*
01- Projeto da aula anterior
PRÓXIMA ATIVIDADE

Caso queira, você pode baixar aqui o projeto do curso no ponto em que paramos na aula anterior.
https://caelum-online-public.s3.amazonaws.com/1310-html5-css3-parte4/01/html-parte-4-aula-1-completa.zip

02 - FONTES EXTERNAS

Transcrição
Nesta aula passaremos por três vídeos para compreender como utilizar fontes externas para os textos, para o mapa e para vídeos. Primeiramente precisamos entender quais são as características de fontes preparadas para web: elas funcionam melhor em todos os navegadores, possuem comportamento parecido em todos os sistemas operacionais. Já uma fonte que não foi prepara para web não possui essas características, afinal seu foco é para materiais gráficos impressos.

Existem fontes públicas, fontes em que o código é aberto e podemos realizar modificações e as fontes proprietárias que são de algumas empresas ou marcas. Em nosso projeto, utilizaremos uma fonte aberta e pública.

Há diversos agregadores de fontes disponíveis na internet, e um deles é o Google Fonts. Encontraremos uma diversidade imensa de fontes e todas preparadas para web. Podemos fazer o download das fontes para o computador e aplicá-las em algum projeto gráfico no Photoshop, por exemplo, ou podemos utiliza-las na web diretamente.

No site da barbearia Alura, utilizaremos a fonte Montserrat, que pode facilmente ser achada no buscador do Google Fonts. Basta selecionarmos o ícone de "+" , e será aberta uma caixa de diálogo em que encontraremos instruções para a aplicação da fonte e seu código.

A forma mais simples de utilizar essa fonte é importar o CSS, e já aprednemos a realizar esse processo. Copiaremos o código disponibilizado no Google Fonts:

<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">COPIAR CÓDIGO
E então o copiaremos em para index.html:

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Barbearia Alura</title>
    <link rel="stylesheet" href="style-home.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
</head>COPIAR CÓDIGO
A fonte foi importada e não implementada no site. Precisamos ainda especificar no CSS que estamos utilizando aquela família de fonte. Queremos que todo o conteúdo textual do site utilize a fonte Montserrat, portanto na primeira linha em style.css criaremos uma declaração no body.

body {
    font-family: 'Montserrat', sans-serif;
}COPIAR CÓDIGO
Feito isso, ao recarregarmos o navegador, podemos ver a fonte aplicada em todos os conteúdos textuais do site. Essa é a forma mais simples de utilizarmos uma fonte externa.
*/