export type RoomName =
  'Titan'
  | 'Belem'
  | 'Tour de Bretagne'
  | 'Replay Tour de Bretagne'
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
export type IdEcrans =
  'FB01'
  | 'FB02'
  | 'FB03'
  | 'FB04'
  | 'FB05'

  // Bas
  | 'S150'
  | 'S300'
  | 'SALB'
  | 'SALC'
  | 'SALD'
  | 'SALE'
  | 'SALF'

  //Haut
  | 'S200'
  | 'A450'
  | 'SALG'
  | 'SALH'
  | 'SALI'

  //4eme
  | 'SALJ'
  | 'SALK'
  | 'SALM'
  | 'SALN'

  | 'FH06'
  | 'FH07'
  | 'FH08'
  | 'FH09'

  | 'R001'
  | 'R002'
  | 'R101'
  | 'R201'
  | 'R202'

  | 'A800'
  | 'A801'
  | 'A802'
  | 'A803'
  | 'A804'

  | 'GA01'
  | 'GA02'
  | 'GA03'
  | 'GA04'
  | 'GA05'
  | 'GA06'

  | 'GH03'
  | 'GH1A/B'
  | 'GH2A/B'

  | 'GG01'
  | 'GG02'
  | 'GG03'
  | 'GG04'
  | 'GG05'

  | 'ASC1'
  | 'ASC2'
  | 'ASC3'

export type ConfigEcran = {
  id: IdEcrans
  tags?: Tag[]
  displayName?: RoomName
  nom: RoomName | string
  ratio?: string
  resolution?: string
  orientation?: 'portrait' | 'landscape' | 'special',
  directions?: Direction[]
}
export type ConfigAfficheShortVid = {
  title: string
  date: string
  time: string
  location: string
  speakers: SpeakerShortVid[]
}
export type SpeakerShortVid = {
  name: string,
  picture: string
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
