/*
05 - Não perdendo tempo com layouts responsivos
PRÓXIMA ATIVIDADE

Qual a principal tática para não perder muito tempo criando layouts responsivos?

A - Usar medidas proporcionais para tudo
Alternativa correta! É hoje a melhor forma de criar qualquer conteúdo.

B - Criar um layout fluido que se adapte sempre
Alternativa correta! É uma forma perfeita de evitar retrabalho.

C - Não pensar nos tamanhos de tela antes de começar
Alternativa errada! É um excelente primeiro passo já pensar nos tamanhos de tela antes de começar!

06
Consolidando o seu conhecimento
PRÓXIMA ATIVIDADE

Chegou a hora de você pôr em prática o que foi visto na aula. Para isso, execute os passos listados abaixo.

1) Na página index.html, dentro do head, adicione a tag meta viewport, logo abaixo da tag meta charset:

<meta name="viewport" content="width=device-width">COPIAR CÓDIGO
2) Altere o tamanho do vídeo, para não ser mais fixo e sim ocupar toda a largura da tela, com width="100%":

<iframe width="100%" height="315" src="https://www.youtube.com/embed/wcVVXUV0YUY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>COPIAR CÓDIGO
3) No arquivo style.css, adicione um estilo diferente para dispositivos de até 480 pixels de largura:

@media screen and (max-width: 480px) {
    .caixa, .principal, .conteudo-beneficios, .mapa-conteudo, .video {
        width: auto;
    }

    h1 {
        text-align: center;
    }

    nav {
        position: static;
    }

    .lista-beneficios, .imagem-beneficios {
        width: 100%;
    }
}COPIAR CÓDIGO

07
Projeto do curso
PRÓXIMA ATIVIDADE

Caso queira, você pode baixar aqui o projeto completo implementado neste curso.
https://caelum-online-public.s3.amazonaws.com/1310-html5-css3-parte4/06/html-parte-4-aula-6-completa.zip

08
O que aprendemos?
PRÓXIMA ATIVIDADE

Nesta aula, aprendemos:

Design responsivo: como ajustar o estilo da nossa página de acordo com o tamanho da tela do dispositivo que a acesse
Meta tag de Viewport
Media Queries

09
Conclusão
PRÓXIMA ATIVIDADE

Play Video
Transcrição
Parabéns! Você finalizou o quarto módulo do curso de HTML CSS. Desde o início, exploramos o conceito de tag até elaborar um site completo com três páginas, links externos, vídeos, mapa e navegação entre outas tags.

Conhecemos novidades do CSS e como utilizar seus recursos de maneira simples. Com o conteúdo aprendido neste curso, você já pode criar seu próprio site.

É muito importante que você pratique o conteúdo, ainda que seja para elaborar um site simples, um breve currículo que seja.

Aprendemos o básico, mas na plataforma da Alura existem diversos outros cursos que irão complementar seu conhecimento, como CSS Avançado, melhoria de performance, e diversos outros cursos na área de sites responsivos como Flex Box.

Não pare por aqui, continue estudando!

Até mais!

10
Próximos passos
PRÓXIMA ATIVIDADE

Play Video
Transcrição
O CEO da Alura tem uma mensagem para você.

É importante nesse momento organizar seus estudos e mostrar o que você aprendeu. Vai fazer você refletir, aprender mais e ainda te ajudar a criar um portfólio. Neste artigo do Natan tem mais informações: https://www.alura.com.br/artigos/organizando-estudos-portfolio-notion-linkedin
*/