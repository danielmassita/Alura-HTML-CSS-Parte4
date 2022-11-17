/*
06
Consolidando o seu conhecimento
PRÓXIMA ATIVIDADE

Chegou a hora de você pôr em prática o que foi visto na aula. Para isso, execute os passos listados abaixo.

1) Na página index.html, como último elemento do head, importe o CSS da fonte Montserrat:

<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">COPIAR CÓDIGO
2) Agora, entre a section principal e a section beneficios, crie a section mapa, incorporando o mapa com a localização da Barbearia Alura:

<section class="mapa">
    <h3 class="titulo-principal">Nosso estabelecimento</h3>
    <p>Nosso estabelecimento está localizado no coração da cidade.</p>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4483278365396!2d-46.63466568562861!3d-23.588249068469487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f5ca62674!2sCaelum!5e0!3m2!1spt-BR!2sbr!4v1568814489656!5m2!1spt-BR!2sbr" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
</section>COPIAR CÓDIGO
3) Dentro da section beneficios, após a imagem beneficios.jpg, incorpore um vídeo de exemplo da Barbearia Alura:

<div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/wcVVXUV0YUY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>COPIAR CÓDIGO
4) No arquivo style.css, na primeira linha, estilize todo o body para utilizar a fonte importada no primeiro passo:

body {
    font-family: 'Montserrat', sans-serif;
}COPIAR CÓDIGO
5) Por fim, ajuste os espaçamentos e os estilos do mapa e do vídeo:

.mapa {
    padding: 3em 0;
}

.mapa p {
    margin: 0 0 2em;
    text-align: center;
}

.video {
    width: 560px;
    margin: 1em auto;
}COPIAR CÓDIGO

07
O que aprendemos?
PRÓXIMA ATIVIDADE

Nesta aula, aprendemos:

A utilizar fontes externas nas nossas páginas
Como incorporar um mapa à nossa página
Como incorporar um vídeo à nossa páginas
*/