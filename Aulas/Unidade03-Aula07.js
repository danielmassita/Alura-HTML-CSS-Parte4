/*
07
Consolidando o seu conhecimento
PRÓXIMA ATIVIDADE

Chegou a hora de você pôr em prática o que foi visto na aula. Para isso, execute os passos listados abaixo.

1) Na página index.html, envolva a lista de benefícios em uma div, adicione uma classe à ul e acrescente mais benefícios na lista. Além disso, coloque a imagem de benefícios na mesma linha que o fechamento da ul (classe </ul>) e altere a sua classe para imagem-beneficios:

<div class="conteudo-beneficios">
    <ul class="lista-beneficios">
        <li class="itens">Atendimento aos Clientes</li>
        <li class="itens">Espaço diferenciado</li>
        <li class="itens">Localização</li>
        <li class="itens">Profissionais Qualificados</li>
        <li class="itens">Pontualidade</li>
        <li class="itens">Limpeza</li>
    </ul><img src="beneficios.jpg" class="imagem-beneficios">
</div>COPIAR CÓDIGO
2) Envolva também o mapa em uma div:

<div class="mapa-conteudo">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4483278365396!2d-46.63466568562861!3d-23.588249068469487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f5ca62674!2sCaelum!5e0!3m2!1spt-BR!2sbr!4v1568814489656!5m2!1spt-BR!2sbr" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
</div>COPIAR CÓDIGO
3) Em style.css, remova os estilos do main:

main {

}COPIAR CÓDIGO
4) Além disso, adicione os estilos dos benefícios:

.beneficios {
    padding: 3em 0;
    background: #888888;
}

.conteudo-beneficios {
    width: 640px;
    margin: 0 auto;
}

.lista-beneficios {
    width: 40%;
    display: inline-block;
    vertical-align: top;
}

.itens {
    line-height: 1.5;
}

.itens:first-child {
    font-weight: bold;
}

.imagem-beneficios {
    width: 60%;
}COPIAR CÓDIGO
5) Altere a margin do video para 2em:

.video {
    width: 560px;
    margin: 2em auto;
}COPIAR CÓDIGO
6) Estilize a div do mapa e a section principal:

.mapa-conteudo {
    width: 940px;
    margin: 0 auto;
}

.principal {
    padding: 3em 0;
    background: #FEFEFE;
    width: 940px;
    margin: 0 auto;
}COPIAR CÓDIGO
7) Adicione um background ao mapa:

.mapa {
    padding: 3em 0;
    background: linear-gradient(#FEFEFE, #888888);
}COPIAR CÓDIGO
8) E por fim, adicione uma estrela antes de todos os itens da lista de benefícios:

.itens:before {
    content: "★";
}COPIAR CÓDIGO

08
O que aprendemos?
PRÓXIMA ATIVIDADE

Nesta aula, aprendemos:

A melhorar mais ainda a semântica da página principal, com novas divisões, classes, etc
Novas pseudo-classes
Como aplicar um background gradiente na página
Pseudo-elementos
*/