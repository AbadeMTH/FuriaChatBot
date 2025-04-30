import { furiaKeywords } from "./mocks";

//Função responsável por encontrar a resposta do bot baseado na mensagem do usuário através dos mocks
export function findResponse(userInput: string): string | null {
    const lowerInput = userInput.toLowerCase();
    for (const item of furiaKeywords) {
        if (item.keywords.some((k) => lowerInput.includes(k))) {
            return item.response;
        }
    }
    return null;
}
