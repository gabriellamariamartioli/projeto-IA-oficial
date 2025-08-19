const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você sabe que a redes sociais podem causar ansiedae e depressão nos jovens?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "Isso é coisa séria, é preciso ter conciencia do que está sendo consumido na internet. "
            },
            {
                texto: "Quero saber!",
                afirmacao: "Como iso está afetando a saude mental dos jovens?."
            }
        ]
    },
    {
        enunciado: "Com  o avanço da tecnologia os jovens estão cada vez mais ligados com as redes sociais, em quais fatores você acha que mais os afetam?",
        alternativas: [
            {
                texto: "A Busca por Validação e Comparação Social, as plataformas digitais incentivam os usuários a se engajarem com curtidas, comentários e compartilhamentos, criando um ciclo de autovalidação externa.",
                afirmacao: "afirmação."
            },
            {
                texto: "Distúrbios de Imagem Corporal, as redes sociais promovem um padrão de beleza que muitas vezes é irreconhecível e inalcançável.",
                afirmacao: "afirmação."
            }
        ]
    },
    {
        enunciado: "Sobre a exposição de conteúdos negativos, o que você acha?",
        alternativas: [
            {
                texto: "O consumo constante de notícias, debates e postagens relacionadas a temas pesados, como violência, catástrofes e crises políticas, pode gerar uma sobrecarga emocional.",
                afirmacao: "Afirmação."
            },
            {
                texto: "Acho que depende do ponto de vista das pessoas, pois tanbem é importante se manter informado e saber da realidade no nosso mundo",
                afirmacao: "Afirmação."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
