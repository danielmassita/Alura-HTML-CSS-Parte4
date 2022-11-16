/*
Transcrição
Começaremos a trabalhar para que a página inicial possua um aspecto melhor, mais condizente com a página de produtos. Ao acessarmos produtos.html, copiaremos o reset.csse style.css para index.html.

<link rel="stylesheet" href="reset.css">
<link rel="stylesheet" href="style.css">COPIAR CÓDIGO
Com a inserção desse código, as margens da página ficam maiores e os elementos ficam desorganizados, mas trata-se apenas de uma fase do processo e não o resultado final.

O cabeçalho da página inicial é diferente do que temos na página de produtos, portanto copiaremos o cabeçalho de proutos.html e inseriremos em index.html.

<header>
            <div class="caixa">
                <h1><img src="logo.png"></h1>

                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="produtos.html">Produtos</a></li>
                        <li><a href="contato.html">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>COPIAR CÓDIGO
A página inicial também não possui rodapé, então novamente coletaremos o código de rodapé da página de produto, que deverá ser inserido entes da última <div> em index.html.

<footer>
            <img src="logo-branco.png">
            <p class="copyright">&copy; Copyright Barbearia Alura - 2019</p>
</footer>COPIAR CÓDIGO
Feito isso, precisamos melhorar a marcação que fizemos na página inicial, que estava muito simples. Sabemos que todo conteúdo precisa ser muito bem dividido e marcado, e para delimitar o conteúdo principal precisamos da tag <main>, semelhante a que temos na página de produto. Dito isso, envolveremos todas as informações principais nesta tag.

<img id="banner" src="banner.jpg">

<main>
            <div class="principal">
                <h2 class="titulo-centralizado">Sobre a Barbearia Alura</h2>

                <p>Localizada no coração da cidade a <strong>Barbearia Alura</strong> traz para o mercado o que há de melhor para o seu cabelo e barba. Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.</p>

                <p id="missao"><em>Nossa missão é: <strong>"Proporcionar auto-estima e qualidade de vida aos clientes"</strong>.</em></p>

                <p>Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.</p>
            </div>

            <div class="beneficios">
                <h3 class="titulo-centralizado">Benefícios</h3>

                <ul>
                    <li class="itens">Atendimento aos Clientes</li>
                    <li class="itens">Espaço diferenciado</li>
                    <li class="itens">Localização</li>
                    <li class="itens">Profissionais Qualificados</li>
                </ul>

                <img src="beneficios.jpg" class="imagembeneficios">
            </div>
</main>COPIAR CÓDIGO
A imagem não foi inclusa dentro da tag, pois ela não faz parte do conteúdo principal, trata-se apenas de uma imagem de exibição e que deve estar em destaque e ocupar toda a extensão da tela no sentindo horizontal.

Em nosso site, temos uma descrição com o título "Sobre a Barbearia Alura". Trata-de se informações que são fechadas em si mesmas, como uma sessão. Em nosso código esse conteúdo está sendo envolvido por uma <div>, mas para casos assim utilizamos a tag <section>.

<section class="principal">
                <h2 class="titulo-centralizado">Sobre a Barbearia Alura</h2>

                <p>Localizada no coração da cidade a <strong>Barbearia Alura</strong> traz para o mercado o que há de melhor para o seu cabelo e barba. Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.</p>

                <p id="missao"><em>Nossa missão é: <strong>"Proporcionar auto-estima e qualidade de vida aos clientes"</strong>.</em></p>

                <p>Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.</p>
</section>COPIAR CÓDIGO
A diferença entre <div> e <section> é que no primeiro caso, trata-se apenas de uma divisão visual. Já no caso da <section> teremos uma divisão por conteúdo complexo, semanticamente homogêneo.

Na parte de benefícios, também possuímos conteúdos fechados em si, neste caso também substituiremos a <div> por <section>.

<section class="beneficios">
                <h3 class="titulo-centralizado">Benefícios</h3>

                <ul>
                    <li class="itens">Atendimento aos Clientes</li>
                    <li class="itens">Espaço diferenciado</li>
                    <li class="itens">Localização</li>
                    <li class="itens">Profissionais Qualificados</li>
                </ul>

                <img src="beneficios.jpg" class="imagembeneficios">
            </section>COPIAR CÓDIGO
Ao retornarmos para o navegador, perceberemos as sessões centralizadas, mas ainda resta fazermos ajustes nas imagens, lista de benefícios assim por diante. Faremos esse processo passo a passo, elemento por elemento, de forma que possamos revisar conteúdos que já conhecemos, assim como evoluirmos o projeto.

Teremos que em alguns pontos reescrever o que já foi feito, pois isso é rotineiro para quem trabalha com desenvolvimento, afinal sempre há implementações novas e atualizações. Sempre será necessário melhorar nossos conteúdos, refatorar códigos, realizar manutenções e reparos.
*/