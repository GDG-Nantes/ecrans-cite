import {ConfigEcran, RoomName} from "./types";

export const ROOMS: RoomName[] = [
  'Titan',
  'Belem',
  'Tour de Bretagne',
  'Hangar',
  'Jules Verne',
  'L\'Atelier',
  'Les Machines',
];

export const ECRANS_SALLES: ConfigEcran[] = [
  {
    id: 'FB06',
    nom: 'Les Machines',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['room'],
  },
  {
    id: 'FB12',
    nom: 'Tour de Bretagne',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['room'],
  },
  {
    id: 'FH04',
    nom: 'Belem',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['room'],
  },
  {
    id: 'FH05',
    nom: 'Tour de Bretagne',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['room'],
  },
  {
    id: 'FH06',
    nom: 'L\'Atelier',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
  },
  {
    id: 'FH07',
    nom: 'L\'Atelier',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
  },
  {
    id: 'FH08',
    nom: 'Hangar',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
  },
  {
    id: 'A802',
    nom: 'Titan',
    ratio: '16_9',
    resolution: '1920x1200',
    orientation: 'landscape',
    tags: ['room'],
  },
  {
    id: 'GA01',
    nom: 'Jules Verne',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
  },
  {
    id: 'GA02',
    nom: 'Jules Verne',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
  },
  {
    id: 'GA03',
    nom: 'Jules Verne',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
  },
  {
    id: 'GA04',
    nom: 'Jules Verne',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
  }
]

