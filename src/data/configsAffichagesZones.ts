import {ConfigAfficheShortVid} from "src/types.ts";

type typesAffiches = 'vestiaireJ1' | 'vestiaireJ2' | 'afterBars' | 'vin';
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
  afterBars: {
    "title": "Prolongez la soirée dans les bars ! Réduction avec votre badge",
    "speakers": [{
      "name": "Délirium",
      "picture": "https://github.com/GDG-Nantes/Devfest2023/assets/525974/d1f25689-25c3-4fce-8f19-2b41c6f90dff"
    }, {
      "name": "Fleurs du Malt",
      "picture": "https://github.com/GDG-Nantes/Devfest2023/assets/525974/ac2c08ff-bccd-4894-9a7d-9d6c0fa6fb93"
    }, {
      "name": "Lovecraft",
      "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Ag3elxuxH-fXcNSz26D7ZTlnGzX5DigQ5w&s"
    }],
    "date": "16 Octobre",
    "time": "22h",
    "location": "Bars Partenaires",
  },
  vin: {
    "title": "Afterparty : bar et vin",
    "date": "16 Octobre",
    "time": "18h30-21h30",
    "location": "Galerie Jules Verne",
    "speakers": []
  }
};
