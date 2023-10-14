export async function getPlanning(): Promise<Talk[]> {
    return import('./data.json').then((data) => data.default.data.sessions.nodes) as Promise<Talk[]>;
}

type RoomName = 'Titan' | 'Belem' | 'Tour de Bretagne' | 'Hangar' | 'Jules Verne' | 'L\'Atelier' | 'Les Machines';

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
