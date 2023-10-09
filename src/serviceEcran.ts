const ecrans = [
    {
        id: 'ecran1',
        nom: 'Titan',
    },
    {
        id: 'ecran2',
        nom: 'Belem',
    },
    {
        id:'GH',
        nom: 'Grande Halle',
        ratio: '16_9',
        resolution: '1080x1920',
        orientation: 'portrait',
    },
    {
        id:'FB',
        nom: 'Foyer Bas',
        ratio: '16_9',
        resolution: '1920x1080',
        orientation: 'landscape',
    },
    {
        id:'R0',
        nom: 'Salle R0',
        ratio: '16_9',
        resolution: '1920x1080',
        orientation: 'landscape',
    },
    {
        id:'gh3',
        nom: 'Vers la salle speaker',
        ratio: '16_9',
        resolution: '1920x1080',
        orientation: 'landscape',
    }
];

export function getEcrans() {
    return ecrans;
}

export function getInfoEcran(idEcran: string) {
    const ecran = ecrans.find((ecran) => ecran.id === idEcran);
    return ecran;
}