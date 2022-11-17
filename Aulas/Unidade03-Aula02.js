/*
02 - Psuedo-Classes
Transcrição
No CSS temos algo chamado pseudo-elementos. Conhecemos alguns deles, como :hover, :active, :visited, :required. Tais recursos são utilizados para marcar melhor nossos elementos e gerar um comportamento mais interessante em nosso site.

Nesta aula,começaremos a tratar todo o CSS da sessão "Benefícios" com auxílio dos pseudo-elementos. Primeiramente alinharemos os elementos textuais e visuais, reorganizando as dimensões e espaçamentos.

desalinhado
Criaremos uma nova divisão por meio da <div> e a classe conteudo-beneficios, que abrangerá toda a lista e a imagem. A lista também terá uma nova classe chamada lista-beneficios. O mesmo se dará com a imagem, que terá a classe imagem-beneficios.


                <div class="conteudo-beneficios">
                    <ul class="lista-beneficios">
                        <li class="itens">Atendimento aos Clientes</li>
                        <li class="itens">Espaço diferenciado</li>
                        <li class="itens">Localização</li>
                        <li class="itens">Profissionais Qualificados</li>
                    </ul>

                    <img src="beneficios.jpg" class="imagembeneficios">
                </div>
COPIAR CÓDIGO
Em style.css, incluiremos conteudo-beneficios e configuraremos suas propriedades. O mesmo ser dará para lista-beneficios. Para ajustar a lista de for

.conteudo-beneficios {
    width: 640px;
    margin: 0 auto;
}

.lista-beneficios {
    width: 40%;
    display: inline-block
}
COPIAR CÓDIGO
Apesar das configurações, o texto e a imagem não estão um do lado do outro, como prevíamos.

ainda nao

O display quando configurado com inline-block, possui um detalhe que modifica o modo de exibição: ele interpreta no HTML todas as linhas do bloco de código, incluisive os espaços vazios entre a lista e a imagem. Portanto, quando utilizamos esse recurso, os elementos no HTML precisam estar colados, para que esse espaço não reflita na exibição da pagina.

                <div class="conteudo-beneficios">
                    <ul class="lista-beneficios">
                        <li class="itens">Atendimento aos Clientes</li>
                        <li class="itens">Espaço diferenciado</li>
                        <li class="itens">Localização</li>
                        <li class="itens">Profissionais Qualificados</li>
                    </ul><img src="beneficios.jpg" class="imagembeneficios">
                </div>
COPIAR CÓDIGO
Feito isso, configuraremos para que a nossa lista não fique alinhada pela parte inferior, mas sim pela parte superior, então no CSS de lista-beneficios escreveremos a propriedade vertical-align com o valor top.

.lista-beneficios {
    width: 40%;
    display: inline-block;
    vertical-align: top;
}COPIAR CÓDIGO
Criaremos uma margem maior entre a imagem e o vídeo ao inserir o valor de 2em auto em video

.video {
    width: 560px;
    margin: 2em auto;

}COPIAR CÓDIGO
Na sessão de "Benefícios", inseriremos um padding de 3em 0.

.beneficios {
    padding: 3em 0;
}COPIAR CÓDIGO
De acordo com o projeto final, ainda tempos ajustes a serem feitos. Precisamos incluir mais dois itens na lista de benefícios "pontualidade" e "limpeza", resta ainda negritar a primeira frase e inserir as estrelas que marcam os tópicos.

Primeiramente, inseriremos os itens ausentes no código HTML.

                <div class="conteudo-beneficios">
                    <ul class="lista-beneficios">
                        <li class="itens">Atendimento aos Clientes</li>
                        <li class="itens">Espaço diferenciado</li>
                        <li class="itens">Localização</li>
                        <li class="itens">Profissionais Qualificados</li>
                        <li class="itens">Pontualidade</li>
                        <li class="itens">Limpeza</li>
                    </ul><img src="beneficios.jpg" class="imagembeneficios">
                </div>
COPIAR CÓDIGO
Incluiremos a classe itens em style.css. Feito isso, adicionaremos a propriedade line-height para definir o espaçamento entre as linhas, proporcional ao tamanho das fontes. Neste caso colocaermos o tamanho da fonte, mais 50%.

.itens {
    line-height: 1.5;
}COPIAR CÓDIGO
A próxima etapa é negritar o primeiro item da lista. Antigamente, a única possibilidade de realizar esse tipo de operação era criar classes específicas para uma alteração que deveria ser no CSS. Hoje em dia com as atualizações e melhorias do CSS, temos os já mencionados pseudo-elementos.

itens: first-child {
    font-weight: bold;
}COPIAR CÓDIGO
Para seleção de elementos específicos temos três opções: a primeira delas é utilizar uma classe pseudo-elemento first-child. Temos seis itens que são irmãos nos itens da lista, e as alteração serão feitas no primeiro item. Escreveremos que o peso da fonte será em negrito.

itens: first-child {
    font-weight: bold;
}COPIAR CÓDIGO
Dessa maneira, o primeiro item estará em negrito ao carregarmos o navegador. Dessa maneira criamos, via CSS, uma marcação. Além do first-child, temos a opção last-child que marcará o último item da lista. Isso é interessante, porque não precisaremos mais saber quantos itens existem na lista para passar configurações precisas, essa caracaterística é muito útil em manipulação de tabelas, por exemplo.

Por fim, temos a possibilidade de selecionar qualquer elemento da lista por via do nth-child(), que receberá o número que quisermos, como por exemplo 4, que se refere ao quarto elemento da lista. Podemos ainda utilizar valores como 2n com o nth-child(), o que quer dizer marcamos todos os elementos pares da lista, isto é, o segundo, quarto e sexto elemento da lista ficam em negrito.
*/