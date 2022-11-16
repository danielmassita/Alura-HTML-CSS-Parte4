/*
05
Adaptando o CSS
PRÓXIMA ATIVIDADE

Play Video
Transcrição
Temos o HTML, mas resta criarmos o CSS de cada um dos elementos. Em nossa página inicial temos o banner que criamos o id para ele. Contudo, aprendemos que o identificador não é necessário neste caso.

<img id="banner" src="banner.jpg"> COPIAR CÓDIGO
Substituiremos o identificador por uma classe. No universo HTML e CSS, ao falarmos de estilo, usamos uma classe, quando falamos de comportamento, usamos o identificador. A força da classe não é tão grande, então ela pode ser sobrescrita e seu estilo alterado, por isso é importante em CSS sempre utilizarmos classes, assim criamos um padrão em nosso código, o que é fundamental.

<img class="banner" src="banner.jpg">
COPIAR CÓDIGO
Em style.css criaremos o banner. É importante que documentemos nosso código para que ele se torne compreensível. Em CSS, utilizase /* para demarcar a linha de comentário, ela não será interpretada pelo navegador.

css da página inicial
.banner {
    width:100%;
}COPIAR CÓDIGO
Ao acessarmos o navegador, verificaremos que a imagem já o ocupa o espaço total da tela, como havíamos planejado. Agora, trabalharemos na parte de "sobre" da barbearia Alura. Em nosso HTML index.html teremos esse conteúdo marcado pela classe principal, já o título será marcado pela classe titulo-centralizado.

<section class="principal">
                <h2 class="titulo-centralizado">Sobre a Barbearia Alura</h2>

                <p>Localizada no coração da cidade a <strong>Barbearia Alura</strong> traz para o mercado o que há de melhor para o seu cabelo e barba. Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.</p>

                <p id="missao"><em>Nossa missão é: <strong>"Proporcionar auto-estima e qualidade de vida aos clientes"</strong>.</em></p>

                <p>Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.</p>
</section>
COPIAR CÓDIGO
É importante dizer que que a classe titulo-centralizado não possui um bom nome, afinal sempre que criamos uma classe do CSS é importante que ela seja específica e ao mesmo tempo o mais genérica possível. Quando temos um nome como "titulo centralizado", estamos imprimindo um comportamento, então se quiséssemos alinhar o título à esquerda, teríamos de modifcar o nome da classe, ou criar uma nova.

Portanto, alteraremos o nome da classe para titulo-principal, e em style.css faremos as especificações de estilo. As medidas proporcionais no CSS são um assunto crucial no mento de definir escalas, tamanho de fonte e assim por diante. Até agora em nosso projeto utilizamos pixel e percentual, no caso do percentual ela se trata de uma media proporcional, como notamos ao definir que a imagem do banner deveria o ocupar 100% de largura em relação a página, se quiséssemos que o banner ocupasse metade da largura da página, bastaria escrever 50%.

Se quisermos que a fonte de titulo-principal seja o dobro da fonte padrão, independe do tamanho dessa fonte padrão, utilizamos a medida em, a media proporcional para pixels. Se quisermos duas vezes o tamanho base (15 pixels), basta escrever 2em.

Incluiremos uma margem de 0 0 1em. É sempre interessante inserir um espaçamento que seja proporcional ao tamanho da fonte, o que facilita a leitura do usuário.

.titulo-principal {
    text-align: center;
    font-size: 2em;
    margin: 0 0 1em;
}COPIAR CÓDIGO
Temos a classe principal p que envolve os parágrafos. então em style.css configuraremos uma margem de 0 0 1em, proporcional ao tamanho da fonte.

.principal p {
    margin: 0 0 1em;
}COPIAR CÓDIGO
Toda a vez que tenhámos a tag strong o peso do texto esteja em negrito e a tag em indicará que o estilo da fonte seja em itálico.

.principal strong {
    font-weight: bold;
}

.principal em {
    font-style: italic;
}COPIAR CÓDIGO
Na sessão de "Benefícios", também substituiremos titulo-centralizado por titulo-principal, e então o estilo que definimos em style.css será aplicado.

<section class="beneficios">
                <h3 class="titulo-principal">Benefícios</h3>

                <ul>
                    <li class="itens">Atendimento aos Clientes</li>
                    <li class="itens">Espaço diferenciado</li>
                    <li class="itens">Localização</li>
                    <li class="itens">Profissionais Qualificados</li>
                </ul>

                <img src="beneficios.jpg" class="imagembeneficios">
</section>COPIAR CÓDIGO
Para finalizar aula, regularemos o tamanho de imagembeneficios

.imagembeneficios {
    width: 60%
}
COPIAR CÓDIGO
Desse modo a imagem não fica tão distorcida. Nas próximas aulas inseriremos a imagem da sessão "Sobre a Barbearia Alura", em que o texto engloba essa imagem. Trata-se de uma técnica de CSS que ainda não aprendemos.
*/