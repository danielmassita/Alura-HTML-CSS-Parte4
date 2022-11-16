/*
09
Consolidando o seu conhecimento
PRÓXIMA ATIVIDADE

Chegou a hora de você pôr em prática o que foi visto na aula. Para isso, execute os passos listados abaixo.

1) Caso você não tenha feito o treinamento anterior ou não tenha mais o projeto, e ainda não o baixou, faça o seu download aqui.

2) Na página index.html, remova a importação do CSS style-home.css e importe os CSSs reset.css e style.css no seu lugar:

<link rel="stylesheet" href="reset.css">
<link rel="stylesheet" href="style.css">COPIAR CÓDIGO
3) Ainda na página index.html, remova o seu cabeçalho (tag <header> e o seu conteúdo) e utilize o mesmo cabeçalho da página produto.html:

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
4) Adicione também um rodapé na página index.html, o mesmo da página produtos.html. Antes de fechar o body (tag </body>), acrescente:

<footer>
    <img src="logo-branco.png">
    <p class="copyright">&copy; Copyright Barbearia Alura - 2019</p>
</footer>COPIAR CÓDIGO
5) Modifique o atributo id da imagem banner.jpg para passar a ser class:

<img class="banner" src="banner.jpg">COPIAR CÓDIGO
6) Agora, substitua as duas divs com as classes principal e beneficios por duas sections:

<section class="principal">
    <!-- Conteúdo da section ocultado -->
</section>

<section class="beneficios">
    <!-- Conteúdo da section ocultado -->
</section>COPIAR CÓDIGO
7) Modifique as classes titulo-centralizado para passar a ser titulo-principal:

<section class="principal">
    <h2 class="titulo-principal">Sobre a Barbearia Alura</h2>
    <!-- Restante do conteúdo da section ocultado -->
</section>

<section class="beneficios">
    <h3 class="titulo-principal">Benefícios</h3>
    <!-- Restante do conteúdo da section ocultado -->
</section>COPIAR CÓDIGO
8) Abaixo do título Sobre a Barbearia Alura, adicione a imagem utensilios.jpg:

<section class="principal">
    <h2 class="titulo-principal">Sobre a Barbearia Alura</h2>

    <img class="utensilios" src="utensilios.jpg" alt="Utensilios de um barbeiro.">
    <!-- Restante do conteúdo da section ocultado -->
</section>COPIAR CÓDIGO
9) Por fim, envolva as duas sections em uma tag main:

<main>
    <section class="principal">
        <!-- Conteúdo da section ocultado -->
    </section>

    <section class="beneficios">
        <!-- Conteúdo da section ocultado -->
    </section>
</main>COPIAR CÓDIGO
10) No arquivo style.css, adicione os estilos da página inicial:

// css da página inicial 
.banner {
    width:100%;
}

.titulo-principal {
    text-align: center;
    font-size: 2em;
    margin: 0 0 1em;
    clear: left;
}

.principal p {
    margin: 0 0 1em;
}

.principal strong {
    font-weight: bold;
}

.principal em {
    font-style: italic;
}

.utensilios {
    width: 120px;
    float: left;
    margin: 0 20px 20px 0;
}

.imagembeneficios {
    width: 60%;
}
*/