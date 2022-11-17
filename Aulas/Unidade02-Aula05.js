/*
05
Importando vídeo
PRÓXIMA ATIVIDADE

Play Video
Transcrição
Para finalizar o conteúdo e a importação dos elementos, lidaremos com o vídeo do site. Novamente abriremos uma "janela" de conteúdo em nosso site por meio da tag <iframe>. O vídeo que utilizaremos é proveniente da plataforma YouTube, mas poderia ser de qualquer outra.

Entraremos diretamente no YouTube, e logo abaixo do vídeo que queremos inserir no site, teremos a opção "Compartilhar".

youtube

Na caixa de diálogo que surgirá após clicarmos na opção assinalada, clicaremos sobre a alternativa "incorporar". Feito isso, teremos o código HTML correspondente envolto pela tag <iframe>.

Inseriremos o código em index.html, logo abaixo da imagem de "benefícios".

<section class="beneficios">
                <h3 class="titulo-principal">Benefícios</h3>

                <ul>
                    <li class="itens">Atendimento aos Clientes</li>
                    <li class="itens">Espaço diferenciado</li>
                    <li class="itens">Localização</li>
                    <li class="itens">Profissionais Qualificados</li>
                </ul>

                <img src="beneficios.jpg" class="imagembeneficios">

                <iframe width="560" height="315" src="https://www.youtube.com/embed/wcVVXUV0YUY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>COPIAR CÓDIGO
Ao recarregarmos o navegador, o vídeo já estará disponível na página, mas ainda precisamos centralizá-lo. A melhor maneira de centralizarmos o vídeo é criar uma <div> que envolverá todo o <iframe>, isto é, será a mãe desse conteúdo e terá a classe video. Feito isso, em style.css ajustaremos a largura e a margem, de forma que o vídeo esteja centralizado na tela.


.video {
    width: 560px;
    margin: 1em auto;
}COPIAR CÓDIGO
Ainda precisamos melhorar os espaçamentos e alguns outros detalhes, mas a importação do vídeo em si é bastante simples.
*/