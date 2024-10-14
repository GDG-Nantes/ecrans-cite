import {ConfigAfficheShortVid} from "src/types.ts";

type typesAffiches = 'vestiaireJ1' | 'vestiaireJ2' | 'afterAnnonce' | 'afterBars';
export const AFFICHES_ZONE: Record<typesAffiches, ConfigAfficheShortVid> = { // TODO mettre à jour les messages
  vestiaireJ1: {
    "title": "Vestiaire gratuit disponible ! Déposez vos affaires.",
    "speakers": [{
      "name": "Devfest Nantes",
      "picture": "https://github.com/GDG-Nantes/Devfest2023/assets/525974/f96a0968-1079-447c-8c39-490cb8c64089"
    }],
    "date": "17 Octobre",
    "time": "08h-22h",
    "location": "Galerie Jules Verne",
  },
  vestiaireJ2: {
    "title": "Vestiaire gratuit disponible ! Déposez vos affaires.",
    "speakers": [{
      "name": "Devfest Nantes",
      "picture": "https://github.com/GDG-Nantes/Devfest2023/assets/525974/f96a0968-1079-447c-8c39-490cb8c64089"
    }],
    "date": "18 Octobre",
    "time": "08h-18h30",
    "location": "Galerie Jules Verne",
  },
  afterAnnonce: {
    "title": "Afterparty ce soir by Proginov !",
    "speakers": [{
      "name": "Proginov",
      "picture": "https://github.com/GDG-Nantes/Devfest2023/assets/525974/e648a5a2-b9b7-422e-8e0a-61f335bdc30c"
    }],
    "date": "Vestiaire jusqu'à 22h",
    "time": "18h45",
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
    "date": "17 Octobre",
    "time": "22h",
    "location": "Bars Partenaires",
  }
};
