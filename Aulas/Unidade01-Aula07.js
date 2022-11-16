/*
Transcrição
A imagem utensilios.jpg pode ser baixada aqui.

Para terminar o bloco de conteúdo "Sobre a Barbearia Alura" no estilo que queremos, precisaremos incluir a imagem de utensílios de barbearia no canto esquerdo da tela. Primeiramente inseriremos a imagem utensilios.jpg em index.html, e corresponde a classe utensilios. Um ponto importante é o alt da imagem, isto é, o texto alternativo que descreve de maneira sucinta o conteúdo visual expresso na imagem. Esse recurso é utilizado caso a imagem não seja carregada ou para pessoas que utilizam leitores de tela.

<section class="principal">
                <h2 class="titulo-principal">Sobre a Barbearia Alura</h2>

                <img class="utensilios" src="utensilios.jpg" alt="Utensílios de um barbeiro." />

                <p>Localizada no coração da cidade a <strong>Barbearia Alura</strong> traz para o mercado o que há de melhor para o seu cabelo e barba. Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.</p>

                <p id="missao"><em>Nossa missão é: <strong>"Proporcionar auto-estima e qualidade de vida aos clientes"</strong>.</em></p>

                <p>Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.</p>
</section>
COPIAR CÓDIGO
Ao carregarmos o navegador, a imagem já estará disponível no site, mas ainda precisamos regular seu tamanho em style.css:

.utensilios {
    width: 120px;
}
COPIAR CÓDIGO
O próximo passo é fazer com que o texto englobe essa imagem. Conhecemos algumas formas de tratar esses elementos, a primeira é utilizar o display do elemento para inline-block, e então todos os parágrafos seguirão o mesmo modo. Neste caso específico esta abordagem não funcionará, pois o display altera o comportamento do elemento padrão, e neste caso queremos que a imagem ocupando uma área específica e que o texto ocupe a largura inteira da página, mas que ceda espaço para a imagem.

Estudamos também o posicionamento(position) relativo, que coleta o ponto inicial e a partir disso faz deslocamentos. Aprendemos ainda sobre o posicionamento absoluto, em que podemos deslocar o ponto inicial para qualquer lugar. Neste caso, a imagem ficará por cima do texto, descolada da apresentação. Em suma, trabalhar com position não resolverá nossos problemas.

Temos, ainda, mais uma forma de posicionar e tratar elementos: o float, em tradução livre "flutuação". Quando utilizamos este recurso,o elemento "descola" da página mas o que seria a sua sombra, continua sendo ocupada virtualmente, isto é, o texto respeita esse espaço ocupado.

Para fazermos nossa imagem "flutuar" acessaremos style.css e definiremos em utensilios qual é o lado que desejamos que a flutuação ocorra, neste caso, left.

.utensilios {
    width: 150px;
    float: left;
}COPIAR CÓDIGO
Feita essa alteração, os parágrafos começam a se alinhar de acordo com a imagem. Contudo, o elemento está posiconado na extrema esquerda da tela, e o texto se inicia na mesma linha e o título "Benefícios" também foi desalinhado. O float é um recurso que altera completamente a estrutura da página, todos os elementos abaixo do float passam a ser afetados por ele. Podemos criar uma "barreira" que delimitará seu alcance na página.

De volta a style.css em titulo-principal, adicionaremos a propriedade clear que "limpa" o float que está posicionado à esquerda.

.titulo-principal {
    text-align: center;
    font-size: 2em;
    margin: 0 0 1em;
    clear: left;
}
COPIAR CÓDIGO
Conseguimos delimitar a ação do float, mas o texto continua muito junto à imagem. Em utensilios, adicionaremos uma margem de 20px para a direita, 20px para baixo e 0 para a esquerda.

.utensilios {
    width: 150px;
    float: left;
    margin: 0 20px 20px 0;
}COPIAR CÓDIGO
Feito isso, a imagem está corretamente posicionada, e a margem entre ela e o texto também foi implementada.
*/