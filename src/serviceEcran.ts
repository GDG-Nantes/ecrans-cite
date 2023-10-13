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
        tags: ['defaut', 'sponsors']
    },
    {
        id:'FB',
        nom: 'Foyer Bas',
        ratio: '16_9',
        resolution: '1920x1080',
        orientation: 'landscape',
        tags: ['defaut', 'sponsor', 'goodies']
    },
    {
        id:'R0',
        nom: 'Salle R0',
        ratio: '16_9',
        resolution: '1920x1080',
        orientation: 'landscape',
        tags: ['defaut'], 
    },
    {
        id:'GH3',
        nom: 'Vers la salle speaker',
        ratio: '16_9',
        resolution: '1920x1080',
        orientation: 'landscape',
        tags: ['speaker'],
    },
    {
        id:'FH',
        nom: 'Vers la mezzanine',
        ratio: '16_9',
        resolution: '1080x1920',
        orientation: 'portrait',
        tags: ['defaut'],  
    },
    {
        id:'FB12',
        nom: 'Tour de Bretagne',
        ratio: '16_9',
        resolution: '1920x1080',
        orientation: 'landscape',
        tags: ['room'],  
    },
    {
        id:'FB06',
        nom: 'Les Machines',
        ratio: '16_9',
        resolution: '1920x1080',
        orientation: 'landscape',
        tags: ['room'],
    },
    {
        id:'R202',
        nom: 'R2',
        ratio: '16_9',
        resolution: '1920x1080',
        orientation: 'landscape',
        tags: ['defaut', 'sponsor', 'community', 'lounge', 'devfestsafe', 'google'],
    },
    {
        id:'FH03',
        nom: 'vers Belem, l\'atelier, le hangar et le replay Tour de Bretagne',
        ratio: '16_9',
        resolution: '1920x1080',
        orientation: 'landscape',
        tags: ['room'],
    },
    {
        id:'FH04',
        nom: 'Belem',
        ratio: '16_9',
        resolution: '1920x1080',
        orientation: 'landscape',
        tags: ['room'],
    },
    {
        id:'FH05',
        nom: 'Replay Tour de Bretagne',
        ratio: '16_9',
        resolution: '1920x1080',
        orientation: 'landscape',
        tags: ['room'],
    },
    {
        id:'FH08',
        nom: 'Le Hangar',
        ratio: '16_9',
        resolution: '1080x1920',
        orientation: 'portrait',
        tags: ['room'],
    },
    {
        id:'FH06',
        nom: 'L\'atelier',
        ratio: '16_9',
        resolution: '1080x1920',
        orientation: 'portrait',
        tags: ['room'],
    },
    {
        id:'FH07',
        nom: 'L\'atelier',
        ratio: '16_9',
        resolution: '1080x1920',
        orientation: 'portrait',
        tags: ['room'],
    }
    
    
];

export function getEcrans() {
    return ecrans;
}

export function getInfoEcran(idEcran: string) {
    const ecran = ecrans.find((ecran) => ecran.id === idEcran);
    return ecran;
}
