/*
04
Adaptar uma página para celular
PRÓXIMA ATIVIDADE

Play Video
Transcrição
De maneira bem objetiva e dinâmica, adaptaremos nosso site para que ele se torne responsivo, ou seja, que se comporte de maneira adequada no desktop e em dispositivos móveis.

Primeiramente nos atentaremos para o cabeçalho, que possui 940px de altura. Se inserirmos uma altura automática, o posicionamento dos elementos que compõe a sessão se deforma, portanto essa não é uma boa saída para solucionar a questão. Em style.css mudaremos a altura da caixa para auto. Quando elaboramos layouts responsivos, precisamos trabalhar exclusivamente no elemento que será modificado.

Faremos o mesmo procedimento para principal, conteudo-beneficios, mapa-conteudo e video.

@media screen and (max-width: 480px) { 
    .caixa, .principal, .conteudo-beneficios, .mapa-conteudo, .video {
        width: auto;
    }
}COPIAR CÓDIGO
Precisaremos ainda fazer uma pequena alteração na classe video, e anterar o width para 100%, assim evitamos uma deformação no layout.

Feito isso, faremos as alterações necessárias no cabeçalho da página, e a primeira adaptação que faremos é centralizar o <h1> Em nosso CSS, escreveremos:

h1 {
    text-align: center;
}COPIAR CÓDIGO
Feito isso, queremos que o menu - que até o presente momento está em posição absoluta - volte a ser estático. Então em nosso CSS escreveremos:

nav {
    position:static;
}COPIAR CÓDIGO
Por fim, faremos alterações na lista de benefícios, de forma que a imagem e texto fiquem melhor posicionados.

.lista-beneficios, imagem-beneficios {
    width: 100%
}COPIAR CÓDIGO
Há ainda melhorias possíveis, como alteração de espaçamentos, um respiro do texto em relação à borda da página, e assim por diante. Contudo, a página está funcional para mobile!
*/