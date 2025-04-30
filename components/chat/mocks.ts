export type Message = {
    id: number;
    text: string;
    isUser: boolean;
};
export const messages: Message[] = [];

type KeywordResponse = {
    keywords: string[];
    response: string;
};

export const furiaKeywords: KeywordResponse[] = [
    {
        keywords: ["oi", "ola", "olá", "eae", "fala", "eai"],
        response:
            "Fala, fã da FURIA! 😎 Pronto pra saber tudo sobre a line de CS2 e os próximos campeonatos?",
    },
    {
        keywords: ["sim", "bora", "fala", "vamos", "vamo", "claro"],
        response:
            "Perfeito meu panteão 🐾, pergunte o que quiser e tentarei responder!",
    },
    {
        keywords: ["furia", "fúria", "sobre a furia", "quem é a furia"],
        response:
            "A FURIA é uma das maiores organizações de esports do Brasil, com uma história marcante e uma paixão pela agressividade tática no CS2! 🐆🔥",
    },
    {
        keywords: ["line", "lineup", "time", "jogadores", "elenco"],
        response:
            "A lineup atual da FURIA no CS2 inclui: yuurih, KSCERATO, FalleN, molodoy e YEKINDAR (stand-in), com sidde como coach. 💥",
    },
    {
        keywords: ["fallen", "imperador", "gabriel", "igl", "professor"],
        response:
            "Gabriel 'FalleN' Toledo é o IGL da FURIA e uma lenda do CS brasileiro. Liderança e experiência não faltam! 👑",
    },
    {
        keywords: ["kscerato", "clutch", "killer"],
        response:
            "KSCERATO é um dos riflers mais perigosos do mundo. Confiável, frio e decisivo nos momentos importantes. 🎯",
    },
    {
        keywords: ["yuurih", "yuri", "consistente"],
        response:
            "yuurih mantém a consistência da FURIA. Rifler estável e cerebral, sempre soma pro time. 🔥",
    },
    {
        keywords: ["molodoy", "danil", "novo jogador"],
        response:
            "molodoy é o novo reforço da FURIA vindo da Rússia. Tático, inteligente e promissor. 🇷🇺",
    },
    {
        keywords: ["yekindar", "stand-in", "letão"],
        response:
            "YEKINDAR está atuando como stand-in na FURIA. Jogador letão conhecido por seu estilo agressivo e entrada rápida! ⚡",
    },
    {
        keywords: ["sidde", "coach", "treinador"],
        response:
            "sidde é o coach da FURIA desde 2024. Fundamental na parte tática e mental da equipe. 🧠",
    },
    {
        keywords: ["torneios", "campeonatos", "agenda", "próximo jogo"],
        response:
            "A FURIA segue competindo nos principais campeonatos mundiais. Fique ligado nas redes sociais para acompanhar a agenda. 📅",
    },
    {
        keywords: ["onde assistir", "live", "stream", "jogo ao vivo"],
        response:
            "Assista aos jogos da FURIA nos canais da ESL, Blast, Gaules e outras streams oficiais na Twitch e YouTube! 🎥",
    },
    {
        keywords: ["hashtag", "orgulho", "hino", "grito"],
        response: "Somos #DIADEFURIA! Um grito de raça, emoção e torcida. 🖤",
    },
    {
        keywords: ["tchau", "adeus", "falou", "até mais"],
        response: "Valeu, fã da FURIA! Até a próxima! 🐾",
    },
    {
        keywords: ["k"],
        response: "Muito engraçado! 😂",
    },
];
