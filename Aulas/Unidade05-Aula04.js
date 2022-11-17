/*
04
Sombra nos elementos
PRÓXIMA ATIVIDADE

Play Video
Transcrição
Nesta aula, aprenderemos sobre as sombras, uma outra novidade que CCS 3 inseriu. Fazer sombras em elementos sempre foi muito difícil nas versões anteriores, hoje em dia, trata-se de algo trivial.

Continuaremos a usar a imagem da sessão de "Benefícios". A sombra é resultado de um efeito de "luz" que lançaremos sobre o elemento. O nome da propriedade que utilizaremos para gerar esse efeito é box-shadow, que possui a propriedade do eixo X, T e uma cor. Queremos deslocar 10px no eixo X e Y, a cor que utilizaremos será preto.

.imagem-beneficios {
    width: 60%
    opacity: 1;
    transition: 400ms;
    box-shadow: 10px 10px #000000;
}COPIAR CÓDIGO
Ao recarregarmos a página, teremos uma sombra projetada, quadrada.

sombra

Podemos melhorar a qualidade estética dessa sombra ao adicionarmos uma terceira propriedade chamada blur, em que podemos aplicar um nível de desfoque específico, no caso, inseriremos um valor de 5px. Quanto maior a quantidade de pixels que inserirmos, mais claro sera o efeito de desfoque.

.imagem-beneficios {
    width: 60%
    opacity: 1;
    transition: 400ms;
    box-shadow: 10px 10px 5px #000000;
}COPIAR CÓDIGO
Ao recarregarmos a página, veremos o efeito aplicado na sombra da imagem.

blur

Temos ainda uma quarta propriedade que configura a intensidade da borda a partir do tamanho do elemento, isto é, o tamanho da sombra projetada. Neste caso, inseriremos 20px:

.imagem-beneficios {
    width: 60%
    opacity: 1;
    transition: 400ms;
    box-shadow: 10px 10px 5px 20px #000000;

}COPIAR CÓDIGO
No navegador, a sombra sugirá expandida.

sombragrande

Podemos adicionar várias sombras em um mesmo elemento, basta que o conteúdo esteja separado por uma vírgula. Essa nova sombra terá valores negativos e terá a cor amarela.

.imagem-beneficios {
    width: 60%
    opacity: 1;
    transition: 400ms;
    box-shadow: 10px 10px 5px 20px #00000, -10px -10px yellow;

}COPIAR CÓDIGO
Será projetada uma sombra por debaixo da anterior.

Podemos, ainda, inserir uma terceira sombra com a cor rgba() com a camada de opacidade e borda vermelha.

.imagem-beneficios {
    width: 60%
    opacity: 1;
    transition: 400ms;
    box-shadow: 10px 10px 5px 20px #00000, -10px -10px yellow, -20px 20px rgba(255,0,0,0.5);

}COPIAR CÓDIGO
Ao recarregarmos a página teremos três sombras.

sombras

Outra possibilidade no CSS 3 é criar sombras internas. Utilizaremos a própria sessão de benefícios para exempliciar esse efeito, que será utilizado em box-shadowe se chama inset. Seu posicionamento será a partir do centro do elemento e terá a cor vermelha.

.beneficios {
    padding: 3em 0;
    background: #888888;
    box-shadow: inset 0 0 #FF0000;
}COPIAR CÓDIGO
Ao carregarmos a página, não notaremos qualquer mudança. Isso se deve pelo fato de que a sombra possui o mesmo tamanho do elemento. Para que ela se torne perceptível, criaremos um espaçamento de 30px.

.beneficios {
    padding: 3em 0;
    background: #888888;
    box-shadow: inset 0 0 30px #FF0000;
}COPIAR CÓDIGO
Feito isso, a sombra será interna em toda a sessão de benefícios.

sombra

Apagaremos todas as sombras coloridas e manteremos apenas a sombra leve em imagem-beneficios.

.imagem-beneficios {
    width: 60%
    opacity: 1;
    transition: 400ms;
    box-shadow: 10px 10px 10px 0 #000000;
}COPIAR CÓDIGO
Para fechar o tópico de sombras, por último aprenderemos a inserir sombras em textos. Em titulo-principal, utilizaremos a propriedade text-shadow, que recebem os valores que já conhecemos.

.titulo-principal {
    text-align: center;
    font-size: em;
    margin: 0 0 1em;
    clear: left;
    text-shadow: 2px 2px #FF0000; 
}
COPIAR CÓDIGO
Será criada uma sombra para o título.

texto vermelho
*/