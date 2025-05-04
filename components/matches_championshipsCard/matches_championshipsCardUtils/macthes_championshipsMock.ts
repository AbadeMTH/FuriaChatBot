import { ImageSourcePropType } from "react-native";

export type Championships = {
    id: number;
    championship: string;
    date: string;
    imageChampionship: ImageSourcePropType;
};

export interface Matches extends Championships {
    team1: string;
    team2: string;
    team1Image: ImageSourcePropType;
    team2Image: ImageSourcePropType;
    dateMatch: string;
}

export const championships: Championships[] = [
    {
        id: 1,
        championship: "PGL Astana 2025",
        date: "10 de Maio de 2025 - 18 de Maio de 2025",
        imageChampionship: require("../../../assets/images/championships/pgl.webp"),
    },
    {
        id: 2,
        championship: "IEM Dallas 2025",
        date: "19 de Maio de 2025 - 15 de Maio de 2025",
        imageChampionship: require("../../../assets/images/championships/iem.webp"),
    },
    {
        id: 3,
        championship: "BLAST.tv Austin Major 2025 Stage 2",
        date: "07 de Junho de 2025 - 10 de Junho de 2025",
        imageChampionship: require("../../../assets/images/championships/blast.png"),
    },
];

export const matches: Matches[] = [
    {
        id: 1,
        championship: "PGL Astana 2025",
        date: "10 de Maio de 2025 - 18 de Maio de 2025",
        imageChampionship: require("../../../assets/images/championships/pgl.webp"),
        team1: "FURIA",
        team2: "The MongolZ",
        team1Image: require("../../../assets/images/teams/logo-furia.png"),
        team2Image: require("../../../assets/images/teams/mongolz.webp"),
        dateMatch: '10 de Maio de 2025',
    },
];
