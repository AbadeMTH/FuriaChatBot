import { ImageSourcePropType } from "react-native";

export interface TeamMember {
    id: number;
    nickname: string;
    fullName: string;
    country: string;
    role: string;
    imageUrl: ImageSourcePropType;
}

export const furiaTeam: TeamMember[] = [
    {
        id: 1,
        nickname: "FalleN",
        fullName: "Gabriel Toledo",
        country: "Brasil",
        role: "AWPer / IGL",
        imageUrl: require("../../../assets/images/players/fallen.webp"),
    },
    {
        id: 2,
        nickname: "KSCERATO",
        fullName: "Kaike Cerato",
        country: "Brasil",
        role: "Rifler",
        imageUrl: require("../../../assets/images/players/kscerato.webp"),
    },
    {
        id: 3,
        nickname: "yuurih",
        fullName: "Yuri Santos",
        country: "Brasil",
        role: "Rifler",
        imageUrl: require("../../../assets/images/players/yuri.webp"),
    },
    {
        id: 4,
        nickname: "molodoy",
        fullName: "Danil Golubenko",
        country: "Cazaquistão",
        role: "AWPer",
        imageUrl: require("../../../assets/images/players/molodoy.webp"),
    },
    {
        id: 5,
        nickname: "YEKINDAR",
        fullName: "Mareks Gaļinskis",
        country: "Letônia",
        role: "Rifler",
        imageUrl: require("../../../assets/images/players/yekindar.webp"),
    },
    {
        id: 6,
        nickname: "sidde",
        fullName: "Sidnei Macedo",
        country: "Brasil",
        role: "Treinador Principal",
        imageUrl: require("../../../assets/images/players/sidde.webp"),
    },
];
