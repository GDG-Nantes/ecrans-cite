export function getPlanning(idEcran: string) {
    return Promise.resolve({
        talks: [
            {
                titre: "Talk 1",
                description: "Description du talk 1",
                salle: "Titan",
                heureDebut: "2023-07-20T01:00:00",
                heureFin: "2023-07-20T02:00:00",
                speakers: [
                    {
                        nom: "Speaker 1",
                        avatar: "https://picsum.photos/200/300",
                    },
                    {
                        nom: "Speaker 2",
                        avatar: "https://picsum.photos/200/300",
                    }
                ]
            }
        ]
    })
}