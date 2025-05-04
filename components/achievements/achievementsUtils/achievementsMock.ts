import { ImageSourcePropType } from "react-native";

export type AchievementsType = {
    id: number;
    championship: string;
    team1: string;
    team1Image: ImageSourcePropType;
    team2: string;
    team2Image: ImageSourcePropType;
    result: string;
    prize: string;
    date: string;
    placement: string;
};

export const achievements: AchievementsType[] = [
    {
        id: 1,
        championship: "Elisa Masters Espoo 2023",
        team1: "FURIA",
        team1Image: require("../../../assets/images/teams/logo-furia.png"),
        team2: "Apeks",
        team2Image: require("../../../assets/images/teams/apeks.png"),
        result: "3 : 1",
        prize: "$100,000",
        date: "03 de Dezembro de 2023",
        placement: "1st",
    },
    {
        id: 2,
        championship: "Elisa Invitational Summer 2021",
        team1: "FURIA",
        team1Image: require("../../../assets/images/teams/logo-furia.png"),
        team2: "SKADE",
        team2Image: require("../../../assets/images/teams/skade.png"),
        result: "2 : 1",
        prize: "$50,000",
        date: "04 de Julho de 2021",
        placement: "1st",
    },
    {
        id: 3,
        championship: "ESL Pro League Season 12: North America",
        team1: "FURIA",
        team1Image: require("../../../assets/images/teams/logo-furia.png"),
        team2: "100 Thieves",
        team2Image: require("../../../assets/images/teams/100thieves.png"),
        result: "3 : 0",
        prize: "$77,500",
        date: "27 de Setembro de 2020",
        placement: "1st",
    },
    {
        id: 4,
        championship: "DreamHack Masters Spring 2020: North America",
        team1: "FURIA",
        team1Image: require("../../../assets/images/teams/logo-furia.png"),
        team2: "Team Liquid",
        team2Image: require("../../../assets/images/teams/liquid.png"),
        result: "3 : 0",
        prize: "$40,000",
        date: "14 de Junho de 2020",
        placement: "1st",
    },
    {
        id: 5,
        championship: "Arctic Invitational 2019",
        team1: "FURIA",
        team1Image: require("../../../assets/images/teams/logo-furia.png"),
        team2: "CR4ZY",
        team2Image: require("../../../assets/images/teams/cr4zy.png"),
        result: "2 : 0",
        prize: "$66,519.41",
        date: "14 de Setembro de 2019",
        placement: "1st",
    },
    {
        id: 6,
        championship: "EMF CS:GO World Invitational 2019",
        team1: "FURIA",
        team1Image: require("../../../assets/images/teams/logo-furia.png"),
        team2: "AVANGAR",
        team2Image: require("../../../assets/images/teams/avangar.png"),
        result: "3 : 1",
        prize: "$63,951.50",
        date: "26 de Julho de 2019",
        placement: "1st",
    },
    {
        id: 7,
        championship: "ESEA Season 31: Global Challenge",
        team1: "FURIA",
        team1Image: require("../../../assets/images/teams/logo-furia.png"),
        team2: "Team Spirit",
        team2Image: require("../../../assets/images/teams/spirit.png"),
        result: "2 : 0",
        prize: "$25,000",
        date: "14 de Julho de 2019",
        placement: "1st",
    },
];