export const ECRANS_DIRECTION: ConfigEcran[] = [
  {
    id: 'FH01',
    nom: 'Vers la mezzanine',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: [],
    directions: [
      {
        nom: 'Belem',
        sens: 'haut'
      },
      {
        nom: 'Replay Tour Bretagne',
        sens: 'haut'
      },
      {
        nom: 'L\'Atelier',
        sens: 'haut'
      },
      {
        nom: 'Hangar',
        sens: 'haut'
      }
    ]
  },
  {
    id: 'FH03',
    nom: 'vers Belem, l\'atelier, le hangar et le replay Tour de Bretagne',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
    directions: [
      {
        nom: 'Belem',
        sens: 'gauche'
      },
      {
        nom: 'Replay Tour Bretagne',
        sens: 'droite'
      },
      {
        nom: 'L\'Atelier',
        sens: 'droite'
      },
      {
        nom: 'Hangar',
        sens: 'droite'
      }
    ]
  },
  {
    id: 'FH09',
    nom: 'vers Terrasse',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
    directions: [
      {
        nom: 'Terrasse',
        sens: 'droite'
      },
      {
        nom: 'Espace Fumeur',
        sens: 'droite'
      }
    ]
  },
  {
    id: 'FB01',
    nom: '',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
    directions: [
      {
        nom: 'Les Machines',
        sens: 'gauche'
      },
      {
        nom: 'Goodies',
        sens: 'gauche'
      },
      {
        nom: 'Tour de Bretagne',
        sens: 'droite'
      }
    ]
  },
  {
    id: 'FB02',
    nom: '',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
    directions: [
      {
        nom: 'Les Machines',
        sens: 'gauche'
      },
      {
        nom: 'Tour de Bretagne',
        sens: 'droite'
      },
      {
        nom: 'Goodies',
        sens: 'droite'
      }
    ]
  },
  {
    id: 'FB03',
    nom: '',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
    directions: [
      {
        nom: 'Les Machines',
        sens: 'gauche'
      }
    ]
  },
  {
    id: 'FB05',
    nom: '',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
    directions: [
      {
        nom: 'Tour de Bretagne',
        sens: 'droite'
      }
    ]
  },
  {
    id: 'GH03',
    nom: 'Vers la salle speaker',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
    directions: [{
      nom: 'Salle speaker (1er étage)',
      sens: 'bas'
    }]
  },
  {
    id: 'GG01',
    nom: 'Vers Grande Hall',
    ratio: '16_9',
    resolution: '3840x600',
    orientation: 'landscape',
    tags: [],
    directions: [
      {
        nom: 'Grande Halle',
        sens: 'droite'
      },
      {
        nom: 'Titan',
        sens: 'gauche'
      }
    ]
  },
  {
    id: 'GG02',
    nom: 'Vers Grande Hall',
    ratio: '16_9',
    resolution: '3840x600',
    orientation: 'landscape',
    tags: [],
    directions: [
      {
        nom: 'Grande Halle',
        sens: 'droite'
      },
      {
        nom: 'Titan',
        sens: 'gauche'
      }
    ]
  },
  {
    id: 'R001',
    nom: 'Salle R0',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
    directions: [
      {
        nom: 'DeLorean',
        sens: 'bas'
      }
    ]
  },
  {
    id: 'R101',
    nom: 'R1',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
    directions: [
      {
        nom: 'Salle Speaker',
        sens: 'droite'
      }
    ]
  },
  {
    id: 'R201',
    nom: 'R2',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
    directions: [
      {
        nom: 'Devfest Safe',
        sens: 'bas'
      },
      {
        nom: 'Lounge',
        sens: 'bas'
      },
      {
        nom: 'Communautés Nantaises',
        sens: 'bas'
      }
    ]
  },
  {
    id: 'R202',
    nom: 'R2',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
    directions: [
      {
        nom: 'Devfest Safe',
        sens: 'droite'
      },
      {
        nom: 'Lounge',
        sens: 'droite'
      },
      {
        nom: 'Communautés Nantaises',
        sens: 'droite'
      },
      {
        nom: 'Salles 1er étage',
        sens: 'droite'
      }
    ]
  },
  {
    id: 'A805',
    nom: 'Ecran escalier 800',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: [],
    directions: [
      {
        nom: "Titan",
        sens: "gauche"
      }
    ]
  },
];
export const ECRANS_AUTRES: ConfigEcran[] = [
  {
    id: 'GH1A/B',
    nom: 'Grande Halle',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: []
  },
  {
    id: 'GH2A/B',
    nom: 'Grande Halle',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: []
  },
  {
    id: 'R002',
    nom: 'Salle R0',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
  },
  {
    id: 'FB04',
    nom: 'Stockage Foyer Bas',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
  },
  {
    id: 'FB07',
    nom: 'Stockage Foyer Bas',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'FB08',
    nom: 'Stockage Foyer Bas',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'FB09',
    nom: 'Stockage Foyer Bas',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'FB10',
    nom: 'Stockage Foyer Bas',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'FB11',
    nom: 'Podcast google',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'FH02',
    nom: 'Mobile Foyer Haut',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'FH10',
    nom: 'Salle Foyer Haut',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'FH11',
    nom: 'Salle Foyer Haut',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'FH12',
    nom: 'Salle Foyer Haut',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'FH13',
    nom: 'Salle Foyer Haut',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'A801',
    nom: 'mur LED avant titan',
    ratio: '34_6',
    resolution: '4352x768',
    orientation: 'special',
    tags: ['special'],
  },
  {
    id: 'A803',
    nom: 'Bar cite',
    ratio: '16_9',
    resolution: '1920x1200',
    orientation: 'landscape',
    tags: ['defaut', 'sponsor', 'afterparty'],
  },
  {
    id: 'A804',
    nom: 'Bar cite',
    ratio: '16_9',
    resolution: '1920x1200',
    orientation: 'landscape',
    tags: ['defaut', 'sponsor', 'afterparty'],
  },
  {
    id: 'GG03',
    nom: 'Vestiaire',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['vestiaire'],
  },
  {
    id: 'GG04',
    nom: 'Vestiaire',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['vestiaire'],
  },
  {
    id: 'GG05',
    nom: 'Bar',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
  },
  {
    id: 'GA05',
    nom: 'Bar Jules Verne',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
  },
  {
    id: 'GA06',
    nom: 'Bar Jules Verne',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
  },
  {
    id: 'ASC1',
    nom: 'Ascenseur',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['ascenseur'],
  },
  {
    id: 'ASC2',
    nom: 'Ascenseur',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['ascenseur'],
  }
];

export const ECRANS: ConfigEcran[] = [
  ...ECRANS_SALLES,
  ...ECRANS_DIRECTION,
  ...ECRANS_AUTRES
];
