/*
03
Aplicando gradientes
PRÓXIMA ATIVIDADE

Play Video
Transcrição
Nesta aula, trataremos a exibição do fundo, o background da página. No projeto final, nosso site tem uma trasição do branco para o cinza,um degradê. Antes do CSS 3, para o efeito de degradê ser incluído em um site, precisaríamos tratar o background como imagem.

Primeiramente, trabalharemos a sessão "Sobre a barbearia Alura", que chamamos de principal. Precisamos adequá-la ao estilo das demais sessões, para tanto, criaremos .principal em style.css. Adicionaremos o padding de 3em 0 e o background com um tom quase branco, cujo código é #FEFEFE.

.principal {
    padding: 3em 0;
    background: #FEFEFE;
} COPIAR CÓDIGO
Em beneficios, inseriremos a cor cinza escuro:

.beneficios { 
    padding: 3em 0;
    background: #888888;COPIAR CÓDIGO
Notaremos que a cor cinza não ocupa toda a extensão da página, mas sim uma grande faixa central. Isso ocorre porque configuramos a centralização da página em <main>, o que não vai funcionar. Recortaremos o conteúdo de .main em style.css:

main {
    width: 940px;
    margin: 0 auto;
}COPIAR CÓDIGO
E então inseriremos esse conteúdo no elementos principal . Dessa maneira, o fundo cinza já ocupara toda a área da tela.

.principal {
    padding: 3em 0;
    background: #FEFEFE;
    width: 940px;
    margin: 0 auto;
}
COPIAR CÓDIGO
Se inserirmos qualquer cor de fundo de mapa por meio da propriedade background, teremos complicações no layout, afinal a cor só ocupará uma faixa central. Se adicionarmos o width e margin com os valores de principal deformaremos o mapa, que passará a ocupar a página inteira, e não queremos isso.

Para evitar esse problema, em nosso código HTML criaremos uma nova <div> que envolverá o mapa, além disso, criaremos uma classe específica que se chamará mapa-conteudo.

Em style.css, mapa-conteudo abrigará as propriedades width e margin com os valores específicos.

.mapa-conteudo {
    width: 940px;
    margin: 0 auto;

}COPIAR CÓDIGO
Dessa maneira, mapa ficará centralizado, com as proporções que desejamos. Com essas modificações, estamos prontos para trabalhar com a propriedade background em mapa. Precisamos aqui ajustar a transição da cor branca para o cinza, então utilizaremos o linear-gradient() que receberá as cores que desejamos trabalhar. O interessante dessa propriedade é que podemos adiciconar quantas cores quisermos, que o CSS irá administrá-las automaticamente. É possível, inclusive, ajustar a inclinação das cores, por exemplo 45deg e então ficarão posicionadas em 45º.

.mapa {
    padding:3em 0;
    background: linear-gradient(45deg, orange, blue, red, black);
}COPIAR CÓDIGO
Como estamos utilizando quatro cores no exemplo, há valores subentendidos em cada uma delas, na sequência: 0%, 25%, 50%, e 75% para a última cor da sequência. Mas podemos manipular esses valores de acordo com nosso interesse , como definir que orange, por exemplo, terá o valor de 50%.

.mapa {
    padding:3em 0;
    background: linear-gradient(45deg, orange 50%, blue, red, black);
}COPIAR CÓDIGO
Além do degradê linear(linear-gradient) temos ainda a opção radial(radial-gradient), que organiza a transição de cores de maneira circular. Nosso site terá uma gradação de cinza linear

.mapa {
    padding:3em 0;
    background: linear-gradient(#FEFEFE, #888888);
}COPIAR CÓDIGO
Temos em nosso site um belo efeito visual em escala de cinza!
*/