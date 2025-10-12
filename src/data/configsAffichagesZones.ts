import {ConfigAfficheShortVid} from "src/types.ts";

type typesAffiches = 'vestiaireJ1' | 'vestiaireJ2' | 'vin';
export const AFFICHES_ZONE: Record<typesAffiches, ConfigAfficheShortVid> = {
  vestiaireJ1: {
    "title": "Vestiaire gratuit disponible ! Déposez vos affaires.",
    "speakers": [{
      "name": "Devfest Nantes",
      "picture": "https://github.com/GDG-Nantes/Devfest2023/assets/525974/f96a0968-1079-447c-8c39-490cb8c64089"
    }],
    "date": "16 Octobre",
    "time": "08h-22h",
    "location": "Galerie Jules Verne",
  },
  vestiaireJ2: {
    "title": "Vestiaire gratuit disponible ! Déposez vos affaires.",
    "speakers": [{
      "name": "Devfest Nantes",
      "picture": "https://github.com/GDG-Nantes/Devfest2023/assets/525974/f96a0968-1079-447c-8c39-490cb8c64089"
    }],
    "date": "17 Octobre",
    "time": "08h-18h30",
    "location": "Galerie Jules Verne",
  },
  vin: {
    "title": "Afterparty : bar et vin",
    "date": "16 Octobre",
    "time": "18h30-21h30",
    "location": "Galerie Jules Verne",
    "speakers": []
  }
};
