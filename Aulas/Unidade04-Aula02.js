/*
02
Seletores avançados
PRÓXIMA ATIVIDADE

Play Video
Transcrição
Nesta aula, estudaremos os seletores avançados, uma forma específica de fazermos seleção de elementos de maneira mais rebuscada. Suponhamos que no interior da <main>, antes de se iniciar a <section>, nós tenhamos um <p> com um conteúdo qualquer. Se retornarmos para o nosso CSS,

<main>
            <p> qualquer conteudo</p>

            <section class="principal">
                <h2 class="titulo-principal">Sobre a Barbearia Alura</h2>

                <img class="utensilios" src="utensilios.jpg" alt="Utensilios de um barbeiro." />

                <p>Localizada no coração da cidade a <strong>Barbearia Alura</strong> traz para o mercado o que há de melhor para o seu cabelo e barba. Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.</p>

                <p id="missao"><em>Nossa missão é: <strong>"Proporcionar auto-estima e qualidade de vida aos clientes"</strong>.</em></p>

                <p>Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.</p>
</section>
COPIAR CÓDIGO
No CSS, como fazemos para marcar esse parágrafo de vermelho? Podemos tentar escrever:

main p {
    background: red;
}COPIAR CÓDIGO
Ao carregarmos no navegador, veremos que todos os parágrafos estarão marcados de vermelho, pois coletamos os parágrafos que estavam dentro da <section>, afinal coletamos todos os parágrafos que estão dentro da <main>. Como podemos selecionar um parágrafo de maneira individual?

Com os seletores avançados do CSS, podemos selecionar os filhos diretos de <main>, para tanto, utilizaremos o sinal >, e todo os outros parágrafos serão ignorados, afinal são filhos diretos da <section> e não de <main>.

main > p {
    background: red; 
}COPIAR CÓDIGO
Mas como selecionar o primeiro parágrafo que sucede uma imagem, por exemplo? Conseguimos selecionar o primeiro filho com o seletor que acabamos de conhecer, mas neste caso estamos falando do primeiro irmão que vem depois de um elemento.

Neste caso, usamos img como elemento âncora e para o primeiro irmão usamos o sinal de "+"

img + p { 
    background: blue;COPIAR CÓDIGO
Para selecionar todos os parágrafos localizados depois de uma imagem usamos o seletor ~

img ~ p {
    background: yellow
} COPIAR CÓDIGO
É importante lembrar que um seletor pode sobrescrever o outro, pois todos possuem a mesma força. Os seletores avançados nos ajudam a criar estilos mais complexos e utilizar o CSS de uma maneira incrível, com uma autonomia maior do HTML.

No CSS podemos, inclusive, excluir itens específicos. Se quisermos excluir todos os parágrafos que não compõe missao, escreveremos:

.principal p:not(#missao) {
    background: orange;
}COPIAR CÓDIGO
A exclusão é um elemento poderoso no CSS, principalmente quando realizamos manutenção em algum código que já existe e que não devemos modificar tanto o HTML.
*/