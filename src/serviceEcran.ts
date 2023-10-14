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

export const ECRANS: ConfigEcran[] = [
  {
    id: 'GH',
    nom: 'Grande Halle',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['defaut', 'sponsors']
  },
  {
    id: 'FB',
    nom: 'Foyer Bas',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['defaut', 'sponsor', 'goodies']
  },
  {
    id: 'R0',
    nom: 'Salle R0',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['defaut'],
  },
  {
    id: 'GH3',
    nom: 'Vers la salle speaker',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['direction'],
  },
  {
    id: 'FH',
    nom: 'Vers la mezzanine',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['direction'],
  },
  {
    id: 'FB11',
    nom: 'Podcast google',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['podcast'],
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
    id: 'FB06',
    nom: 'Les Machines',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['room'],
  },
  {
    id: 'R202',
    nom: 'R2',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['defaut', 'sponsor', 'community', 'lounge', 'devfestsafe', 'google'],
  },
  {
    id: 'FH03',
    nom: 'vers Belem, l\'atelier, le hangar et le replay Tour de Bretagne',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['direction'],
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
    id: 'FH08',
    nom: 'Le Hangar',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
  },
  {
    id: 'FH06',
    nom: 'L\'atelier',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
  },
  {
    id: 'FH07',
    nom: 'L\'atelier',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
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
    id: 'A802',
    nom: 'Titan',
    ratio: '16_9',
    resolution: '1920x1200',
    orientation: 'landscape',
    tags: ['room'],
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
    id: 'A805',
    nom: 'Ecran escalier 800',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['titan', 'sponsor', 'afterparty', 'vestiaire'],
  },
  {
    id: 'GG01',
    nom: 'Vers Grande Hall',
    ratio: '16_9',
    resolution: '3840x600',
    orientation: 'landscape',
    tags: ['direction'],
  },
  {
    id: 'GG02',
    nom: 'Vers Grande Hall',
    ratio: '16_9',
    resolution: '3840x600',
    orientation: 'landscape',
    tags: ['direction'],
  },
  {
    id: 'GG03',
    nom: 'Vestiaire',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['defaut', 'sponsor', 'afterparty', 'vestiaire'],
  },
  {
    id: 'GG04',
    nom: 'Vestiaire',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['defaut', 'sponsor', 'afterparty', 'vestiaire'],
  },
  {
    id: 'GG05',
    nom: 'Bar',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['defaut', 'sponsor', 'afterparty'],
  },
  {
    id: 'GH01',
    nom: 'Jules Verne',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
  },
  {
    id: 'GH02',
    nom: 'Jules Verne',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
  },
  {
    id: 'GH03',
    nom: 'Jules Verne',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
  },
  {
    id: 'GH04',
    nom: 'Jules Verne',
    ratio: '16_9',
    resolution: '1080x1920',
    orientation: 'portrait',
    tags: ['room'],
  },
  {
    id: 'GH05',
    nom: 'Jules Verne',
    ratio: '16_9',
    resolution: '1920x1080',
    orientation: 'landscape',
    tags: ['room'],
  }
];
