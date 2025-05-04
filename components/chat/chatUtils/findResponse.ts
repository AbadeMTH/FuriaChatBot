import { furiaKeywords } from "./chatMock";

// Função responsável por encontrar a resposta do bot baseado na mensagem do usuário através dos mocks
export function findResponse(userInput: string): string | null {
    const lowerInput = userInput.toLowerCase();
    const words = lowerInput.split(/\s+/); // separa a frase em palavras
    
    for (const item of furiaKeywords) {
        for (const keyword of item.keywords) {
            // Se a keyword for uma expressão de múltiplas palavras (ex: "redes sociais"), tenta encontrar diretamente
            if (keyword.includes(" ")) {
                if (lowerInput.includes(keyword)) {
                    return item.response;
                }
            } else {
                // Para keywords de uma palavra só, busca por igualdade exata
                if (words.includes(keyword)) {
                    return item.response;
                }
            }
        }
    }
    return null;
}
