/*
04 - Trabalhando com mapas

Play Video
Transcrição
Já importamos a fonte para nosso site e conseguimos melhorar a apresentação. Nesta aula, trataremos da área do mapa, aquela que indica a localização da barbearia. Teremos mais um título e subtítulo e o conteúdo do Google Maps.

mapa

Em index.html, entre a parte de conteúdo principal e de benefícios, criaremos uma nova <section> e a classe mapa. Povoaremos essa nova sessão com o conteúdo textual com a classe titulo-principal e um parágrafo de texto.

            <section class="mapa">
                <h3 class="titulo-principal">"Nosso estabelecimento</h3>
                <p>Nosso estabelecimento está localizado no coração da cidade.</p>
            </section>COPIAR CÓDIGO
O espaçamento ainda não está adequado, mas por enquanto focaremos somente no HTML e posteriormente faremos os ajustes necessários na diagramação da página. Para incluir o mapa, faremos a importação do serviço de mapa do Google Maps. Pesquisaremos pelo endereço de "Alura sp". No menu sanfonado na parte esquerda da tala, escolheresmos a opção "Compartilhar ou incorporar mapa".

menu

Ao clicarmos na opção assinalada, teremos acesso a um link com a localização específica da Alura. Copiaremos esse link para usa-lo no código HTML que compõe nossa página, na nova sessão que acabamos de criar.

<section class="mapa">
    <h3 class="titulo-principal">"Nosso estabelecimento</h3>
    <p>Nosso estabelecimento está localizado no coração da cidade.</p>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.448598130907!2d-46.634653385542414!3d-23.588239368469353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f5ca62674!2sCaelum%20-%20Escola%20de%20Tecnologia!5e0!3m2!1spt-BR!2sbr!4v1580916426151!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>

</section>
COPIAR CÓDIGO
Ao recarregarmos o navegador, o mapa já estará visível na página. A tag <iframe> é específica para abrir "janelas" em nosso site, com proporções definidas e endereço da informação. Podemos fazer o msemo com outros serviços que apresentem essa possibilidade de compartilhamento de informações, como vídeos, fotos de Instagram, páginas de Facebook e outros. Os acessos externos que complementam a página são, geralmente, feitos pela tag <iframe>.

Precisaremos modificar o espaçamento entre os conteúdos. Primeiramente adaptaremos as dimensões do mapa no HTLM: with terá o valor de100% e height de 300. Feito isso, criaremos em style.css a sessão mapa que terá espaçamentos internos definidos. Queremos ainda que o parágrafo que está na sessão mapa tenha um espaçamento externo(margin) específico, e o centralizamos.

.mapa {
    padding: 3em 0;
}

.mapa p {
    margin: 0 0 2em;
    text-align: center;
}
*/