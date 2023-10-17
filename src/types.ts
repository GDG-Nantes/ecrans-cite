export type RoomName =
  'Titan'
  | 'Belem'
  | 'Tour de Bretagne'
  | 'Hangar'
  | 'Jules Verne'
  | 'L\'Atelier'
  | 'Les Machines';

export type Talk = {
  title: string
  startsAt: string
  endsAt: string
  description?: string
  id: string
  tags: string[]
  room?: {
    name: RoomName
  }
  speakers: Speaker[]
  type: string
}

export type Speaker = {
  id: string
  name: string
  photoUrl: string
  company?: string
}


export type Direction = {
  nom: string
  sens: "haut" | "bas" | "gauche" | "droite" | "haut-gauche" | "haut-droite" | "bas-gauche" | "bas-droite"
}
export type ConfigEcran = {
  id: string,
  tags?: Tag[]
  nom: RoomName | string
  ratio?: string
  resolution?: string
  orientation?: 'portrait' | 'landscape' | 'special',
  directions?: Direction[]
}
export type Tag =
  'afterparty'
  | 'ascenseur'
  | 'community'
  | 'defaut'
  | 'devfestsafe'
  | 'goodies'
  | 'google'
  | 'lounge'
  | 'podcast'
  | 'room'
  | 'speaker'
  | 'special'
  | 'sponsor'
  | 'sponsors'
  | 'titan'
  | 'vestiaire'
  | 'direction'
