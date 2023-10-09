export function getPlanning(idEcran: string) {
    return Promise.resolve({
        talks: [
            {
                titre: "Talk 1",
                description: "Description du talk 1",
                salle: "Titan",
                heureDebut: "2023-10-09T17:26:00",
                heureFin: "2023-10-09T17:27:00",
                video: "/video/gdgnantes.mp4",
                // speakers: [
                //     {
                //         nom: "Speaker 1",
                //         avatar: "https://picsum.photos/200/300",
                //     },
                //     {
                //         nom: "Speaker 2",
                //         avatar: "https://picsum.photos/200/300",
                //     }
                // ]
            },
            {
                titre: "A table",
                description: "Description du talk 1",
                salle: "Titan",
                heureDebut: "2023-10-09T17:27:00",
                heureFin: "2023-10-09T17:29:00",
                video: "/video/a-table.mp4",
            },
            {
                titre: "Talk 1",
                description: "Description du talk 1",
                salle: "Titan",
                heureDebut: "2023-10-09T17:30:00",
                heureFin: "2023-10-09T17:34:00",
                video: "/video/gdgnantes.mp4",
            }
        ]
    })
}