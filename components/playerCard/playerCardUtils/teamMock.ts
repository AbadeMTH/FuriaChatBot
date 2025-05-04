import { ImageSourcePropType } from "react-native";

export interface TeamMember {
    id: number;
    nickname: string;
    fullName: string;
    imageUrl: ImageSourcePropType;
    rating: number;
    kr: number;
    hs: string;
    maps: number;
}

export const furiaTeam: TeamMember[] = [
    {
        id: 1,
        nickname: "FalleN",
        fullName: "Gabriel Toledo",
        imageUrl: require("../../../assets/images/players/fallen.webp"),
        rating: 1.05,
        kr: 0.68,
        hs: "31.2%",
        maps: 1995,
    },
    {
        id: 2,
        nickname: "KSCERATO",
        fullName: "Kaike Cerato",
        imageUrl: require("../../../assets/images/players/kscerato.webp"),
        rating: 1.19,
        kr: 0.73,
        hs: "49.7%",
        maps: 1318,
    },
    {
        id: 3,
        nickname: "yuurih",
        fullName: "Yuri Santos",
        imageUrl: require("../../../assets/images/players/yuri.webp"),
        rating: 1.16,
        kr: 0.74,
        hs: "44.6%",
        maps: 1411,
    },
    {
        id: 4,
        nickname: "molodoy",
        fullName: "Danil Golubenko",
        imageUrl: require("../../../assets/images/players/molodoy.webp"),
        rating: 1.21,
        kr: 0.81,
        hs: "35.9%",
        maps: 148,
    },
    {
        id: 5,
        nickname: "YEKINDAR",
        fullName: "Mareks Gaļinskis",
        imageUrl: require("../../../assets/images/players/yekindar.webp"),
        rating: 1.12,
        kr: 0.73,
        hs: "59.0%",
        maps: 1489,
    },
    {
        id: 6,
        nickname: "sidde",
        fullName: "Sidnei Macedo",
        imageUrl: require("../../../assets/images/players/sidde.webp"),
        rating: 0,
        kr: 0,
        hs: "-%",
        maps: 140,
    },
    {
        id: 7,
        nickname: "skullz",
        fullName: "Felipe Medeiros",
        imageUrl: require("../../../assets/images/players/skullz.webp"),
        rating: 1.09,
        kr: 0.68,
        hs: "54.5%",
        maps: 863,
    },
    {
        id: 8,
        nickname: "chelo",
        fullName: "Marcelo Cespedes",
        imageUrl: require("../../../assets/images/players/chelo.webp"),
        rating: 1.03,
        kr: 0.69,
        hs: "60.5%",
        maps: 1328,
    },
];
