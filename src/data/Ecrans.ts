import {ConfigEcran, RoomName} from "src/types.ts";

export const ROOMS: RoomName[] = [
  'Titan',
  'Belem',
  'Tour Bretagne',
  'Hangar',
  'Jules Verne',
  'L\'Atelier',
  'Les Machines',
  "Unconf"
];

export const ECRANS_SALLES: ConfigEcran[] = [
  {
    id: 'S150',
    nom: 'Les Machines',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['room'],
  },
  {
    id: 'S300',
    nom: 'Tour Bretagne',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['room'],
  },
  {
    id: 'A450',
    nom: 'Belem',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['room'],
  },
  {
    id: 'S200',
    nom: 'Unconf',
    displayName: 'Unconf',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['room'],
  },
  {
    id: 'SALG',
    nom: 'L\'Atelier',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
  },
  {
    id: 'SALH',
    nom: 'L\'Atelier',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
  },
  {
    id: 'SALI',
    nom: 'Hangar',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
  },
  {
    id: 'A800',
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

export const ECRANS_COULOIR_GRANDE_HALL: ConfigEcran[] = [
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
]
export const ECRANS_DIRECTION: ConfigEcran[] = [
  ...ECRANS_COULOIR_GRANDE_HALL,
  {
    id: 'FH06',
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
        nom: 'Unconference',
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
    id: 'FH08',
    nom: 'vers Belem, l\'atelier, le hangar et l\'unconference',
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
        nom: 'Unconference',
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
        nom: 'Code in the Dark',
        sens: 'gauche'
      },
      {
        nom: 'Goodies',
        sens: 'gauche'
      },
      {
        nom: 'Tour Bretagne',
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
        nom: 'Code in the Dark',
        sens: 'haut'
      },
      {
        nom: 'Tour Bretagne',
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
      },
      {
        nom: 'Code in the Dark',
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
        nom: 'Tour Bretagne',
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
      nom: 'Salle speaker            Speaker Room                  Elevator Button 1',
      sens: 'haut'
    }]
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
        nom: 'Salle speaker            Speaker Room                 ',
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
    id: 'R202',
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
    id: 'A804',
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
export const ECRANS_ASCENSEUR_SPEAKER: ConfigEcran[] = [
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
]
export const ASCENSEUR_EFFRAYANT: ConfigEcran = {
  id: 'ASC3',
  nom: 'Ascenseur',
  ratio: '16_9',
  resolution: '1920x1080',
  orientation: 'landscape',
  tags: ['ascenseur'],
};
export const ECRANS_ASCENSEUR: ConfigEcran[] = [
  ...ECRANS_ASCENSEUR_SPEAKER,
  ASCENSEUR_EFFRAYANT
]

export const ECRANS_VESTIAIRE: ConfigEcran[] = [
  {
    id: 'GG03',
    nom: 'Vestiaire',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['vestiaire', 'vin'],
  },
  {
    id: 'GG04',
    nom: 'Vestiaire',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['vestiaire'],
  },
]

export const ECRAN_ESCALIER_TITAN: ConfigEcran = {
  id: 'A801',
  nom: 'mur LED avant titan',
  ratio: '34_6',
  resolution: '4352x768',
  orientation: 'special',
  tags: ['special'],
};

export const ECRANS_BARS: ConfigEcran[] = [
  {
    id: 'A802',
    nom: 'Bar cite',
    ratio: '16_9',
    resolution: '1920x1200',
    orientation: 'landscape',
    tags: ['defaut', 'sponsor', 'afterparty'],
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
    id: 'GG05',
    nom: 'Bar',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['vestiaire', 'vin'],
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
  }
]

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
    id: 'R001',
    nom: 'Salle R0',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: [],
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
    id: 'SALB',
    nom: 'Code In The Dark',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'SALC',
    nom: 'Code In The Dark',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'SALD',
    nom: 'Code In The Dark',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'SALE',
    nom: 'Code In The Dark Salle E',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'SALF',
    nom: 'Stockage Foyer Bas',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'FH07',
    nom: 'Mobile Foyer Haut',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'SALJ',
    nom: 'Salle Foyer Haut',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'SALK',
    nom: 'Salle Foyer Haut',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'SALM',
    nom: 'Salle Foyer Haut',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  {
    id: 'SALN',
    nom: 'Salle Foyer Haut',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'portrait',
    tags: [],
  },
  ECRAN_ESCALIER_TITAN
];

export const ECRANS: ConfigEcran[] = [
  ...ECRANS_SALLES,
  ...ECRANS_DIRECTION,
  ...ECRANS_ASCENSEUR,
  ...ECRANS_VESTIAIRE,
  ...ECRANS_BARS,
  ...ECRANS_AUTRES,
];

export function estParmisEcrans(id: string, configsEcran: ConfigEcran[]) {
  return configsEcran.some((config) => config.id === id);
}
