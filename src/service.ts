export function getPlanning(idEcran: string) {
    console.log(idEcran)
    return Promise.resolve({
        "data": {
            "sessions": {
                "nodes": [
                    {
                        "title": "Opening",
                        "startsAt": "2023-10-19T08:00",
                        "endsAt": "2023-10-19T09:00",
                        "description": "Opening",
                        "id": "day-1-open",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "opening"
                    },
                    {
                        "title": "Keynote",
                        "startsAt": "2023-10-19T09:00",
                        "endsAt": "2023-10-19T09:40",
                        "description": null,
                        "id": "keynote",
                        "tags": [
                            "💡 Discovery"
                        ],
                        "room": {
                            "name": "Jules Verne"
                        },
                        "speakers": [
                            {
                                "id": "alexandre_saudinos",
                                "name": "Alexandre SAUDINOS",
                                "photoUrl": "https://media.licdn.com/dms/image/C4D03AQHX2gjdgNeTTQ/profile-displayphoto-shrink_800_800/0/1516585677796?e=1700697600&v=beta&t=u1Q8t3fAQxJS64mw2T3afOEOvKdN0fX8XdCuzVK33ks",
                                "company": "NEOSET"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Break",
                        "startsAt": "2023-10-19T09:40",
                        "endsAt": "2023-10-19T10:00",
                        "description": "Break",
                        "id": "day-1-pause-1",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "break"
                    },
                    {
                        "title": "Dessine moi un graphique (en CSS)",
                        "startsAt": "2023-10-19T10:00",
                        "endsAt": "2023-10-19T10:50",
                        "description": "Les rutilantes nouveautés de CSS des dernières années permettent d’envisager de plus en plus sereinement l’abandon du JS pour créer des graphiques de données — en partant d’un tableau HTML sémantique et accessible, tant qu’à faire. Le CSS évolue à vitesse grand V, et vous verrez qu’on peut aller bien plus loin que vous ne l’auriez imaginé !\n\n",
                        "id": "dessinemoiungraphiqueencss",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Belem"
                        },
                        "speakers": [
                            {
                                "id": "gael_poupard",
                                "name": "Gaël Poupard",
                                "photoUrl": "https://avatars.githubusercontent.com/u/2890570?v=4",
                                "company": "Onepoint"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Féminisation de la filière numérique : cassons les codes !",
                        "startsAt": "2023-10-19T10:00",
                        "endsAt": "2023-10-19T12:00",
                        "description": "Le constat est assez simple : les métiers du numérique et de l'informatique recrutent, les besoins en compétences ne cessent de grandir, les opportunités d’emplois sont aujourd'hui bien réelles.\n\nPourtant, les femmes restent encore sous-représentées dans ce secteur porteur :\n- 27 % de femmes travaillent aujourd’hui dans le numérique,\n- Seulement 15 % occupent des métiers techniques (développement, production, infrastructure),\n- 50 % des femmes employées dans l’IT quittent leur poste avant même d’avoir 35 ans\n\nMalgré les efforts engagés pour féminiser la filière, les effets tardent à se faire ressentir et les chiffres n’évoluent pas assez rapidement, voire reculent. Autocensure, stéréotypes, image du geek, méconnaissance du secteur ou sexisme ordinaire, culture d'entreprise non inclusive, inégalités salariales, les freins sont encore bien présents.\n\nComment rendre la filière attractive pour les femmes ? Et comment retenir les talents féminins ? Par où commencer ?\n\nL'association ESTIMnumérique vous propose de questionner vos pratiques professionnelles, identifier les biais inconscients, partager des anecdotes/expériences et trouver collectivement des solutions concrètes en faveur de la féminisation de la tech.\n\nUn atelier pratique basé sur des faits réels.",
                        "id": "feminisationdelafilierenumeriquecassonslescodes",
                        "tags": [
                            "💡 Discovery"
                        ],
                        "room": {
                            "name": "L'Atelier"
                        },
                        "speakers": [
                            {
                                "id": "melissa_cottin",
                                "name": "Mélissa Cottin",
                                "photoUrl": "https://www.festival-infolocale.fr/wp-content/uploads/Me%CC%81lissa-Cottin-1024x1024.png",
                                "company": "Association ESTIMnumérique"
                            },
                            {
                                "id": "stephanie_vachon",
                                "name": "Stéphanie vachon",
                                "photoUrl": "https://lh4.googleusercontent.com/-c7HIKgyk9M0/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckTDyxa2BrNI5au2UmNAj-8pzG02Q/photo.jpg",
                                "company": "Nantes Numérique Responsable "
                            }
                        ],
                        "type": "codelab"
                    },
                    {
                        "title": "Mission: Playwright 🎭, the Cypress killer by Microsoft",
                        "startsAt": "2023-10-19T10:00",
                        "endsAt": "2023-10-19T12:00",
                        "description": "L'heure est grave, en tant qu'agent du CYPRESS, qui s'est imposé ces dernières années en tant que leader incontournable des tests E2E, vous êtes maintenant challengés par Microsoft lui-même avec Playwright!\n\nProposant les mêmes services, il résout également tous les problèmes rencontrés par Cypress, comme: le test multi pages ou multi onglets la restriction d'iframe ou de third-parties, vous pouvez utilisez votre application tel quelle support des 3 navigateurs majeurs (chromium, firefox et webkit) support de l'API d'assertion de jest et plus récemment l'API de sélection de testing-library native typescript et async/await support\n\nVotre mission est donc simple: Espionnez ce nouvel outil pour vous faire une idée de la dangerosité qu'il apporte à Cypress et trouver les codes d'accès des secrets de Microsoft...",
                        "id": "missionplaywrightthecypresskillerbymicrosoft",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Les Machines"
                        },
                        "speakers": [
                            {
                                "id": "mathieu_mure",
                                "name": "Mathieu Mure",
                                "photoUrl": "https://lh3.googleusercontent.com/-zW9q6DSj72k/AAAAAAAAAAI/AAAAAAAAABs/_pqpmU87wFk/photo.jpg",
                                "company": "Zenika"
                            }
                        ],
                        "type": "codelab"
                    },
                    {
                        "title": "SwiftUI vs Jetpack Compose par un Ingénieur Android",
                        "startsAt": "2023-10-19T10:00",
                        "endsAt": "2023-10-19T10:50",
                        "description": "En tant que ingénieur Android, Jetpack Compose est une révolution. La confection des interfaces, la maintenance du code et la compatibilité avec les plus vieilles versions d'Android sont seulement quelques points qui font de cette librairie l'une des plus incontournables de la suite Jetpack. Mais du côté de la pomme, SwiftUI s'est aussi imposé comme une alternative incontournable dans le développement d'interface pour les appareils Apple. \n\nJe vous propose de monter sur le ring et de mettre face à face SwiftUI à ma droite et Jetpack Compose à ma gauche. Nous allons comparer leur design, leur usage, leurs différences et leurs perspectives pour avoir un vainqueur et voir qui remporte ce match.\n\nPrenez pop-corn et mauvaise foi, il va y avoir du sang !",
                        "id": "swiftuivsjetpackcomposeparuningenieurandroid",
                        "tags": [
                            "📱 Mobile"
                        ],
                        "room": {
                            "name": "Tour de Bretagne"
                        },
                        "speakers": [
                            {
                                "id": "gerard_paligot",
                                "name": "Gérard Paligot",
                                "photoUrl": "https://pbs.twimg.com/profile_images/1693219487099596800/cnuxAyox_400x400.jpg",
                                "company": "Decathlon"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "The Ethics of Generative AI",
                        "startsAt": "2023-10-19T10:00",
                        "endsAt": "2023-10-19T10:50",
                        "description": "In a brave new world filled with unattributed text, filtered images, remixed sounds, and bot-generated refurbished art, where do we find ourselves? Can we merrily maneuver through ChatGPT to generate all the written text we ever need, park on the Midjourney Discord server to gather all the art we might ever want to look at, and listen to endlessly sampled sounds that melt away into the void? How are we to find our moral bearings in a morass of an ai-generated reality? In this talk, I’ll walk through a framework around understanding various aspects of the ethics of moral philosophy, and then working backwards to understand where generative AI fits into this framework and whether we can find acceptable use cases for it. ",
                        "id": "theethicsofgenerativeai",
                        "tags": [
                            "🤖 BigData & AI"
                        ],
                        "room": {
                            "name": "Jules Verne"
                        },
                        "speakers": [
                            {
                                "id": "jen_looper",
                                "name": "Jen Looper",
                                "photoUrl": "https://user-images.githubusercontent.com/1450004/222968856-68a9cc0e-0bd2-4248-bc92-5596ae16bbdf.jpg",
                                "company": "AWS"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "WebAssembly beyond the browser",
                        "startsAt": "2023-10-19T10:00",
                        "endsAt": "2023-10-19T10:50",
                        "description": "WebAssembly (Wasm) allows you to compile code written in over 40 programming languages and run it in a secure and performant way in web browsers. The WebAssembly System Interface (WASI) has expanded the capabilities of Wasm by enabling it to run outside the web browser, such as server-side applications, edge computing, and cloud microservices. Docker has also recently announced support for Wasm, allowing it to be used as a lightweight alternative to Linux and Windows containers.\n\nWhether Wasm will replace containers remains to be seen but it’s definitely worth learning more about it. In this talk, I’ll introduce Wasm, the basic terminology around it, and its current state as a server side technology. We will also look at some examples and tools for working with Wasm on the server side.",
                        "id": "webassemblybeyondthebrowser",
                        "tags": [
                            "☁️ Cloud & DevOps"
                        ],
                        "room": {
                            "name": "Titan"
                        },
                        "speakers": [
                            {
                                "id": "mete_atamel",
                                "name": "Mete Atamel",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AAcHTtc8pAon-b1oWPLDFwzpov5qFxMx1pC7QfmU4CXQJ_A=s96-c",
                                "company": "Google"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Workshop sur l'Intégration à l'ère du cloud avec Camel Quarkus",
                        "startsAt": "2023-10-19T10:00",
                        "endsAt": "2023-10-19T12:00",
                        "description": "Dans un univers informatique dont l'expansion ne cesse d'accélérer, le besoin de faire communiquer des systèmes disparates se renforce jour après jour.\nDéveloppé en Java, le projet Open Source [Apache Camel](https://camel.apache.org/) fournit avec ses 350 connecteurs une réponse prouvée à ce besoin toujours croissant d'intégration entre systèmes.\n\nMais à l'ère du cloud, des projets comme [Quarkus](https://quarkus.io/) change complètement la donne. Simplicité de développement, démarrage d'une JVM en quelques milli-secondes, faible consommation mémoire... Comment Camel peut-il profiter de ces nouveaux avantages ? C'est tout l'objet du projet [Camel Quarkus](https://camel.apache.org/camel-quarkus/latest/) que nous aimerions faire découvrir lors de cette présentation.\n\nDans ce workshop, nous souhaitons aborder certaines notions importantes de Quarkus et Camel:\n+ Le DEV mode de Quarkus\n+ Le mode JVM de Quarkus\n+ Les routes de Camel Quarkus\n+ Les composants de Camel Quarkus\n+ Les Enterprise Integration Pattern de Camel Quarkus",
                        "id": "workshopsurlintegrationalereducloudaveccamelquarkus",
                        "tags": [
                            "☁️ Cloud & DevOps"
                        ],
                        "room": {
                            "name": "Hangar"
                        },
                        "speakers": [
                            {
                                "id": "alexandre_gallice",
                                "name": "Alexandre Gallice",
                                "photoUrl": "https://avatars.githubusercontent.com/u/22151349?v=4",
                                "company": "Red Hat"
                            },
                            {
                                "id": "kevin_dubois",
                                "name": "Kevin Dubois",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AEdFTp7YHiZYC4AAyCoqBQod3q5WDu4p1rYDFRim961q=s96-c",
                                "company": "Red Hat"
                            }
                        ],
                        "type": "codelab"
                    },
                    {
                        "title": "Break",
                        "startsAt": "2023-10-19T10:50",
                        "endsAt": "2023-10-19T11:10",
                        "description": "Break",
                        "id": "day-1-pause-2",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "break"
                    },
                    {
                        "title": "Après l'ordi 8 bit voici la carte VGA sur breadboard",
                        "startsAt": "2023-10-19T11:10",
                        "endsAt": "2023-10-19T12:00",
                        "description": "Vous avez aimé le show sur l'ordinateur 8 bit au DevFest 2022 ?\nVoici maintenant sa carte graphique VGA toujours from scratch et toujours sur breadboard et avec encore plus de fun ;)\nPréparez-vous à une fanfare 🎺 de pixels 👾",
                        "id": "apreslordi8bitvoicilacartevgasurbreadboard",
                        "tags": [
                            "📟 IoT & Hardware"
                        ],
                        "room": {
                            "name": "Titan"
                        },
                        "speakers": [
                            {
                                "id": "olivier_huber",
                                "name": "Olivier HUBER",
                                "photoUrl": "https://avatars0.githubusercontent.com/u/650681?v=4",
                                "company": "Aiven"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "MLOps : une CI/CD pour des IA fiables",
                        "startsAt": "2023-10-19T11:10",
                        "endsAt": "2023-10-19T12:00",
                        "description": "Comment garantir que les résultats d'une IA soient dénués de biais ? Comment suivre le cycle de vie des modèles d'IA ? Comment rendre intelligibles les prédictions d'une IA ?\n\nNous vous invitons, au travers d'une démo concrète de mise en place de pipelines au sein d'une chaîne MLops (le DevOps appliqué au Machine Learning), à découvrir des socles technologiques complets pour industrialiser la construction et le déploiement d'IA fiables.",
                        "id": "mlopsunecicdpourdesiafiables",
                        "tags": [
                            "🤖 BigData & AI"
                        ],
                        "room": {
                            "name": "Tour de Bretagne"
                        },
                        "speakers": [
                            {
                                "id": "ingrid_fiquet",
                                "name": "Ingrid Fiquet",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AAcHTtdZewtml1tNaeKeteDtT2CxByXlEXTv9GLtQkY2hA=s192-c-rg-br100",
                                "company": "Sopra Steria Next"
                            },
                            {
                                "id": "milan_foglia",
                                "name": "Milan Foglia",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AAcHTtcSuLzPt-hhUP2JqftlcsHfqR7Wtp2Grk4gKKIv0g=s96-c",
                                "company": "Sopra Steria"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Programmation Concurrent et Asynchrone : le point en Java 21",
                        "startsAt": "2023-10-19T11:10",
                        "endsAt": "2023-10-19T12:00",
                        "description": "Le projet Loom nous apporte les threads virtuels en Java 21, ainsi que deux API en version preview: la programmation concurrente structurée, qui propose un nouveau modèle de programmation asynchrone et les scoped values, nouveau modèle de variables thread-local. \nCette présentation fait le bilan de ces fonctionnalités, des gains que les threads virtuels apportent et des nouveaux patterns qu'ils autorisent. Ces nouveaux patterns améliorent les performances, rendent possible l'écriture de tests unitaires et vous permettent de profiler vos applications asynchrones.",
                        "id": "programmationconcurrentetasynchronelepointenjava21",
                        "tags": [
                            "📝 Languages"
                        ],
                        "room": {
                            "name": "Jules Verne"
                        },
                        "speakers": [
                            {
                                "id": "jose_paumard",
                                "name": "José Paumard",
                                "photoUrl": "https://lh3.googleusercontent.com/a-/AAuE7mCO1tTjb-bXBtSnWzo1AGC6H-uIzFdvqbKq12SmPC0",
                                "company": "Oracle"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Sous le capot des navigateurs web",
                        "startsAt": "2023-10-19T11:10",
                        "endsAt": "2023-10-19T12:00",
                        "description": "Hey ! Dis moi, tu sais comment ça fonctionne un navigateur web toi ? Le moteur de rendu, concrètement, il fait quoi ? Ça doit être sacrément compliqué de tout dessiner à l'écran non ? Allez, regardons ça ensemble !",
                        "id": "souslecapotdesnavigateursweb",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Belem"
                        },
                        "speakers": [
                            {
                                "id": "anthony_le_goas",
                                "name": "Anthony Le Goas",
                                "photoUrl": "https://pbs.twimg.com/profile_images/1450531662232793091/SWqZfLTp_400x400.jpg",
                                "company": "Zenika"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Lunch",
                        "startsAt": "2023-10-19T12:00",
                        "endsAt": "2023-10-19T14:00",
                        "description": "Lunch",
                        "id": "day-1-lunch",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "lunch"
                    },
                    {
                        "title": "Changer son environnement fullstack en un clin d'oeil avec devenv",
                        "startsAt": "2023-10-19T14:00",
                        "endsAt": "2023-10-19T16:00",
                        "description": "Peu importe la stack ou l'OS, on se retrouve toujours à devoir gérer au quotidien les packages, leurs dépendances, nos outils de développement, parfois en jonglant entre plusieurs versions. Pour certaines stacks on peut utiliser des outils spécifiques comme SDKMan ou NVM, mais quid de l’uniformisation ? On doit apprendre à manier tous ces outils ce qui n’est pas idéal…\n\nVenez découvrir Nix et Devenv pour gérer toutes vos configurations de dev sans prise de tête ! Cette paire d’outils presque magique va nous permettre de déclarer ce qu’on veut comme environnement, rendre celui-ci réplicable (fini la journée voir semaine perdue à configurer le poste du nouvel arrivant), alterner entre plusieurs stacks et ce peu importe les stacks qu’on utilise !",
                        "id": "changersonenvironnementfullstackenunclindoeilavecdevenv",
                        "tags": [
                            "📝 Languages"
                        ],
                        "room": {
                            "name": "Hangar"
                        },
                        "speakers": [
                            {
                                "id": "anthony_pena",
                                "name": "Anthony Pena",
                                "photoUrl": "https://avatars.githubusercontent.com/u/2668904?v=4",
                                "company": "SFEIR"
                            },
                            {
                                "id": "julien_tanguy",
                                "name": "Julien Tanguy",
                                "photoUrl": "https://media.licdn.com/dms/image/C4E03AQEa_WmaJEOA7g/profile-displayphoto-shrink_800_800/0/1656072888227?e=1698278400&v=beta&t=kcaM8umuyFm-jbJwv69V2EEM6w61R6opNn48SiM27lY",
                                "company": "Sfeir Nantes"
                            }
                        ],
                        "type": "codelab"
                    },
                    {
                        "title": "Comment hacker vos applications mobiles ?",
                        "startsAt": "2023-10-19T14:00",
                        "endsAt": "2023-10-19T14:50",
                        "description": "Nous utilisons tous des applications mobiles pour payer, s'authentifier ou consulter nos comptes bancaires. Etant donné la sensibilité de ces actions, nous faisons confiance aux éditeurs que sont les banques ou le service publique. Mais peut-on hacker de telles applications ou les données qu'elles contiennent ?  Yes, we can !\nQuels sont ces moyens d'attaque ? Quels sont les risques et que pouvons-nous faire pour les réduire ?\n\nLa sécurité mobile est au cœur du métier de notre équipe car nous travaillons quotidiennement à protéger les applications mobiles de nos clients. Dans cette présentation nous nous focaliserons sur le pentest (la partie offensive de notre activité) en alliant explications et démonstrations.\nCette conférence s’adresse donc à un public technique assez large : des personnes intéressées par la sécurité des applications mobiles, que ce soit simplement pour se rendre compte des attaques possibles ou bien pour les mettre en pratique.\n\nNous allons utiliser un téléphone rooté, pour analyser une application Android et la modifier grâce au reverse engineering. Ensuite, nous approfondirons l’analyse avec l'utilisation d'outils permettant de modifier dynamiquement le comportement de l'application lors de son exécution. Enfin nous évoquerons les protections à mettre en place pour éviter ces attaques.\n\nA l'issu de notre présentation, vous aurez une meilleure vision du pentest mobile et les bases nécessaires pour utiliser les outils élémentaires de ce domaine.",
                        "id": "commenthackervosapplicationsmobiles",
                        "tags": [
                            "🐱‍💻 SECURITY"
                        ],
                        "room": {
                            "name": "Belem"
                        },
                        "speakers": [
                            {
                                "id": "amelie_avignon",
                                "name": "Amélie Avignon",
                                "photoUrl": "https://lh3.googleusercontent.com/a/ALm5wu0g8WnOJudW4cMCFwkD6oZGEsWapQAbBu1_Q-U0=s96-c",
                                "company": "Worldline"
                            },
                            {
                                "id": "julien_jimenez",
                                "name": "Julien Jimenez",
                                "photoUrl": "https://media.licdn.com/dms/image/C4E03AQHV2vpoDJSCrA/profile-displayphoto-shrink_800_800/0/1657179277231?e=1698278400&v=beta&t=F6s_mkcLmK2OSCDSXaU-aEw2QLvO_FqFabWAFAoeiH4",
                                "company": "Worldline"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Construisez une Data Platform Cloud Native sur Google Cloud",
                        "startsAt": "2023-10-19T14:00",
                        "endsAt": "2023-10-19T16:00",
                        "description": "Construisons ensemble une Data Platform Cloud Native! Elle sera serverless et mettra à profit les services data de Google Cloud.\n\nAu cours de cet atelier, vous apprendrez à déployer des ressources sur GCP, à coder un micro-service d'ingestion en Python déployé dans une Cloud Function, à nettoyer les données brutes avec du SQL et à présenter un tableau de bord avec Looker Studio.\n\nC'est un tour d'horizon complet pour préparer la migration de votre Data Analytics vers le Cloud !\n\n## Au programme\n\n* Introduction & présentation des objectifs du workshop\n* Présentation des concepts du Cloud Google et des plateformes de données\n* Création de votre premier bucket de stockage et tables BigQuery\n* Conception d’une Cloud Function qui automatise le chargement de nouvelles données dans BigQuery en mode event-driven\n* Transformation des données en SQL dans BigQuery (approche ELT)\n* Réalisation d’un dashboard avec Looker Studio pour visualiser les données\n\n## Pré-Requis\n\n* Avoir quelques bases en SQL et Python (ou autre langage de votre choix : Go, Node, Java…)\n* Venir avec un ordinateur avec la CLI gcloud (https://cloud.google.com/sdk/docs/install ) installée, on va mettre les mains dans le cambouis 🧑‍🔧\n* Avoir un compte Google, vous pouvez en créer un sans adresse Gmail ici. Nous vous fournirons des crédits et un projet Google Cloud.\n* Avoir envie d’apprendre !",
                        "id": "construisezunedataplatformcloudnativesurgooglecloud",
                        "tags": [
                            "🤖 BigData & AI"
                        ],
                        "room": {
                            "name": "L'Atelier"
                        },
                        "speakers": [
                            {
                                "id": "clement_bosc",
                                "name": "Clément Bosc",
                                "photoUrl": "https://lh3.googleusercontent.com/a-/AOh14Gh8JUVcMJ1VzwLiDM5oqtY7H3NmhL-yYwDRiGFE7Q4=s96-c",
                                "company": "Stack Labs /\\\\:"
                            },
                            {
                                "id": "fabien_portes",
                                "name": "Fabien Portes",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AGNmyxYaa93xNOe5yhrpgkQN-oW1IQuZCj-fe4s_beM3Lj4=s96-c",
                                "company": "Stack Labs"
                            },
                            {
                                "id": "matthieu_grandrie",
                                "name": "Matthieu Grandrie",
                                "photoUrl": "https://lh3.googleusercontent.com/a-/AOh14Gh5AAWnLTOUCAZuunFSdaG6N41t2S_AJS_5vdgYZKYcL_cmPRmNGGJ5aYtYXSY0AyBm9nsg4fHj5vxh58tVOKO537NnHJhTZ0UQo2MBx-HTVUduz97Y788f6UcQw7xPPmEhVvs61X2xKHAa-FAqX5VmWEBg_SCodJuAAqXZnZP6GjdtSfYc3uL35rSkiSJQiFaxhrT8Ib2HNNNdJgMt8JDsrdZNLEpf3U5Rp1lRm73T5B3jUmf_8bmCPhzn_Rx6ZTHdN5dpWeFoVlm_-lDpjz-7uS-q83p2p_m7yQnwaHsC0k2E_Qjf7Z9Hh9zHN9CeyBX81NbBATXhVZHymzf-Hpf7Y5kNK3nuJmU97h6_Fz8C6Jrg73AAIdvghH882z1G55W8_aRyB1VF74SKULIzj5XG4qfuZhjJpcz86JkLHu_2t8pXcJHeLrnsivFs61WS4TDG5ujEbjh-kYqgBuTgvm26z2Rww2WtIsxBkVrEFCQdtX66469FgyBsT_03JApd8C4DbzTGRDjxIWugObrpFodqKVbFnn1w3B3mH8-NCdfyZ4aCZko375D090V4nGgPuPUUrr3k7lD8OJpqVOR7IYRUoq1QpUBNKa3wRf68NuWJKsQbxYzsKrwKOG38c7MKrBekPxRoAxp1bGPR524jpDeKysIswZWax3OJTmZgTB_GHq4fEXLOZq8cdvlfMs4YXaCAR1n01rv3cmGFXe7-cQcKV0wtYvbHS0oheiadJQccLD5SBF3wrd3gr2teNRQnxZk0Fw=s96-c",
                                "company": "Stack-Labs"
                            }
                        ],
                        "type": "codelab"
                    },
                    {
                        "title": "De startup à entreprise rentable : quel chemin pour la tech ?",
                        "startsAt": "2023-10-19T14:00",
                        "endsAt": "2023-10-19T14:50",
                        "description": "On a tous en tête l’image de la startup à succès: D’abord de l’argent tombé du ciel, une super équipe aux moyens illimités, un produit disruptif et des clients par milliers. \nMais comment faire quand le chemin devient sinueux ? Chercher à être une entreprise rentable, est-ce si facile ? Quel impact pour votre équipe ? Comment recruter, développer, gérer le support et son infrastructure avec des moyens limités ?\n\nJe vous propose une immersion de cinq ans dans une startup du monde agricole. Nous parlerons organisation, compromis, mais surtout d’humain.",
                        "id": "destartupaentrepriserentablequelcheminpourlatech",
                        "tags": [
                            "💡 Discovery"
                        ],
                        "room": {
                            "name": "Titan"
                        },
                        "speakers": [
                            {
                                "id": "ludovic_borie",
                                "name": "Ludovic Borie",
                                "photoUrl": "https://avatars1.githubusercontent.com/u/1374221?v=4",
                                "company": "Karnott"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Exploiting AWS Misconfigurations: A Capture the Flag Workshop",
                        "startsAt": "2023-10-19T14:00",
                        "endsAt": "2023-10-19T16:00",
                        "description": "Are you ready to become a hacker and try to exploit vulnerabilities in the Cloud?\nThen join us for our exciting Capture the Flag workshop where you’ll learn about the dangers of AWS environments configurations pitfalls and how to exploit them.\n\nThis workshop will cover the following topics: S3, EC2 instance, Lambda code injection, IAM privesc, Policy rollback, ...\n\nBy the end of this workshop, you will have a better understanding of the potential misconfigurations impact on your own AWS infrastructures and the steps you can take to secure them.\n\n## Prerequisite\nAs we cannot cover for the expense of multiple AWS environments, this workshop requires you to have a working AWS account with admin privileges and have Terraform installed on your laptop.\nWe will provide you a Terraform script to deploy a vulnerable by design AWS environment, but fear not, it will only be accessible by your IP, and will be destroyed at the end of the workshop.\n",
                        "id": "exploitingawsmisconfigurationsacapturetheflagworkshop",
                        "tags": [
                            "🐱‍💻 SECURITY"
                        ],
                        "room": {
                            "name": "Les Machines"
                        },
                        "speakers": [
                            {
                                "id": "ben",
                                "name": "Ben",
                                "photoUrl": "https://lh6.googleusercontent.com/1zCaz-rAqhZqJc8eX4sXhVMN5FB7EqUIypKCtl9k52L2pa0dOxzRL2oDcfO4N3QhzM0=w2400",
                                "company": "PayFit"
                            },
                            {
                                "id": "jean_verrons",
                                "name": "jean verrons",
                                "photoUrl": "https://lh4.googleusercontent.com/-cE4tKae2QXfhqbsmD7Qf5mk9pqrbVrgxBeyogM1m21JPbDi0VkMOlCXwCHjKuFqaHI=w2400",
                                "company": null
                            }
                        ],
                        "type": "codelab"
                    },
                    {
                        "title": "La compression Web : comment (re)prendre le contrôle ?",
                        "startsAt": "2023-10-19T14:00",
                        "endsAt": "2023-10-19T14:50",
                        "description": "Saviez-vous que toute la journée, nos serveurs compressent nos réponses HTTP et que nos navigateurs les décompressent ? C'est comme si on passait notre temps à plier des T-shirts et à les déplier. Cette compression est partout sur le Web, et pourtant ses subtilités nous échappent souvent. On compresse des formats qui n'en ont pas besoin, on compresse à la volée des fichiers statiques, on n'adopte pas les nouveaux algorithmes... Bref, on remplit les tuyaux d'internet plus que nécessaire, comme si on remplissait notre valise de chaussettes en boule.\n\nMais rassurez-vous, il y a de l'espoir ! Dans cette session, nous allons (re)découvrir la compression pour le Web. Nous vous présenterons les principaux algorithmes de compression comme gzip et brotli, ainsi que les techniques sous-jacentes. Nous aborderons également la négociation de contenu entre les serveurs et les navigateurs.\n\nEnfin, nous partagerons avec vous des bonnes pratiques à adopter pour éviter les mauvaises surprises : des exemples concrets, des mesures et quelques astuces pour améliorer les performances de votre site web. Car, oui, optimiser la compression de vos données, c'est un peu comme optimiser votre valise avant de partir en vacances : vous gagnez de la place, vous êtes plus efficace, et vous évitez de criser sur cette satanée fermeture éclair qui ne veut pas se fermer !",
                        "id": "lacompressionwebcommentreprendrelecontrole",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Jules Verne"
                        },
                        "speakers": [
                            {
                                "id": "antoine_caron",
                                "name": "Antoine CARON",
                                "photoUrl": "https://www.lyonjs.org/orgas/antoine.jpg",
                                "company": "Scaleway"
                            },
                            {
                                "id": "hubert_sablonniere",
                                "name": "Hubert SABLONNIERE",
                                "photoUrl": "https://lh3.googleusercontent.com/-zULkNj_mgrE/AAAAAAAAAAI/AAAAAAAAmiM/s1x33T4pEBo/photo.jpg",
                                "company": "Clever Cloud"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "The laundromat : quand les journalistes deviennent data analystes",
                        "startsAt": "2023-10-19T14:00",
                        "endsAt": "2023-10-19T14:50",
                        "description": "De 1972 avec l’affaire du Watergate à 2016, date à laquelle sont publiés les premiers articles relatifs aux Panama papers, le journalisme d’investigation évolue et s’enrichit de nouvelles sources de données et de nouveaux outils. Une ère nouvelle émerge, celle du data journalism.\nArmés d’exemples concrets, venez prendre conscience de l’importance de l’usage dans la data dans l’observation de faits et d’analyse de l’actualité.\nQuel est le profil de ces nouveaux journalistes? Ont-ils des formations particulières, des méthodes et outils de prédilection ?\nEt si vous même deveniez, à votre échelle, un citoyen informé et engagé ? De la découverte de sources de données avec lesquelles débuter, l’élaboration d’une démarche d’analyse à la maîtrise de quelques outils de base, récupérez un kit de démarrage pour débunker quelques news ou des phénomènes de société.",
                        "id": "thelaundromatquandlesjournalistesdeviennentdataanalystes",
                        "tags": [
                            "💡 Discovery"
                        ],
                        "room": {
                            "name": "Tour de Bretagne"
                        },
                        "speakers": [
                            {
                                "id": "antoine_bonneau",
                                "name": "Antoine Bonneau",
                                "photoUrl": "https://lh6.googleusercontent.com/-to_aRrSbIvc/AAAAAAAAAAI/AAAAAAAAABQ/QepXzz8WcD0/photo.jpg",
                                "company": "zenika"
                            },
                            {
                                "id": "guillaume_renaudin",
                                "name": "Guillaume Renaudin",
                                "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocIpwp7fqdYxqlmHNCHGZe2YmfBrwxAvJSoVHwTkqphM7g=s576-c-no",
                                "company": "Zenika"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Break",
                        "startsAt": "2023-10-19T14:50",
                        "endsAt": "2023-10-19T15:10",
                        "description": "Break",
                        "id": "day-1-pause-3",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "break"
                    },
                    {
                        "title": "Devenez l’Élu et maitrisez la Matrice AWS 🦸‍♂️",
                        "startsAt": "2023-10-19T15:10",
                        "endsAt": "2023-10-19T16:00",
                        "description": "Entrez, suivez le lapin blanc 🐰 et venez découvrir les étapes qui nous ont permis de vaincre l’Agent Smith 🕵️🕵️ !\n\nÀ bord du Nebuchadnezzar 🚀, vous aurez un aperçu des préconisations AWS pour mettre en œuvre une architecture multi-comptes et une segmentation forte de la couche réseau.\n\nEn suivant le Maître des Clés 🗝️, il vous expliquera comment ouvrir les portes de la Matrice grâce au SSO.\n\nQuant à l'Oracle 🔮, elle vous prédira un avenir incertain sur les coûts.\n\nQuelle pilule choisirez-vous ? 💊 Prenez la bleue, l'histoire s'arrête là. Vous vous réveillez dans votre lit, et vous continuez de suivre naïvement les recommandations AWS. Prenez la rouge, vous restez au Pays des Merveilles et nous vous montrons jusqu'où l’optimisation peut aller.\n",
                        "id": "devenezleluetmaitrisezlamatriceaws",
                        "tags": [
                            "☁️ Cloud & DevOps"
                        ],
                        "room": {
                            "name": "Belem"
                        },
                        "speakers": [
                            {
                                "id": "arthur_guyader",
                                "name": "Arthur Guyader",
                                "photoUrl": "https://media.licdn.com/dms/image/C5603AQGxeHfbexXDMQ/profile-displayphoto-shrink_400_400/0/1573335499516?e=1700697600&v=beta&t=e9-OE2oZWHlu9l4d4GJC5AdcYNc9JAOU9ZZYwqkrsjk",
                                "company": "RCA"
                            },
                            {
                                "id": "guillaume_membre",
                                "name": "Guillaume Membré",
                                "photoUrl": "https://lh5.googleusercontent.com/-_wR1F6ARzlY/AAAAAAAAAAI/AAAAAAAAABA/sL5Sk_m1uWA/photo.jpg",
                                "company": "Zenika"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Et si l'IA était la solution pour comprendre la langue des signes ?",
                        "startsAt": "2023-10-19T15:10",
                        "endsAt": "2023-10-19T16:00",
                        "description": "Dans le domaine de l'Intelligence Artificielle, nous parlons souvent de Computer Vision et d'Object Detection, mais au final que signifient ces termes et surtout comment peuvent-ils nous aider dans la vie courante ?\n\nDurant ce talk nous allons tout d'abord tenter de comprendre la place qu'occupe l'IA dans le vaste domaine de la santé. Nous montrerons ensuite l'importance de la donnée et nous développerons une app capable de détecter et d'interpréter la langue des signes.\n\nCe talk montrera comment il est possible de traiter la donnée avec du traitement d'image pour enrichir ses données d'entraînement.\n\nLa seconde étape consistera à entraîner un modèle de détection d'objets à reconnaître les différents signes de l'alphabet ASL (American Sign Language) au travers d'un notebook Jupyter. .\n\nUne fois le  modèle construit et entrainé quoi de mieux que de créer ensemble une application ? Cette dernière sera basée sur les technologiques Cloud et container et nous verrons comment créer et déployer un tel outil.\nBien sûr, pour finalement, permettre à quiconque de comprendre la langue des signes avec une détection en temps réel et une transcription écrite, puis orale.",
                        "id": "etsiliaetaitlasolutionpourcomprendrelalanguedessignes",
                        "tags": [
                            "🤖 BigData & AI"
                        ],
                        "room": {
                            "name": "Titan"
                        },
                        "speakers": [
                            {
                                "id": "elea_petton",
                                "name": "Eléa Petton",
                                "photoUrl": "https://avatars.githubusercontent.com/u/78957502?v=4",
                                "company": "OVHcloud"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Expand your view of your application performance with OpenTelemetry",
                        "startsAt": "2023-10-19T15:10",
                        "endsAt": "2023-10-19T16:00",
                        "description": "**FRENCH TALK**\n\nOpenTelemetry is a powerful open-source **observability framework** that provides a unified way to collect, process, and export telemetry data from distributed systems. In this talk, we will explore the capabilities of OpenTelemetry and demonstrate how it can be used to gain deep insights into the performance and behavior of complex applications.\n\nDuring the **live demonstration**, we will showcase how OpenTelemetry can be used to instrument a sample application and collect metrics, traces, and logs. We will explore the different components of OpenTelemetry, including the SDKs, the collector, and the exporters, and demonstrate how they work together to provide a comprehensive view of application performance.\n\nWe will also showcase how OpenTelemetry can be integrated with other observability tools, such as **Jaeger**, **Prometheus**, **Uptrace** and **Elastic APM**.\n\nThroughout the talk, we will provide tips and best practices for using OpenTelemetry effectively, including how to choose the right instrumentation and how to configure the collector and exporters for optimal performance.\n\nBy the end of this talk, attendees will have a deep understanding of the capabilities of OpenTelemetry and how it can be used to gain insights into complex applications. They will also be equipped with the knowledge necessary to start using OpenTelemetry in their own applications and take advantage of its powerful observability capabilities.",
                        "id": "expandyourviewofyourapplicationperformancewithopentelemetry",
                        "tags": [
                            "☁️ Cloud & DevOps"
                        ],
                        "room": {
                            "name": "Tour de Bretagne"
                        },
                        "speakers": [
                            {
                                "id": "damien_raude_morvan",
                                "name": "Damien Raude-Morvan",
                                "photoUrl": "https://media.licdn.com/dms/image/C4E03AQEGXq0SAdQ5JA/profile-displayphoto-shrink_800_800/0/1517753829724?e=1698278400&v=beta&t=e6Qug_2vXBVD0DfYY881W5ZCxow179uu_IvJlwwfaBw",
                                "company": "Decathlon"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Modern Web Debugging with DevTools",
                        "startsAt": "2023-10-19T15:10",
                        "endsAt": "2023-10-19T16:00",
                        "description": "In this talk, Jecelyn from the Chrome DevTools team will walk you through the state of debugging and latest improvements in Chrome DevTools.",
                        "id": "modernwebdebuggingwithdevtools",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Jules Verne"
                        },
                        "speakers": [
                            {
                                "id": "jecelyn_yeen",
                                "name": "Jecelyn Yeen",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AGNmyxb_JlLu19P-1e6cUOLnt_c7hoUJdAjRwaUdrCGQ=s96-c",
                                "company": "Google"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Break",
                        "startsAt": "2023-10-19T16:00",
                        "endsAt": "2023-10-19T16:20",
                        "description": "Break",
                        "id": "day-1-pause-4",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "break"
                    },
                    {
                        "title": "Escape Camp 🏃🏕️, Le making of 🎬",
                        "startsAt": "2023-10-19T16:20",
                        "endsAt": "2023-10-19T18:30",
                        "description": "**Un codelab original où vous devrez deviner ce que vous allez coder.**\n\nUn seul objectif, s'amuser en codant un escape game qui démontre des concepts souvent méconnus ou sous-utilisés dans les applications aujourd'hui.\n\n_Prérequis :_ un IDE pour coder en Kotlin, IntelliJ Community Edition de préférence, Postman ou autre pour tester votre l'api Rest\n",
                        "id": "escapecamplemakingof",
                        "tags": [
                            "💡 Discovery"
                        ],
                        "room": {
                            "name": "Les Machines"
                        },
                        "speakers": [
                            {
                                "id": "gregory_bevan",
                                "name": "Grégory Bévan",
                                "photoUrl": "https://lh6.googleusercontent.com/-rQbmsaYUNxY/AAAAAAAAAAI/AAAAAAAAAAs/XyvhmkEclqs/photo.jpg",
                                "company": "Zenika"
                            },
                            {
                                "id": "jeremy_lejeune",
                                "name": "Jérémy Lejeune",
                                "photoUrl": "https://lh4.googleusercontent.com/-YW-wpZdJkrk/AAAAAAAAAAI/AAAAAAAAAAA/ACevoQPWmdnLhRJYTKKsHRXZxlcyRJSGgA/mo/photo.jpg",
                                "company": "Zenika"
                            },
                            {
                                "id": "william_bartlett",
                                "name": "William Bartlett",
                                "photoUrl": "https://i.ibb.co/wrFNxYT/Photo-2023-square.webp",
                                "company": "Zenika"
                            }
                        ],
                        "type": "codelab"
                    },
                    {
                        "title": "Hydration, Islands, Streaming, Resumability… Oh My!",
                        "startsAt": "2023-10-19T16:20",
                        "endsAt": "2023-10-19T17:10",
                        "description": "Our ecosystem can be overwhelming! First, we had the rise of SSR and SSG—and each had its own gigantic pile of frameworks and tools. Then partial hydration enabled us to hydrate only some of our components on the client, which we've seen in React Server Components. \n\nBut what about islands? Do they relate at all to Streaming SSR? Moreover, what is resumability, and why do I keep hearing about it? […] Oh, did anyone say rendering on the Edge?\n\nWell… There are many approaches out there, and all of them argue that their philosophy is best. In this session, we’ll go over these architecture/rendering patterns, to help shed some light on how some are implemented and the concepts behind them.",
                        "id": "hydrationislandsstreamingresumabilityohmy",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Tour de Bretagne"
                        },
                        "speakers": [
                            {
                                "id": "matheus_albuquerque",
                                "name": "Matheus Albuquerque",
                                "photoUrl": "https://i.ibb.co/Db54PQt/matheus.jpg",
                                "company": "Medallia"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Les meilleurs outils de dev sont-il dans le Cloud?",
                        "startsAt": "2023-10-19T16:20",
                        "endsAt": "2023-10-19T17:10",
                        "description": "Si le problème du \"Works on my machine\" a été réglé par Docker, alors pourquoi passe-t-on encore plusieurs heures et parfois plusieurs jours à configurer son poste de développement?\n\nDans cette session nous allons passer en revue les différentes options désormais offertes aux développeurs, depuis l'installation d'un environnement complet sur un poste de travail, au développement SSH pur et dur, en passant par les IDE full Web, et enfin aux environnements partagés entre une partie locale et une partie serveur. \n\nOn pourra ainsi comparer les bénéfices de ces différentes solutions en fonction des contraintes de développement d'une équipe donnée (sa taille, le type de projet, les technos utilisées, ...).\n\nQuelque soit le langage de programmation que vous utilisez, que vous fassiez du front web ou du back cloud, vous vous devez d'avoir les meilleurs outils pour concilier productivité et travail en équipe.\n\nAlors, GitPod, Cloud9, Eclipse Theia, VS Code Remote Dev via SSH, ou JetBrains Gateway?",
                        "id": "lesmeilleursoutilsdedevsontildanslecloud",
                        "tags": [
                            "☁️ Cloud & DevOps"
                        ],
                        "room": {
                            "name": "Jules Verne"
                        },
                        "speakers": [
                            {
                                "id": "alexis_moussine_pouchkine",
                                "name": "Alexis Moussine-Pouchkine",
                                "photoUrl": "https://lh4.googleusercontent.com/-lhM21yfjURo/AAAAAAAAAAI/AAAAAAAAU44/ZvWlMXFvwpc/photo.jpg",
                                "company": "Google"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Mais au fait, que se passe-t-il quand je mets en ligne une vidéo ?",
                        "startsAt": "2023-10-19T16:20",
                        "endsAt": "2023-10-19T17:10",
                        "description": "Pour proposer une expérience optimale de streaming vidéo, mettre un fichier `.mp4` sur un serveur web ne suffit pas.\n\nDans ce talk nous aborderons les grands challenges du streaming vidéo et les solutions techniques actuelles avec des exemples visuels et vulgarisés.\n\nVous découvrirez:\n- comment fonctionne un codec\n- la chaine Over The Top (OTT)\n- les différences entre le live et la VOD\n- comment la qualité de la vidéo se dégrade à cause d'une connexion lente\n- comment fonctionne la diffusion live à faible latence",
                        "id": "maisaufaitquesepassetilquandjemetsenligneunevideo",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Belem"
                        },
                        "speakers": [
                            {
                                "id": "antoine_wacheux",
                                "name": "Antoine Wacheux",
                                "photoUrl": "https://pbs.twimg.com/profile_images/1591071618884931586/HLextC7G_400x400.jpg",
                                "company": "Amazon Web Services"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Voyage au coeur d'Appwrite : le backend open-source qui challenge Firebase 🧳",
                        "startsAt": "2023-10-19T16:20",
                        "endsAt": "2023-10-19T18:30",
                        "description": "Bienvenue à bord du grand voyage, destination : l'univers du backend open-source ! Êtes vous prêts pour cette aventure au cœur d'Appwrite, la solution qui défie le géant déjà bien connu Firebase ? 🛫\n\nAu cours de cette aventure, vous découvrirez les fondamentaux d'Appwrite, de la mise en place de l'environnement à l'exploration de fonctionnalités plus avancées. Nous parcourrons ensemble les différents services de base qui font d'Appwrite l'outil indispensable pour tout développeur à la recherche d'un backend facile à utiliser et performant 🚀\n\nPrenez votre courage à deux mains et embarquez avec nous pour une expérience inoubliable au cœur de l'écosystème Appwrite ! 👨🏼‍✈️\n\nPour les prérequis techniques, il vous suffit d'avoir votre machine ! 💻 L'application du workshop est développée en React avec Next.JS, mais vous n’avez pas besoin de savoir utiliser ces technologies pour faire cet atelier, des bases en JS sont cependant requises pour comprendre certains concepts abordés, et profiter au maximum de ce que l'on vous a préparé ! 😎",
                        "id": "voyageaucoeurdappwritelebackendopensourcequichallengefirebase",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Hangar"
                        },
                        "speakers": [
                            {
                                "id": "lucas_audart",
                                "name": "Lucas AUDART",
                                "photoUrl": "https://ca.slack-edge.com/T02ARLB3P-U02H7C4H6PJ-eb62023feb1e-512",
                                "company": "Zenika"
                            },
                            {
                                "id": "mickael_alves",
                                "name": "Mickaël Alves",
                                "photoUrl": "https://ca.slack-edge.com/T108ZKPMF-U02G81CC29M-677392b14927-512",
                                "company": "Zenika"
                            }
                        ],
                        "type": "codelab"
                    },
                    {
                        "title": "Dogmes et Design Systems, comment faire autrement",
                        "startsAt": "2023-10-19T16:20",
                        "endsAt": "2023-10-19T17:10",
                        "description": "Comment se lancer dans la création et la maintenance d’un Design System ? Aujourd’hui les injonctions sont multiples et fusent de toute part : il faut mettre en place des tokens, il faut avoir une équipe dédiée, il faut embaucher un manager dédié, il faut trouver un nom sympa, il faut, il faut…\n\nOr, il existe rarement une seule façon de faire dans la vie et encore moins en entreprise. Notre Design System ne coche aucune de ces cases. Pourtant il vient de souffler ses 9 bougies, nous permet de concevoir des expériences produit des plus simples aux plus complexes, et d’adopter une pensée plus systémique sur l’ensemble de nos services.\n\nDans cette conférence, nous vous invitons à prendre un recul critique sur le sujet des Design Systems et partagerons les leçons tirées de ces années d'expérimentations et de pragmatisme. Nous parlerons également d'adoption, de gouvernance, et de la diffusion cet état d'esprit en entreprise pour établir des patterns à grande échelle.",
                        "id": "werenotdoingdesignsystemsproperlyandthatsokay",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Titan"
                        },
                        "speakers": [
                            {
                                "id": "morgane_peng",
                                "name": "Morgane Peng",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AGNmyxasWsF1Xmlh-QUMvx8Wza78VFICCxVbpqqE0Z3Jpg=s96-c",
                                "company": "Société Générale"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Xtrem TDD par l'exemple",
                        "startsAt": "2023-10-19T16:20",
                        "endsAt": "2023-10-19T18:30",
                        "description": "Xtrem T.D.D c'est : \n- 1 base de connaissance permettant de comprendre des pratiques craft de développement\n- 1 code kata permettant de mettre en pratique pas moins de 13 de ces pratiques\n- 1 escape game à base de cartes permettant de faciliter le code kata\nle tout en Open Source.\n\nDurant, cet atelier nous vous proposons de découvrir certaines de ces pratiques qui nous ont sauvé la vie (tout du moins celle de notre code) des centaines de fois: \n- le mutation testing\n- l'utilisation de monades plutôt que d'exceptions\n- l'immutabilité\n\nVous les expérimenterez par vous-mêmes dans un environnement sûr (pas du code de production et sans jugement) dans le langage de votre choix (java, C#, scala).\n\nVous ressortirez de cette session avec de nouveaux réflexes et l'envie de mettre en pratique ces découvertes au plus vite.\n\n<img alt=\"Xtrem TDD explained\" src=\"https://github.com/les-tontons-crafters/xtrem-tdd-money-kata/blob/main/docs/img/xtrem-tdd.png?raw=true\" width=\"900\" style=\"max-width: 90%\" />",
                        "id": "xtremtddparlexemple",
                        "tags": [
                            "💡 Discovery"
                        ],
                        "room": {
                            "name": "L'Atelier"
                        },
                        "speakers": [
                            {
                                "id": "guillaume_faas",
                                "name": "Guillaume Faas",
                                "photoUrl": "https://avatars.githubusercontent.com/u/59444272?v=4",
                                "company": "Vonage"
                            },
                            {
                                "id": "yoan_thirion",
                                "name": "Yoan Thirion",
                                "photoUrl": "https://pyxis-suisse.ch/wp-content/uploads/2023/05/Yoan-T.png",
                                "company": "Pyxis Suisse"
                            }
                        ],
                        "type": "codelab"
                    },
                    {
                        "title": "Break",
                        "startsAt": "2023-10-19T17:10",
                        "endsAt": "2023-10-19T17:20",
                        "description": "Break",
                        "id": "day-1-pause-5",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "break"
                    },
                    {
                        "title": "Jeux de données de mes environnements hors production : construction ou anonymisation ? ",
                        "startsAt": "2023-10-19T17:20",
                        "endsAt": "2023-10-19T17:40",
                        "description": "A chaque fois, que nous devons déployer une plate forme, nous nous posons l'éternelle question : quels jeux de données nous allons utiliser pour valider les développements sur les environnements hors production, et surtout comment allons nous générer ces jeux de données.\n\nDans cette présentation, nous explorerons les différentes techniques d'anonymisation des données disponibles dans GCP et nous mettrons en avant l'utilisation de deux outils clés : GCP DLP et Dataflow. Nous discuterons des avantages et des limitations de chaque méthode, et nous présenterons des cas d'utilisation pratiques pour l'anonymisation des données dans des scénarios réels.\n\nDans le cadre de la présentation, nous ferons une introduction à l'anonymisation des données et son importance dans la conformité aux réglementations, puis nous rentrerons dans le concret en mettant en scene \"GCP Data Loss Prevention (DLP)\" pour l'anonymisation des données sensibles et \"GCP Dataflow\" pour générer dynamiquement des données synthétiques et anonymisées. ",
                        "id": "jeuxdedonneesdemesenvironnementshorsproductionconstructionouanon",
                        "tags": [
                            "☁️ Cloud & DevOps"
                        ],
                        "room": {
                            "name": "Tour de Bretagne"
                        },
                        "speakers": [
                            {
                                "id": "alexis_legros",
                                "name": "Alexis LEGROS",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AGNmyxZJWQ8NsqUOb5_YGw7-HGoKby5msW0lVnM2oLy2=s96-c",
                                "company": "Sogeti"
                            },
                            {
                                "id": "tjarriault",
                                "name": "TJarriault",
                                "photoUrl": "https://avatars.githubusercontent.com/u/7701382",
                                "company": "CAPGEMINI "
                            }
                        ],
                        "type": "quickie"
                    },
                    {
                        "title": "Le Second Brain,  pourquoi et comment il peut changer votre vie.",
                        "startsAt": "2023-10-19T17:20",
                        "endsAt": "2023-10-19T17:40",
                        "description": "Aujourd'hui, l'organisation fait partie intégrante du métier de développeur, notre domaine évolue très vite, entre ce qu'on nous demande en passant dans un couloir, les mails qu'on reçoit à la pelle et les 35 idées de side projects qu'on a par jour, tout ça sans parler de la veille technique, il est facile de se sentir accablé et s'épuiser mentalement.\n\nLe fait est que nous n'avons qu'un seul cerveau et qu'il faut faire avec... ou pas !\n\nPas la peine de taper \"Greffe de cerveau\" sur Google, ce n'est pas de ça que nous allons parler.\n\nLe Second Brain, littéralement un second cerveau est une méthode d'organisation pour réduire sa charge mentale et se créer un espace virtuel où centraliser ses idées et organiser ses projets de manière efficace.\n\nDécouvrons ensemble les principes, méthodes et outils pour bâtir son propre Second Brain et arrêter d'avoir une cocotte minute à la place de la tête.\n\nEn utilisant le système CODE, la méthode PARA - suggérées par Tiago Forte, pionnier du Second Brain - et grâce aux bons logiciels, vous aurez toutes les clés pour bâtir une base solide pour votre propre Second Brain.",
                        "id": "lesecondbrainpourquoietcommentilpeutchangervotrevie",
                        "tags": [
                            "💡 Discovery"
                        ],
                        "room": {
                            "name": "Titan"
                        },
                        "speakers": [
                            {
                                "id": "samuel_nait",
                                "name": "Samuel NAIT",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AAcHTtcwyQRXBJmRj0rhO-tYZlzKoWiBOmiOZ26AB3BqbQ=s96-c",
                                "company": "Samuel NAIT (Freelance)"
                            }
                        ],
                        "type": "quickie"
                    },
                    {
                        "title": "Towards a 'carbon-aware' cloud.",
                        "startsAt": "2023-10-19T17:20",
                        "endsAt": "2023-10-19T17:40",
                        "description": "The cloud holds a dirty secret: it generates as much greenhouse gas emissions as entire countries like France or the United Kingdom ([IEA, 2021](https://www.iea.org/reports/data-centres-and-data-transmission-networks)). But there is hope! Infra & Cloud teams have the power to mitigate this issue. By simply choosing the right cloud region on platforms like GCP, Azure, or AWS, emissions can be reduced by a factor of 10 or even 20.\n\nIn this talk, we will explore the regulatory landscape and financial incentives driving organizations to tackle their cloud's carbon footprint. I will show practical techniques to measure and estimate emissions using observability tools, with live data. Then, I will talk about concrete strategies to minimize your infrastructure's carbon impact.\n\nI will introduce the concept of a \"carbon-aware\" infrastructure that dynamically self-adjusts according to its own emission levels. Explore how to intelligently schedule resource-intensive tasks, targeting regions with low-carbon intensity or delaying them until better weather conditions. Eventually, I will show how we can shrink or move an infrastructure where electricity is \"greener,\" automatically.\n\nBy transforming your cloud into a carbon-aware infrastructure, you can make a huge environmental impact while keeping good performance.",
                        "id": "towardsacarbonawarecloud",
                        "tags": [
                            "☁️ Cloud & DevOps"
                        ],
                        "room": {
                            "name": "Jules Verne"
                        },
                        "speakers": [
                            {
                                "id": "olivier_bierlaire",
                                "name": "Olivier Bierlaire",
                                "photoUrl": "https://avatars.githubusercontent.com/u/2562534?v=4",
                                "company": "Carbonifer / Elastic"
                            }
                        ],
                        "type": "quickie"
                    },
                    {
                        "title": "Woop woop assassin de la police...",
                        "startsAt": "2023-10-19T17:20",
                        "endsAt": "2023-10-19T17:40",
                        "description": "... Woop woop #$%* la police !\n\nLes **polices de glyphs** sont la solution la plus courante pour **intégrer des icônes** sur nos sites et nos applications.\n\nEt pourtant cette méthode pose de **nombreux problèmes** :\n- Côté **écoconception et performance** : souvent des polices de glyph de plusieurs centaines de kilos sont chargées pour n'utiliser qu’un nombre très limité d’icônes.\n- Côté **accessibilité** : si elles sont mal intégrées elles peuvent provoquer des restitutions très surprenantes.\n- Côté **maintenance et optimisation de code** : les polices de glyphs customs peuvent vite devenir un enfer à gérer et à maintenir.\n\nEt si ensemble on #$%*ait la police ?\n\nDurant ce quickie je vous présenterais les différentes méthodes pour  **gérer vos bibliothèques d’icônes sans police de Glyph en utilisant à la place des SVG de façon optimisée et accessible**.\n",
                        "id": "woopwoopassassindelapolice",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Belem"
                        },
                        "speakers": [
                            {
                                "id": "francois_xavier_lair",
                                "name": "François-Xavier Lair",
                                "photoUrl": "https://gravatar.com/avatar/104f6c81f962a3525317dfcb58648d3e",
                                "company": "onepoint"
                            }
                        ],
                        "type": "quickie"
                    },
                    {
                        "title": "Break",
                        "startsAt": "2023-10-19T17:40",
                        "endsAt": "2023-10-19T17:50",
                        "description": "Break",
                        "id": "day-1-pause-6",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "break"
                    },
                    {
                        "title": "asdf, un outil pour toutes vos versions",
                        "startsAt": "2023-10-19T17:50",
                        "endsAt": "2023-10-19T18:30",
                        "description": "Revenons quelques années en arrière...\n\n- Aout 2020, sortie de Terraform 0.13, votre nouveau projet saute dessus et l'utilise!\n\n- Juin 2021, sortie de Terraform 1.0, pile au moment de déployer cette nouvelle infra, c'est parfait ! Pour votre ancien projet par contre, c'est un breaking change, il va falloir installer tfenv pour gérer les 2 versions..\n\n- Avril 2022, sortie de NodeJS 18, parfait pour démarrer votre side-project ! Dommage pour votre ancienne librairie JS, bloqué en NodeJS 14, il va falloir installer nvm pour gérer les 2 versions, plus de temps pour faire la mise à jour..\n\nFatigué de devoir installer 50 outils différents pour changer de version de node/java/terraform/... ? \n\nVous aimeriez trouver un outil pour gérer de la même façon toutes les versions de vos outils, voir créer vos propres plugin pour gérer les versions de votre nouvel outil ? \n\nVenez à la rencontre d'asdf et voyons comment il pourra vous aider au quotidien !\n",
                        "id": "asdfunoutilpourtoutesvosversions",
                        "tags": [
                            "📝 Languages"
                        ],
                        "room": {
                            "name": "Tour de Bretagne"
                        },
                        "speakers": [
                            {
                                "id": "sylvain_metayer",
                                "name": "Sylvain METAYER",
                                "photoUrl": "https://avatars.githubusercontent.com/u/8873695",
                                "company": "onepoint"
                            }
                        ],
                        "type": "quickie"
                    },
                    {
                        "title": "Design System en pilote automatique : du design à la production",
                        "startsAt": "2023-10-19T17:50",
                        "endsAt": "2023-10-19T18:30",
                        "description": "Du designer au développeur, quelques intégrations suffisent à simplifier le quotidien de tous pour garder un design system synchronisé avec le design, avoir une unicité de couleurs entre les applications web/mobiles ou encore faciliter un changement de marque.\n\nDans cette présentation, nous explorerons la mise en place d'un flux de travail qui automatise le partage des design tokens depuis Figma, jusqu'à leur utilisation finale dans des applications web et mobiles via un design system. \n\nSans entrer dans les détails techniques, nous parcourrons étape par étape ce processus d’automatisation qui pourra vous donner des idées et des inspirations pour automatiser le flux de travail de votre design system.\n",
                        "id": "designsystemenpiloteautomatiquedudesignalaproduction",
                        "tags": [
                            "💚 UX / UI"
                        ],
                        "room": {
                            "name": "Jules Verne"
                        },
                        "speakers": [
                            {
                                "id": "lauriane_anthony",
                                "name": "Lauriane Anthony",
                                "photoUrl": "https://i.ibb.co/vXyX0XR/2018-07-19-Copie.jpg",
                                "company": "Swile"
                            }
                        ],
                        "type": "quickie"
                    },
                    {
                        "title": "Des secrets dans les pixels ! À la découverte de la stéganographie",
                        "startsAt": "2023-10-19T17:50",
                        "endsAt": "2023-10-19T18:30",
                        "description": "Quand je parle de stéganographie, j'ai en général deux réactions :\n\n1. La stéga-quoi ?\n2. Ah oui, la technique d'écriture rapide ! (non, c'est la *sténographie*, ça 😉 !) \n\nLa stéganographie, c'est un peu le jumeau obscur de la cryptographie.\n\nLes deux cherchent à protéger un message confidentiel. \n\nLa cryptographie chiffre le message, la stéganographie le dissimule.\n\nJe vous propose de voir comment exploiter des \"objets numériques du quotidien\", tels que des images et du texte, afin de faire transiter toutes sortes de données au vu (mais pas au su) de tous !",
                        "id": "dessecretsdanslespixelsaladecouvertedelasteganographie",
                        "tags": [
                            "💡 Discovery"
                        ],
                        "room": {
                            "name": "Belem"
                        },
                        "speakers": [
                            {
                                "id": "sonia_seddiki",
                                "name": "Sonia Seddiki",
                                "photoUrl": "https://lh3.googleusercontent.com/a-/AOh14GgSLiScwN2Sftnyc6lF_J9nUPQqlswAA8eyi0IZnA=s96-c",
                                "company": "Pitchy"
                            }
                        ],
                        "type": "quickie"
                    },
                    {
                        "title": "Lazy Hydrate, Never Hydrate, Resumable JS : les astuces des frameworks pour réduire le Total Blocking Time",
                        "startsAt": "2023-10-19T17:50",
                        "endsAt": "2023-10-19T18:30",
                        "description": "Le Total Blocking Time est la métrique qui pèse le plus dans votre score Lighthouse, avec 30% de la note finale. Que vous soyez curieux de comprendre ce qui se cache derrière cet indicateur ou que vous vous soyez déjà cassé les dents à essayer de l’optimiser, ce talk est pour vous !\n\nLe rendu Server-Side Rendering (SSR) de frameworks front comme React ou Vue permet d’afficher une page HTML pré-construite. Cela optimise le Largest Contentful Paint et le Cumulative Layout Shift. Cependant, une fois cette première étape d’affichage réalisée, il reste à rendre le site dynamique : c’est la phase d’hydratation. Cette phase instancie l’ensemble des composants de la page avec leurs données et tous les listeners associés.\n\nComment mesurer l’impact de cette phase sur le Total Blocking Time ? Est-ce que l’hydratation est la seule source de blocking time ? Comment mettre concrètement en pratique la recommandation d’alléger le thread principal ? Quelle est la réponse à cette lourde phase d’hydratation proposée par les framework front les plus récents comme Astro ou Qwik ?\n\nJe vous propose de répondre à ces questions au travers d’exemples concrets tirés de 6 mois d’accompagnement d’un site e-commerce à grande fréquentation (top 10 français), avec comme résultat une amélioration de 25% de leur TBT et 20 points de gagnés sur leur score de performance Lighthouse.",
                        "id": "lazyhydrateneverhydrateresumablejslesastucesdesframeworkspourred",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Titan"
                        },
                        "speakers": [
                            {
                                "id": "martin_guillier",
                                "name": "Martin Guillier",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AAcHTte2jJwmqG5x_MZ7cBOsMDnSRmAdcWM4wQRmjYSe=s96-c",
                                "company": "Theodo"
                            }
                        ],
                        "type": "quickie"
                    },
                    {
                        "title": "Party",
                        "startsAt": "2023-10-19T18:30",
                        "endsAt": "2023-10-19T19:10",
                        "description": "Party",
                        "id": "day-1-party",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "party"
                    },
                    {
                        "title": "Opening",
                        "startsAt": "2023-10-20T08:30",
                        "endsAt": "2023-10-20T09:00",
                        "description": "Opening",
                        "id": "day-2-open",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "opening"
                    },
                    {
                        "title": "Breaking up long tasks",
                        "startsAt": "2023-10-20T09:00",
                        "endsAt": "2023-10-20T09:50",
                        "description": "Certain tasks on a user interaction can be blocking, giving the user a broken experience, and resulting in a low INP metric score.\n\nSome ways to optimise the INP value of your page could be:\n\n- keeping tasks small and dedicated to what they should do.\n- using Chrome’s scheduler API to schedule tasks for browser\n- yield important tasks to the main thread\n\nThe talk dives deeper into ways of improving the potentially next CWV, \"Interaction to Next paint\" of a page.",
                        "id": "breakinguplongtasks",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Tour de Bretagne"
                        },
                        "speakers": [
                            {
                                "id": "nishu_goel",
                                "name": "Nishu Goel",
                                "photoUrl": "https://avatars.githubusercontent.com/u/26349046?v=4",
                                "company": "epilot GmbH"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "CSS renaît de ses cendres: (re)devenez copains avec votre feuille de style",
                        "startsAt": "2023-10-20T09:00",
                        "endsAt": "2023-10-20T09:50",
                        "description": "On ne va pas se mentir: quand on a commencé notre aventure dans le développement web il y a 15 ans, le CSS et nous, ce n'était pas vraiment le grand amour. Malgré l'arrivée des variables et des nouveaux systèmes de layouts, on n'était toujours pas convaincus, et on ne l'utilisait que par obligation. En 2023, on a décidé de lui donner une nouvelle chance: comme pour le JavaScript, les nouveautés de CSS ont considérablement changé le langage ces dernières années, et on a été agréablement surpris.\n\nDans ce talk interactif et riche en démos, on abordera les standards existants et ceux à venir qui nous on fait redécouvrir le CSS. Préparez-vous à explorer des fonctionnalités cools telles que :is(), :has(), le nesting, les custom media queries, les custom properties (bien plus puissantes qu'on ne le pense) et bien d'autres innovations encore !\n\nRejoignez-nous pour donnez une nouvelle chance au CSS, qui pourrait bien devenir votre nouveau copain incontournable dans le développement front-end !",
                        "id": "cssrenaitdesescendresredevenezcopainsavecvotrefeuilledestyle",
                        "tags": [
                            "📝 Languages"
                        ],
                        "room": {
                            "name": "Jules Verne"
                        },
                        "speakers": [
                            {
                                "id": "olivier_leplus",
                                "name": "Olivier Leplus",
                                "photoUrl": "https://raw.githubusercontent.com/tagazok/tagazok.github.io/master/assets/images/avatar%20olivier.png",
                                "company": "AWS"
                            },
                            {
                                "id": "yohan_lasorsa",
                                "name": "Yohan Lasorsa",
                                "photoUrl": "https://avatars0.githubusercontent.com/u/593151?v=4",
                                "company": "Microsoft"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Festival du Cinéma du DevFest: Application Web3 de sélection des films nominés, vote par un jury et remise des prix en NFT",
                        "startsAt": "2023-10-20T09:00",
                        "endsAt": "2023-10-20T12:10",
                        "description": "Le Festival du Cinéma du DevFest a une renommée internationale et récompense les meilleures œuvres cinématographiques de la communauté des développeurs. Les organisateurs du festival ont émis le souhait de moderniser le processus de récompense en utilisant la technologie des NFT. Votre mission, si vous l'acceptez, est de réaliser cette application en permettant aux organisateurs de sélectionner les films nominés, de définir les membres du jury, d'organiser des votes par le jury et de remettre les prix aux lauréats.\n\nAu cours de cet atelier, vous apprendrez à concevoir et à développer une application décentralisée (dApp) sur la blockchain en utilisant des NFT, et vous acquerrez des compétences en matière de développement de smart contracts et de gestion des transactions sur la blockchain Polygon. Pour la réalisation de l'application, les frameworks ReactJS, Ethers.js, Ganache et HardHat, ainsi que les langages Typescript et Solidity seront utilisés.\nPrérequis :   \n    - Node.js 18 : https://nodejs.org/fr\n    - Ganache : https://trufflesuite.com/ganache/\n    - Ipfs desktop : https://docs.ipfs.tech/install/ipfs-desktop/\n    - Metamask : https://metamask.io/\n    - IDE (VSCode ou IntelliJ Ultimate ou WebStorm ou PHPStorm)",
                        "id": "festivalducinemadudevfestapplicationdeselectiondesfilmsnominesvo",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "L'Atelier"
                        },
                        "speakers": [
                            {
                                "id": "adrien_lasselle",
                                "name": "Adrien LASSELLE",
                                "photoUrl": "https://lh3.googleusercontent.com/-A7QVhtLGNdI/AAAAAAAAAAI/AAAAAAAABzY/tYaj9OZuIuc/photo.jpg",
                                "company": "Sfeir"
                            },
                            {
                                "id": "bertrand_presles",
                                "name": "Bertrand Presles",
                                "photoUrl": "https://avatars1.githubusercontent.com/u/220623?v=4",
                                "company": "Younup / Blockchain & Société"
                            },
                            {
                                "id": "vincent_colas",
                                "name": "Vincent Colas",
                                "photoUrl": "https://i.ibb.co/cQN3v8N/vincent-colas.png",
                                "company": "Younup X Blockchain & Société"
                            }
                        ],
                        "type": "codelab"
                    },
                    {
                        "title": "LegoFlowGame : le Waterfall, le Scrum et le Kanban tu différencieras !",
                        "startsAt": "2023-10-20T09:00",
                        "endsAt": "2023-10-20T11:00",
                        "description": "Il existe beaucoup de façon de gérer des projets ou des produits.\nDans l'écosystème informatique, beaucoup de mots sont à la mode et il est difficile de s'y retrouver.\n\nNous vous proposons un atelier, basé sur des Lego, pour expérimenter trois façons de gérer en équipe les fonctionnalités d'un produit : \n- en cascade - référence au mode Waterfall\n- en itératif - référence au mode Scrum\n- au fil de l'eau - référence au mode Kanban\n\nSerious game, débrief et présentation des notions sont au programme.\nEt si l'envie vous prend de rejouer cette expérience en entreprise, nous vous présenterons le mode opératoire pour faciliter cet atelier-découverte.\n\nVenez participer à cet atelier ludique et vivant à base de briques colorées !",
                        "id": "legoflowgamelewaterfalllescrumetlekanbantudifferencieras",
                        "tags": [
                            "💡 Discovery"
                        ],
                        "room": {
                            "name": "Les Machines"
                        },
                        "speakers": [
                            {
                                "id": "fanny_klauk",
                                "name": "Fanny Klauk",
                                "photoUrl": "https://lh3.googleusercontent.com/a-/AOh14Ghy-jt97zLXbqxsYUcdxvd62hB1katKsxvruKL4",
                                "company": "Apside"
                            }
                        ],
                        "type": "codelab"
                    },
                    {
                        "title": "Semgrep, un outil d'analyse sécurité SAST multi-langage",
                        "startsAt": "2023-10-20T09:00",
                        "endsAt": "2023-10-20T11:00",
                        "description": "L'analyse de code sécurité est une obligation pour tout déploiement d'application actuellement. Il existe de nombreux outils commerciaux et peu d'outil OpenSource réellement pertinent. \nSemgrep est un outil open-source, utilisé par exemple par Gitlab dans l'offre Ultimate, très pertinent car il va vous permettre d'analyse 'presque' tout type de langage (de Kotlin au C), de manière simple et rapide. \n\nNous verrons dans cette session comment écrire des règles basiques simples pour Java, TypeScript, .NET  et comment l'intégrer rapidement dans une chaine de sécurité DevSecOPS",
                        "id": "semgrepunoutildanalysesecuritesastmultilangage",
                        "tags": [
                            "🐱‍💻 SECURITY"
                        ],
                        "room": {
                            "name": "Hangar"
                        },
                        "speakers": [
                            {
                                "id": "sebastien_gioria",
                                "name": "Sebastien Gioria",
                                "photoUrl": "https://media.licdn.com/dms/image/C5603AQEytxT71PeSVw/profile-displayphoto-shrink_800_800/0/1640119575247?e=1698278400&v=beta&t=g45747Xtihmv2yzSWBw9cHls5j2iFp2J46v1RRwtZ9Y",
                                "company": "Lectra"
                            }
                        ],
                        "type": "codelab"
                    },
                    {
                        "title": "Spring Framework 6.0",
                        "startsAt": "2023-10-20T09:00",
                        "endsAt": "2023-10-20T09:50",
                        "description": "Spring Framework 6.0\n\nLa nouvelle génération de Spring Framework est disponible !\n\nSpring Framework 6.0 amène de nouveaux pré-requis qui permettent à l'écosystème Spring d'aller de l'avant: Java 17, Jakarta EE 9+. C'est la fondation pour Spring Boot 3.0 et le commencement de nouveaux thèmes majeurs, tels que AOT/Native et Observability.\n\nPendant cette présentation, Stéphane couvrira les thèmes majeurs de cette nouvelle release:\n\n* La nouvelle baseline avec Java 17 et Jakarta EE 9.\n* Le support AOT qui permet de compiler vos applications Spring en natif avec GraalVM.\n* L'amélioration de l'observabilité, et ce que cela signifie pour les fonctionnalités de base telles que RestTemplate, contrôleurs web, etc.\n* Le support de clients par interface pour HTTP et d'autres transports.\n* Le support de problem details (RFC 7807).",
                        "id": "springframework60",
                        "tags": [
                            "📝 Languages"
                        ],
                        "room": {
                            "name": "Titan"
                        },
                        "speakers": [
                            {
                                "id": "stephane_nicoll",
                                "name": "Stéphane Nicoll",
                                "photoUrl": "https://avatars0.githubusercontent.com/u/490484?v=4",
                                "company": "VMware"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Towards Modern Development of Cloud Applications",
                        "startsAt": "2023-10-20T09:00",
                        "endsAt": "2023-10-20T09:50",
                        "description": "[Service Weaver](https://serviceweaver.dev/) is a programming framework that makes it easy to write, deploy, and manage high-performance distributed applications in Go. Service Weaver improves application latency by up to 15x and reduces cloud costs by up to 9x compared to a typical deployment in the cloud using microservices.\n\n# Programming Model\nThe developer writes the application like it’s a traditional, single-process Go executable that runs on the local machine, that is modularized into logically distinct components. The runtime will take care of cloud configurations and integration with the cloud provider (e.g., breaks down the components into a set of connected microservices, monitoring, tracing, logging).\n\n## Benefits of this programming model\n* The developers can focus solely on writing their application code (e.g., don’t have to setup networking endpoints, to create network stubs, to do service discovery);\n* The developers can modularize their code without paying the performance overhead caused by over-splitting into microservices;\n* The developer can change the network topology of their application easily and dynamically;\n* It enables the runtime to provide optimized runtime solutions and enable new usecases;\n* It enables the runtime to run the same application binary in any cloud environment.\n\n# Runtime\nManages the execution of an application (e.g., colocate components, assign them to OS processes, replication, resource management, authentication, etc.).\n\nProvides different plugins that enable to run the same application binary in any distributed environment. Out of the box, Service Weaver supports three runtime plugins:\n\n* Local runtime, which runs the application as a set of OS processes on the local machine;\n* SSH runtime, which runs the application across a set of machines using SSH;\n* GKE runtime, which runs the application as Pods on GKE;\n* Kube runtime, which runs the application on vanilla Kubernetes.\n* Easy to write new plugins for AWS, Azure, other clouds.\n\n## What runtime enables\n\n* Birds-eye view into the app - leads to smarter scaling, placement, co-location decisions;\n* Because all components run at the same version - it enables the implementation of highly-efficient serialization and transport protocols;\n* Provides affinity based routing embedded in the application itself - easy to create stateful applications and route requests to different component replicas based on load information;\n* Same testing, profiling, debugging experience on the local machine as in the cloud;\n* mTLS support with zero config.",
                        "id": "towardsmoderndevelopmentofcloudapplications",
                        "tags": [
                            "☁️ Cloud & DevOps"
                        ],
                        "room": {
                            "name": "Belem"
                        },
                        "speakers": [
                            {
                                "id": "valentin_deleplace",
                                "name": "Valentin Deleplace",
                                "photoUrl": "https://avatars.githubusercontent.com/u/13508141?v=4",
                                "company": "Google"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Break",
                        "startsAt": "2023-10-20T09:50",
                        "endsAt": "2023-10-20T10:10",
                        "description": "Break",
                        "id": "day-2-pause-1",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "break"
                    },
                    {
                        "title": "Apache Kafka & Apache Flink - Better Together",
                        "startsAt": "2023-10-20T10:10",
                        "endsAt": "2023-10-20T11:00",
                        "description": "Over the last years, businesses have been under a lot of pressure to provide a superior customer experience: smarter, more personalised, more engaging. For this, companies need to leverage an ever-growing amount of real-time data coming from various sources.\n\nIn this context, data streaming has become a key driver of digital transformation across various industries from banking and manufacturing to online gaming and e-commerce. Apache Kafka has been at the forefront of this development and emerged as the de facto standard for reading, writing, and sharing streams across an organization.\n\nOnce these streams are reliable, governed and secured in a platform like Confluent Cloud the next step is to process them, to build applications on them and to derive insights. This is where Apache Flink comes in. Apache Flinks is a powerful stream processing framework that enables developers to address the full range of stream processing use cases: from offline analytics to real-time data pipelines to event-driven applications.\n\nIn this talk, I will briefly introduce Apache Kafka and Apache Flink and we’ll explore their role in making streaming the default for modern data architectures. Then, we’ll showcase - by example -  how these two technologies become more than the sum of their parts when they are powering a cloud-native streaming platform like Confluent Cloud.",
                        "id": "apachekafkaapacheflinkbettertogether",
                        "tags": [
                            "📝 Languages"
                        ],
                        "room": {
                            "name": "Jules Verne"
                        },
                        "speakers": [
                            {
                                "id": "konstantin_knauf",
                                "name": "Konstantin Knauf",
                                "photoUrl": "https://i.ibb.co/sP5RJn6/Konstantin-Knauf.jpg",
                                "company": "Confluent"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Core Web Vitals: Mettez votre application sur orbite avec les meilleurs pratiques",
                        "startsAt": "2023-10-20T10:10",
                        "endsAt": "2023-10-20T11:00",
                        "description": "Lorsque l'on développe une application web il est primordial de respecter un certain niveau d'exigence sur l'UX. Cette pratique permet de satisfaire l'utilistateur mais également de s'assurer qu'il prenne plaisir à utiliser notre application.\n\nEn 2020, Google annonce vouloir intégrer l'année suivante, dans ses outils de performances et de métriques, trois nouveaux signaux permettant de caractériser et de mesurer cette expérience utilisateur.\n\nCes signaux sont regroupés sous le nom de Core Web Vitals et sont les suivants:\n- LCP (Largest Contentful Paint)\n- CLS (Cumule Layout Shift)\n- FID (First Input Delay)\n\nMais que signifient  concrètement ces métriques ? Comment les déboguer et les optimiser et ainsi rendre notre application agréable à utiliser ?\n\nA travers ce talk, je répondrai à ces questions et présenterai également un quatrième signal encore en cours d'expériementation: INP (Interaction to Next Point)",
                        "id": "corewebvitalsmettezvotreapplicationsurorbiteaveclesmeilleursprat",
                        "tags": [
                            "💚 UX / UI"
                        ],
                        "room": {
                            "name": "Titan"
                        },
                        "speakers": [
                            {
                                "id": "nicolas_frizzarin",
                                "name": "Nicolas FRIZZARIN",
                                "photoUrl": "https://lh4.googleusercontent.com/-QZhPN3UNDBA/AAAAAAAAAAI/AAAAAAAAAEs/Ki7Avw5jkKg/photo.jpg",
                                "company": "SFEIR"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Navigating the Chaos: A Holistic Approach to Incident Management",
                        "startsAt": "2023-10-20T10:10",
                        "endsAt": "2023-10-20T11:00",
                        "description": "Incident management can be challenging and throw you curveballs with unexpected issues, resulting in data loss, downtimes, and overall money & hours of sleep going to waste, BUT! There are practical things you could do to make it a smoother process and handle it better.\n\nRemember when we were at school, and people said - \"Actively listening in class guarantees 50% prep for the upcoming test\"?\nThe same goes for being proactive at work in ways that will instantly prepare you to manage incidents better (at night or in general).\n\nIn this talk, I'll cover the proactive ways you could take and incorporate into your day-to-day routine, in order to prepare you for a smoother and more efficient incident management process.\n\nI will also show the best practices I've finalized over the years that helped me get a clear vision of how to manage production incidents in the quickest & efficient way possible.\nEmbracing the tips I'll give you will guarantee you'll not only talk the talk but also walk the walk when it comes to incident management.\n",
                        "id": "navigatingthechaosaholisticapproachtoincidentmanagement",
                        "tags": [
                            "☁️ Cloud & DevOps"
                        ],
                        "room": {
                            "name": "Tour de Bretagne"
                        },
                        "speakers": [
                            {
                                "id": "hila_fish",
                                "name": "Hila Fish",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AAcHTtd7O9dKMKsL5PHu6VIXmJTfCbFxK8nXCkWycZcABg=s96-c",
                                "company": "Wix.com"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Pourquoi et comment organiser une app en libs avec Nx ?",
                        "startsAt": "2023-10-20T10:10",
                        "endsAt": "2023-10-20T11:00",
                        "description": "Qui a dit monorepo ? Bien que Nx soit la principale alternative “human readable” à Bazel pour organiser un monorepo, parmi d’autres qualités, Nx est avant tout outil permettant de découper aisément nos applications en libs. Cela dit, à quelles fins céderions-nous à une telle tentation ? Par simple esthétisme, ou bien plus ?\n\nEst-ce que Nx nous permettrait de nous focaliser plus sur notre code et moins sur le setup des outils de build, lint et test ? Réussirait-il vraiment à nous faire gagner du temps de build / lint / test / etc… ? Nous simplifierait-il notre migration progressive vers de nouveaux outils ? Qu’en est-il de la “Separation of Concerns” de nos différents “Layers” (ui / core / infra / etc…) ou de nos différents “Domains” ? Et finalement et surtout, comment devrions-nous découper nos libs dans ce cas ?\n\nDonnons-nous rendez-vous à ce talk pour observer par vous même les gains que peut vous apporter l’adoption de Nx, le chemin d’adoption et finalement les “tradeoffs” de la découpe de vos workspaces en monorepo / polyrepo.\n",
                        "id": "pourquoietcommentorganiseruneappenlibsavecnx",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Belem"
                        },
                        "speakers": [
                            {
                                "id": "younes_jaaidi",
                                "name": "Younes Jaaidi",
                                "photoUrl": "https://media.licdn.com/dms/image/C5603AQE0OPlhnh3YQQ/profile-displayphoto-shrink_800_800/0/1591953476242?e=1698278400&v=beta&t=Qp9ybEnn257aarNCccDLWSJ7nLIPy0ydkfXgu8lTzJM",
                                "company": "Marmicode"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Break",
                        "startsAt": "2023-10-20T11:00",
                        "endsAt": "2023-10-20T11:20",
                        "description": "Break",
                        "id": "day-2-pause-2",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "break"
                    },
                    {
                        "title": "30 index sur une table PG de 6To : défis et solutions",
                        "startsAt": "2023-10-20T11:20",
                        "endsAt": "2023-10-20T12:10",
                        "description": "Au cours du temps, nos bases de données grossissent. Viennent alors les problématiques de performance. Une solution classique consiste à rajouter des index. Ceux-ci jouent effectivement un rôle crucial sur les performances, mais ils peuvent également être contre-productifs. Les pièges classiques : ajouter un index à chaque nouvelle requête, mal les définir ou les laisser vieillir sans s'en occuper.\n\nChez Doctolib nous avons une BDD Postgres de 30To, avec des pics quotidiens de 250k requêtes par seconde. La plus grosse table fait 6To, elle a 30 index.\n\nAlors comment nous sommes-nous outillés pour améliorer l'usage de nos index et réduire leur nombre ?\nNous parlerons de représentativité de tests, de pièges SQL, de write-amplification, de benchmark d'index, et des défis que notre équipe a rencontrés pendant quelques mois.",
                        "id": "30indexsurunetablepgde6todefisetsolutions",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Belem"
                        },
                        "speakers": [
                            {
                                "id": "emmanuel_quincerot",
                                "name": "Emmanuel Quincerot",
                                "photoUrl": "https://media.licdn.com/dms/image/C4D03AQHCid_X1moOhQ/profile-displayphoto-shrink_800_800/0/1581869516145?e=1700092800&v=beta&t=1bF_rVvBAL06LrW6CzJJd0KsJyhehr8OsCMue2jd39g",
                                "company": "Doctolib"
                            },
                            {
                                "id": "flora_briand",
                                "name": "Flora Briand",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AGNmyxbfVdDsKpiI5nsCGBo9CAaVkbWuYev0EsmvNxgy6A=s96-c",
                                "company": "Doctolib"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Au secours, j'ai une personne handicapée dans mon équipe !",
                        "startsAt": "2023-10-20T11:20",
                        "endsAt": "2023-10-20T12:10",
                        "description": "Vous avez ou vous allez accueillir une personne handicapée dans votre équipe et vous ne savez pas comment vous y prendre ? Comment mettre en place des aménagements de postes dédiés ? Comment intégrer une personne handicapée dans de bonnes conditions dans son équipe ?\n\nA partir de mon vécu personnel étant sourde, de nombreuses études et de retour d'expériences d'autres personnes handicapées, je donnerai des pistes de réflexion et des outils pour déconstruire les biais et préjugés autour du handicap.\n\nUne personne handicapée n'est pas moins bonne qu'une personne n'ayant pas d'handicap. Pourtant, il y a 12 millions de personnes handicapées en France et le taux de chômage est deux fois plus élevée pour ces personnes que la norme. Il serait temps d'arrêter d'avoir peur du handicap.",
                        "id": "ausecoursjaiunepersonnehandicapeedansmonequipe",
                        "tags": [
                            "💡 Discovery"
                        ],
                        "room": {
                            "name": "Titan"
                        },
                        "speakers": [
                            {
                                "id": "emmanuelle_aboaf",
                                "name": "Emmanuelle ABOAF",
                                "photoUrl": "https://lh3.googleusercontent.com/a-/AOh14GgwiE4A4acIJAZk6f-90gF6CawNDjo6arOeTZr2zQ=s96-c",
                                "company": "Dcube"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Go Serverless! But is it secure?",
                        "startsAt": "2023-10-20T11:20",
                        "endsAt": "2023-10-20T12:10",
                        "description": "I am a big advocate of serverless products instead of \"traditional\" ones. Cloud Run instead of GKE, Fargate instead of EKS, Pub/Sub instead of Kafka and Aurora instead of RDS. You get lower costs, less infra to manage, no need to worry about networking... But what about security? Can you really make sure that your serverless workloads (or data) are safe? \n\nIn this talk, we will go through several serverless offerings in the areas of data & compute, and look at their vulnerabilities and security options. We'll cover topics like:\n\n- How serverless architecture changes the attack surface\n- Vulnerabilities in serverless platforms and services\n- Best practices for securing serverless workloads\n\nBy the end of this talk, you'll be able to:\n\n- Understand the security risks of serverless computing\n- Implement best practices for securing your serverless workloads\n- Sleep soundly knowing that your serverless applications are secure",
                        "id": "goserverlessbutisitsecure",
                        "tags": [
                            "🐱‍💻 SECURITY"
                        ],
                        "room": {
                            "name": "Jules Verne"
                        },
                        "speakers": [
                            {
                                "id": "natalie_godec",
                                "name": "Natalie Godec",
                                "photoUrl": "https://lh3.googleusercontent.com/a-/AOh14Gh5VTtfElfLE0yTSyfCO8a7czDqjrrX8jb4H5Rx=s96-c",
                                "company": "Zencore"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Web ML in 2023 - What's new with Machine Learning in JavaScript?",
                        "startsAt": "2023-10-20T11:20",
                        "endsAt": "2023-10-20T12:10",
                        "description": "Join Jason Mayes, Web ML Lead at Google, to learn about the latest updates around AI in the web browser using JavaScript in 2023 to be productive and bring your next business or creative idea to life. Learn through a live demo how to build next generation web apps powered by machine learning using Visual Blocks ML in minutes - a brand new low / no code visual framework you can use to implement ML powered ideas faster than ever before in a way everyone on your team can try, along with updates around TensorFlow.js and MediaPipe for performance improvements, improved tooling, and more - all accessible from within the browser enabling privacy, lower latency, and cost savings.",
                        "id": "webmlin2023whatsnewwithmachinelearninginjavascript",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Tour de Bretagne"
                        },
                        "speakers": [
                            {
                                "id": "jason_mayes",
                                "name": "Jason Mayes",
                                "photoUrl": "https://pbs.twimg.com/profile_images/1608707468334616577/e23i2nMf_400x400.jpg",
                                "company": "Google"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Lunch",
                        "startsAt": "2023-10-20T12:10",
                        "endsAt": "2023-10-20T14:00",
                        "description": "Lunch",
                        "id": "day-2-lunch",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "lunch"
                    },
                    {
                        "title": "Bullet train: code le jeu inspiré du film avec Flutter et Flame",
                        "startsAt": "2023-10-20T14:00",
                        "endsAt": "2023-10-20T16:00",
                        "description": "Nous ferons un premier arrêt à Dart-la-jolie pour découvrir ce language de programmation moderne mais peu répandu. Un petit stop à Flutter-en-Retz pour découvrir les fondations du framework, nous passerons par Flame-sur-Erdre pour créer un jeu 2D puis nous nous arrêterons à Crossplatform-sur-mer pour admirer le rendu web, iOS, Android et meme desktop !\n\nCe talk est destiné à tous ceux qui veulent mettre les mains dans Flutter une première fois pour découvrir les possibilités qu'il offre ! Ouvert à tous les développeurs pratiquant au moins un autre language de programmation.",
                        "id": "bullettraincodelejeuinspiredufilmavecflutteretflame",
                        "tags": [
                            "📱 Mobile"
                        ],
                        "room": {
                            "name": "Hangar"
                        },
                        "speakers": [
                            {
                                "id": "alexis_choupault",
                                "name": "Alexis Choupault",
                                "photoUrl": "https://media.licdn.com/dms/image/C5603AQGYQnPF0T9v_w/profile-displayphoto-shrink_800_800/0/1541594614619?e=1700697600&v=beta&t=7KRVxxkwGfCxbTs4SnhFjDOlEGmYqwwbgthJgQzqCtk",
                                "company": "Sncf Connect And Tech"
                            },
                            {
                                "id": "emmanuel_lefebvre_dibon",
                                "name": "Emmanuel LEFEBVRE DIBON",
                                "photoUrl": "https://media.licdn.com/dms/image/C4D03AQEo4_gloAbJIw/profile-displayphoto-shrink_800_800/0/1645610033150?e=1698278400&v=beta&t=YD6_--JxC3P-LS23tswjWRfeYcEez-jdG_voivrWfKk",
                                "company": "SNCF Connect & Tech"
                            },
                            {
                                "id": "jocelyn_griselle",
                                "name": "Jocelyn Griselle",
                                "photoUrl": "https://i.ibb.co/MD8cmvC/jocelyn.jpg",
                                "company": "SNCF-Connect"
                            }
                        ],
                        "type": "codelab"
                    },
                    {
                        "title": "It's a (testing) trap! - Common end-to-end pitfalls and how to solve them",
                        "startsAt": "2023-10-20T14:00",
                        "endsAt": "2023-10-20T14:50",
                        "description": "“It’s a trap” - a call or feeling we all might be familiar with, not only when it comes to Star Wars. It signalizes a sudden moment of noticing imminent danger. This situation is an excellent allegory for an unpleasant realization in testing. Imagine having the best intentions regarding testing but still ending up with tests failing to deliver any value. Tests who are feeling like a pain to deal with?\n\nWhen writing frontend tests, there are lots of pitfalls on the way. In sum, they can lead to lousy maintainability, slow execution time, and - in the worst-case - tests you cannot trust. But it doesn’t have to be that way. In this session, I will talk about developers’ common mistakes (including mine) in tests using Jest and Cypress, at least from my experience. And, of course, how to avoid them using best practices. Testing doesn’t need to be painful, after all.\n",
                        "id": "itsatestingtrapcommonendtoendpitfallsandhowtosolvethem",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Jules Verne"
                        },
                        "speakers": [
                            {
                                "id": "ramona_schwering",
                                "name": "Ramona Schwering",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AGNmyxZ0qBWdJA7n3gI68UIMzW_a-u0G8uJHwqQUOrZdeA=s96-c",
                                "company": "shopware AG"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Je ne suis pas passionné(e) et alors ?!",
                        "startsAt": "2023-10-20T14:00",
                        "endsAt": "2023-10-20T14:50",
                        "description": "Tout le monde connait ce développeur, cette développeuse passionné(e) par son métier.\n<br/>\nFacilement reconnaissable du fait qu'il/elle passe des heures à coder, même en dehors du travail;\n<br />\nse documente; dont les sujets de conversation tournent souvent autour du code.\n<br />\n\nQuand bien même passionné(e), il arrive qu'on ne ressente, ni n'exprime cette passion pour le code. \n<br />\nEt facilement, à son contact, le sentiment de malaise peut survenir si on ne ressent pas cette passion.\n<br />\nEt ce, même en étant soi-même développeur ou développeuse.\n<br  />\n\nCe malaise peut être source d'inquiétude, de doute par rapport à ses propres compétences.\n<br />\nEn effet, si le passionné consacre des heures à des projets personnels, peut-être le devrions-nous ?\n<br />\n\nMais alors, faut-il être passionné pour être développeur (se)? \n<br />\nLa passion apporte-t-elle réellement un plus ?\n<br /> \nL'injonction à la passion dans le dev ne serait-elle pas en fin de compte un piège ?\n<br />\nLa passion est-elle LE logiciel indispensable à toute personne souhaitant coder ?\n\nIci, tout l'objet de cette conférence ! \n \n\n<br />\n",
                        "id": "jenesuispaspassionneeetalors",
                        "tags": [
                            "💡 Discovery"
                        ],
                        "room": {
                            "name": "Tour de Bretagne"
                        },
                        "speakers": [
                            {
                                "id": "helvira_goma",
                                "name": "Helvira Goma",
                                "photoUrl": "https://i.ibb.co/Thv7Vkw/UO3hh-XS9-400x400.jpg",
                                "company": "Onepilot"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "📝 ✅ La checklist ultime pour rendre vos applications cloud native !",
                        "startsAt": "2023-10-20T14:00",
                        "endsAt": "2023-10-20T14:50",
                        "description": "Aujourd’hui, le cloud permet d’améliorer la disponibilité et l’évolutivité de nos applications. Grâce au cloud, nous pouvons provisionner de nouvelles infrastructures rapidement et faire évoluer avec la même vitesse les infrastructures existantes. Nous ne présentons plus les avantages du Cloud ni la multitude de services cloud existants. De prime abord, migrer une application sur le Cloud peut sembler un sujet trivial. Mais, toutes les applications sont-elles faites pour être déployées sur le Cloud ? D'où viennent tous ces projets de migration ratés alors ?\n\nDurant ce talk, je vous présenterai la checklist qui vous permettra de rendre vos applications véritablement \"cloud native\" pour tirer le meilleur de ce modèle.\n",
                        "id": "lachecklistultimepourrendrevosapplicationscloudnative",
                        "tags": [
                            "☁️ Cloud & DevOps"
                        ],
                        "room": {
                            "name": "Belem"
                        },
                        "speakers": [
                            {
                                "id": "katia_himeur",
                                "name": "Katia HIMEUR",
                                "photoUrl": "https://avatars.githubusercontent.com/u/40885659?v=4",
                                "company": "Cockpit io"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Rendu front, action ! Découvrez les différents modes de rendu avec Next.js",
                        "startsAt": "2023-10-20T14:00",
                        "endsAt": "2023-10-20T16:00",
                        "description": "Next.js est aujourd'hui le meta framework React le plus populaire et est recommandé par la core team React pour le développement d'applications web. \n\nDans ce codelab nous nous intéresserons aux différents modes de rendu proposés par Next.js : \n* rendu côté client (CSR),\n* rendu côté serveur (SSR),\n* génération de sites statiques (SSG),\n* regénération statique incrémentale (ISR),\n* React Server Components (RSC),\n* etc... \n\nVous développerez une application web qui permettra aux cinéphiles de planifier leurs prochaines sorties cinémas. Vous vous appuierez sur une API publique et découvrirez quelques fonctionnalités intéressantes de Next.js.\n\nÀ la fin de ce codelab vous aurez ainsi une vision plus claire du focntionnement de ces différents modes de rendu, de leurs atouts et de leurs limites. Et nous espérons que cela vous aidera à choisir le bon mode de rendu en fonction de vos besoins.\n\nPour suivre ce codelab, il est préférable d'avoir des connaissances de bases de React. Mais les différents modes de rendu utilisés sont également disponibles sur la majorité des autres écosystèmes Javascript.",
                        "id": "rendufrontactiondecouvrezlesdifferentsmodesderenduavecnextjs",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Les Machines"
                        },
                        "speakers": [
                            {
                                "id": "clementine_robert",
                                "name": "Clémentine ROBERT",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AEdFTp7EVEKGri1UevA80y95fq4pJ13iGwjrLnsCTxiZt10=s96-c",
                                "company": "ASI - Saint Herblain"
                            },
                            {
                                "id": "olivier_thierry",
                                "name": "Olivier THIERRY",
                                "photoUrl": "https://lh6.googleusercontent.com/-nCwPIFQPUqI/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdEYq9ZHz9xv59b4o9VGbYn-MBaVg/mo/photo.jpg",
                                "company": "ASI"
                            },
                            {
                                "id": "ryan_baloji",
                                "name": "Ryan BALOJI",
                                "photoUrl": "https://avatars.githubusercontent.com/u/34781214?v=4",
                                "company": "ASI"
                            }
                        ],
                        "type": "codelab"
                    },
                    {
                        "title": "Unlocking the power of Web Machine Learning: Hands-on TensorFlow.js workshop",
                        "startsAt": "2023-10-20T14:00",
                        "endsAt": "2023-10-20T16:00",
                        "description": "Join me for a Hands-on workshop on TensorFlow.js, the most popular framework for Web Machine Learning. You will learn how to create two smart webcam applications: one that recognizes common objects and another that detects human emotions in real-time. Gain practical skills in object recognition and emotion analysis while unlocking the potential of web-based Machine Learning. Don't miss this opportunity to dive into the exciting world of TensorFlow.js and build intelligent web experiences.",
                        "id": "unlockingthepowerofwebmachinelearninghandsontensorflowjsworkshop",
                        "tags": [
                            "🤖 BigData & AI"
                        ],
                        "room": {
                            "name": "L'Atelier"
                        },
                        "speakers": [
                            {
                                "id": "patty_o_callaghan",
                                "name": "Patty O'Callaghan",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AAcHTtft1LT7FCFs1dgt7HoI5WJcmmAEaWEN-5j19qcD=s96-c",
                                "company": "Charles River Laboratories"
                            }
                        ],
                        "type": "codelab"
                    },
                    {
                        "title": "UX Writer : le 5e élément de l'équipe tech / produit",
                        "startsAt": "2023-10-20T14:00",
                        "endsAt": "2023-10-20T14:50",
                        "description": "La plupart des équipes tech & produit sont composées de 4 éléments essentiels : les Product Managers, les Product Designers, les Développeurs et les Ingénieurs QA. Mais on oublie souvent un autre élément décisif de l'équipe : les UX Writers.\n\nQue font les UX Writers ? De quoi ont-ils besoin ? Comment les intégrer au sein de l'équipe pour une collaboration fructueuse ? Dans cette présentation, nous allons vous faire découvrir le multipass UX Writer, les nouvelles API tech pour soutenir l'UX Writing et le process idéal pour un contenu parfaitement adapté.",
                        "id": "uxwriterle5eelementdelequipetechproduit",
                        "tags": [
                            "💚 UX / UI"
                        ],
                        "room": {
                            "name": "Titan"
                        },
                        "speakers": [
                            {
                                "id": "ludivine_kasteleyn",
                                "name": "Ludivine Kasteleyn",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AGNmyxb3yNYPnT5GnzwCU01DC7d147eGc1P6u0Cesja0wQ=s96-c",
                                "company": "Pennylane"
                            },
                            {
                                "id": "thibaud_courtoison",
                                "name": "Thibaud Courtoison",
                                "photoUrl": "https://pbs.twimg.com/profile_images/1456553725372342273/2FJs-6QR_400x400.jpg",
                                "company": "Prolong"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Break",
                        "startsAt": "2023-10-20T14:50",
                        "endsAt": "2023-10-20T15:10",
                        "description": "Break",
                        "id": "day-2-pause-3",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "break"
                    },
                    {
                        "title": "Alfredo Linguini et les Modèles Génératifs : Qui Fait Vraiment la Cuisine ?",
                        "startsAt": "2023-10-20T15:10",
                        "endsAt": "2023-10-20T16:00",
                        "description": "Comme Alfredo Linguini dans le film Ratatouille, qui a su créer des plats délicieux en confiant le contrôle de sa cuisine à un rat doué nommé Rémy, nous examinons comment les modèles de langue génératifs agissent comme notre \"Rémy\" personnel, aidant à concocter du contenu de qualité.\n\nNous débuterons par une vue d'ensemble des IA génératives textuelles, en mettant en évidence les différences entre les modèles pré-entraînés et les modèles de fondation. À l'image de Linguini se familiarisant avec les complexités d'une cuisine professionnelle, nous approfondirons les concepts clés des IA génératives, leur fonctionnement et leur application pratique.\n\nEnsuite, nous explorerons l'art du \"Prompt Design\" avec un accent particulier sur la fiabilité. Comment, tout comme Linguini, pouvons-nous diriger nos \"Rémy\" IA pour optimiser leur potentiel tout en garantissant leur fiabilité ? Nous discuterons des stratégies pour améliorer les réponses des modèles, et aborderons les mesures de sécurité nécessaires pour assurer que notre \"cuisine\" IA reste sûre et fiable.\n\nTel un plat signature de Gusteau's, nous présenterons une démonstration sur un cas d'usage concret implémenté en entreprise. Cette démo donnera un aperçu de la manière dont les IA génératives peuvent être déployées dans le monde réel et créer de la valeur pour les organisations.\n\nEnfin, nous vous préparerons votre doggy bag : des astuces pour les développeurs, des réflexions sur les échecs et les succès dans l'adoption de ces technologies, une discussion sur la stratégie Make or Buy et un éclairage sur l'approche open source. Nous partagerons des anecdotes, des leçons apprises et des conseils pour naviguer dans le monde de l'IA générative.\n\nRejoignez-nous pour cette aventure culinaire dans le monde des IA génératives et découvrons ensemble \"qui fait vraiment la cuisine\" dans le monde technologique d'aujourd'hui",
                        "id": "alfredolinguinietlesmodelesgeneratifsquifaitvraimentlacuisine",
                        "tags": [
                            "🤖 BigData & AI"
                        ],
                        "room": {
                            "name": "Tour de Bretagne"
                        },
                        "speakers": [
                            {
                                "id": "yann_carbonne",
                                "name": "Yann Carbonne",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AAcHTtcUisccrnngpC_MRToEgnWJSI464jy19j-njJm5=s96-c",
                                "company": "Valoway"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Cloudbusters : À la Chasse des Coûts Fantômes",
                        "startsAt": "2023-10-20T15:10",
                        "endsAt": "2023-10-20T16:00",
                        "description": "Dans le monde mystérieux du Cloud, où les ressources semblent illimitées, une équipe d'experts intrépides se lance dans une quête épique pour traquer et éliminer les coûts fantômes qui hantent les infrastructures cloud des entreprises. \n\nRejoignez les “Cloudbusters\" dans cette aventure palpitante, qui, armés de stratégies d'optimisation et d'outils de suivi des dépenses, parviennent à révéler les cachettes secrètes des coûts inutiles, à anticiper les dépenses futures et à gouverner avec sagesse les ressources cloud.\n\nPréparez-vous à une aventure captivante, remplie de conseils pratiques et d'exemples concrets, pour maîtriser les coûts du Cloud et réaliser des économies spectaculaires. Laissez-vous entraîner dans le monde fascinant des Cloudbusters et transformez votre approche de la gestion des coûts dans le Cloud.\n",
                        "id": "cloudbustersalachassedescoutsfantomes",
                        "tags": [
                            "☁️ Cloud & DevOps"
                        ],
                        "room": {
                            "name": "Titan"
                        },
                        "speakers": [
                            {
                                "id": "omar_kammoun",
                                "name": "Omar KAMMOUN",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AAcHTtfpW3FWr2zEq-NsR82Ao8LDyPTVzdR4NZBC_ZnqnA=s96-c",
                                "company": "Sfeir"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Du CSS aux shaders WebGL : panorama des techniques d'animation en 2023",
                        "startsAt": "2023-10-20T15:10",
                        "endsAt": "2023-10-20T16:00",
                        "description": "Parfois subtiles, parfois proéminentes, les animations sont un élément essentiel pour une expérience utilisateur agréable. Mais une fois qu'on a imaginé des animations plus ou moins folles, vient la question fatidique du \"comment fait-on ça ?\", à laquelle j'aimerais vous aider à répondre.\n\nPour pouvoir choisir la technique la mieux adaptée à chaque animation, il vaut mieux avoir une boîte à outils la plus complète possible. J'aimerais vous aider à construire la vôtre en vous présentant un panel le plus large possible de techniques d'animation sur le web : des APIs natives classiques (CSS, Web Animation API) aux plus complexes (Canvas API) en passant par les librairies spécialisées (FLIP, Lottie, Framer Motion, Rive...). Nous finirons avec WebGL et ses shaders GLSL, qui feraient trembler plus d'un développeur mais dont on retrouve les effets impressionnants sur tous les sites récompensés aux Awwwards.\n\nJe passerai rapidement sur toutes ces techniques, en comparant leurs performances et utilisations possibles, afin de vous laisser la liberté d'explorer plus en profondeur celles qui vous intéressent.",
                        "id": "ducssauxshaderswebglpanoramadestechniquesdanimationen2023",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Belem"
                        },
                        "speakers": [
                            {
                                "id": "julien_sulpis",
                                "name": "Julien Sulpis",
                                "photoUrl": "https://avatars2.githubusercontent.com/u/22420399?v=4",
                                "company": "Zenika"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "L'AGC : retour sur l'ordinateur qui a amené l'humanité sur la Lune",
                        "startsAt": "2023-10-20T15:10",
                        "endsAt": "2023-10-20T16:00",
                        "description": "Lundi 21 juillet 1969, l’humanité posait pour la première fois le pied sur la Lune. Cet exploit est le fruit de nombreuses avancées techniques et technologiques, notamment en électronique et dans le domaine de l’informatique alors naissant. Pour mener à bien leurs missions, les astronautes s’appuyaient sur l’AGC, l’ordinateur de bord du programme Apollo qui permettra de réaliser ces exploits. \n\nEmbarquez avec nous et découvrons ensemble sa conception et les rôles qu’il devait assurer au cours d’une mission jusqu’à la Lune. Nous nous replacerons dans le contexte historique, aborderons les moyens qui étaient alors à disposition des ingénieurs de l’époque, les avancées technologiques qui ont été nécessaires pour relever ce défi ainsi que les héritages que ce programme nous aura laissé, notamment dans le domaine de l'ingénierie logicielle. \n",
                        "id": "lagcretoursurlordinateurquiaamenelhumanitesurlalune",
                        "tags": [
                            "💡 Discovery"
                        ],
                        "room": {
                            "name": "Jules Verne"
                        },
                        "speakers": [
                            {
                                "id": "olivier_poncet",
                                "name": "Olivier PONCET",
                                "photoUrl": "https://avatars.githubusercontent.com/u/29702924?v=4",
                                "company": "HAWKSWELL"
                            },
                            {
                                "id": "romain_berthon",
                                "name": "Romain BERTHON",
                                "photoUrl": "https://avatars2.githubusercontent.com/u/20265323?v=4",
                                "company": "Dotware Consulting"
                            }
                        ],
                        "type": "conference"
                    },
                    {
                        "title": "Break",
                        "startsAt": "2023-10-20T16:00",
                        "endsAt": "2023-10-20T16:20",
                        "description": "Break",
                        "id": "day-2-pause-4",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "break"
                    },
                    {
                        "title": "Angular Signals : how do they work ?",
                        "startsAt": "2023-10-20T16:20",
                        "endsAt": "2023-10-20T16:40",
                        "description": "On était tranquille là à faire de la réactivité avec RxJS dans nos applications angular,\n\nEt voilà que la core team nous sort une nouvelle primitive pour ça : `signal()`.\n\nC'est quoi la réactivité d'abord ? C'est quoi un signal ? \n\nEst ce que vous devez absolument les utiliser au lieu d'RxJS ? ( spoiler: non )\n\nBref, comment ça marche les signals en angular ? ( quoi, on dit des signaux ? )",
                        "id": "angularsignalshowdotheywork",
                        "tags": [
                            "🌍 Web"
                        ],
                        "room": {
                            "name": "Titan"
                        },
                        "speakers": [
                            {
                                "id": "benjamin_legrand",
                                "name": "Benjamin Legrand",
                                "photoUrl": "https://avatars.githubusercontent.com/u/32519406?v=4",
                                "company": "onepoint"
                            }
                        ],
                        "type": "quickie"
                    },
                    {
                        "title": "Apprenons ensemble grâce aux bookclubs",
                        "startsAt": "2023-10-20T16:20",
                        "endsAt": "2023-10-20T16:40",
                        "description": "Tu aimerais lire plus de dix pages d'un livre pro sans lâcher l'affaire ? Tu as lu le même livre que tes collègues mais vous n’avez pas compris la même chose ? Et pourtant la lecture est un super moyen d’échanger et de progresser dans ton métier !\n\nMarion et Yvonnick n'en lisaient pas jusqu’à l’année dernière. Mais cette année, ils ont lu cinq livres grâce aux bookclubs ! Bookclub ? Non, on ne parle pas de club de lecture pour le troisième âge…\n\nEn participant et en animant ces clubs de lecture, ils ont élargi leurs connaissances professionnelles. La lecture de “The manager’s path” les a par exemple aidés à devenir plus proactifs dans leur rôle de manageur et dans l’accompagnement de leurs équipes.\n\n\nAprès avoir découvert le fonctionnement des bookclubs, il y a fort à parier que vous serez prêts à embarquer vos collègues dans la lecture de ce livre qui traîne sur votre bureau. Et vous serez même capable d'animer des conversations constructives et passionnantes autour de vos lectures. Qui sait, peut être que vous arriverez comme nous à convaincre votre CTO de participer à votre premier bookclub ?\n\n",
                        "id": "apprenonsensemblegraceauxbookclubs",
                        "tags": [
                            "💡 Discovery"
                        ],
                        "room": {
                            "name": "Belem"
                        },
                        "speakers": [
                            {
                                "id": "marion_valentin",
                                "name": "Marion Valentin",
                                "photoUrl": "https://lh3.googleusercontent.com/a-/AOh14Gjo3eiLyQDK6oAv9VdYz0cm6wlg_ZJ1jxhho5Fn=s96-c",
                                "company": "SNCF Connect & Tech"
                            },
                            {
                                "id": "yvonnick_frin",
                                "name": "Yvonnick FRIN",
                                "photoUrl": "https://lh5.googleusercontent.com/-tmj1tGCN_u4/AAAAAAAAAAI/AAAAAAAABO0/oVqsblFTX8k/photo.jpg",
                                "company": "Pix"
                            }
                        ],
                        "type": "quickie"
                    },
                    {
                        "title": "Au delà du mythe, développez confortablement sur Windows",
                        "startsAt": "2023-10-20T16:20",
                        "endsAt": "2023-10-20T16:40",
                        "description": "Etre bien outillé quand on dev, c’est la clé de l’efficacité et de la motivation ! Venez donc voir comment améliorer votre confort de développement sous Windows..\n\nSi vous croyez qu’un environnement de développement agréable n’est réservé qu’à Linux ou Mac, vous apprendrez qu’il y a largement de quoi se faire plaisir sous Windows également, et sans douleur. En un quart d’heure, venez découvrir différents outils et configurations qui vont vous faciliter le quotidien par leur design attractif ou leur simplicité !\n\nOn va parler Terminal, Git, VSCode… Et quelques autres outils ultra pratiques comme PowerToys. Vous découvrirez forcément des perles !",
                        "id": "audeladumythedeveloppezconfortablementsurwindows",
                        "tags": [
                            "💡 Discovery"
                        ],
                        "room": {
                            "name": "Tour de Bretagne"
                        },
                        "speakers": [
                            {
                                "id": "sebastien_oddo",
                                "name": "Sébastien Oddo",
                                "photoUrl": "https://media.licdn.com/dms/image/D4E03AQFCicUJY2H1mw/profile-displayphoto-shrink_400_400/0/1665922951672?e=1700697600&v=beta&t=3EmZFnGTLBLVUUetaYzT2gvJ5YdbkWhmbAPekf7r2Nc",
                                "company": "IPPON Technologies"
                            }
                        ],
                        "type": "quickie"
                    },
                    {
                        "title": "Comment les interfaces nous manipulent !",
                        "startsAt": "2023-10-20T16:20",
                        "endsAt": "2023-10-20T16:40",
                        "description": "L'avènement du numérique a fait de l’attention une ressource première et rare placée au cœur des modèles économiques des plateformes sociales ou de divertissement. À côté de cela, le nombre de design trompeur (ou dark pattern) a explosé en utilisant nos failles et nos biais. \nFaisons la lumière sur ces mécanismes trompeurs, leurs conséquences et les bonnes pratiques que nous, professionnels du numérique, pouvons mettre en place. \n",
                        "id": "commentlesinterfacesnousmanipulent",
                        "tags": [
                            "💚 UX / UI"
                        ],
                        "room": {
                            "name": "Jules Verne"
                        },
                        "speakers": [
                            {
                                "id": "flora_brochier",
                                "name": "Flora Brochier",
                                "photoUrl": "https://lh3.googleusercontent.com/a/AAcHTtdCKtNOBrUW9rbIrtgNb32Tk_3QL2gSKcWASp7X=s96-c",
                                "company": null
                            }
                        ],
                        "type": "quickie"
                    },
                    {
                        "title": "Break",
                        "startsAt": "2023-10-20T16:40",
                        "endsAt": "2023-10-20T16:50",
                        "description": "Break",
                        "id": "day-2-pause-5",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "break"
                    },
                    {
                        "title": "Le micropython serpent peu connu dans la jungle IOT, mais facilement charmable vous allez voir !",
                        "startsAt": "2023-10-20T16:50",
                        "endsAt": "2023-10-20T17:10",
                        "description": "\"Programmer une carte électronique, c'est dur \" on entend souvent cette phrase, mais à quel point cela est-il vrai ? Aujourd'hui, les objets connectés font partie de notre quotidien et certains d'entre nous souhaitent peut-être se lancer dans la conception d'un système électronique, mais estiment qu'ils n'ont pas les connaissances et/ou que l'acquisition des connaissances nécessaires serait trop ardue.\n\nC'est là que le Python premier langage de l'index TIOBE en juin 2023 et l'un des seuls langages connus par l'ensemble de la communauté de développeurs rentre en scène ! Effectivement, il existe maintenant un portage de celui-ci pour microcontrôleur appelé Micropython ! Ce talk a pour but de vous en faire sa présentation de vous montrer un petit projet réalise à l'aide de celui-ci et nous l'espérons vous donner envie de vous y intéressez !",
                        "id": "lemicropythonserpentpeuconnudanslajungleiotmaisfacilementcharmab",
                        "tags": [
                            "📟 IoT & Hardware"
                        ],
                        "room": {
                            "name": "Tour de Bretagne"
                        },
                        "speakers": [
                            {
                                "id": "baptiste_candalh",
                                "name": "Baptiste Candalh",
                                "photoUrl": "https://media.licdn.com/dms/image/C5603AQEHoQitVfFRJA/profile-displayphoto-shrink_800_800/0/1660117988122?e=1698278400&v=beta&t=m9HPrPryRQwpZS2zzppGq-AXYWY7PstkO1FZmfe8boo",
                                "company": "Elephant Technologie"
                            },
                            {
                                "id": "guillaume_hourdier",
                                "name": "Guillaume Hourdier",
                                "photoUrl": "https://avatars.githubusercontent.com/u/16307397?v=4",
                                "company": "Elephant Technologie"
                            }
                        ],
                        "type": "quickie"
                    },
                    {
                        "title": "L'UX accessible : Exploitez le potentiel des attributs ARIA",
                        "startsAt": "2023-10-20T16:50",
                        "endsAt": "2023-10-20T17:10",
                        "description": "Ne pas utiliser Aria!\n\nSi l'application de cette première règle fondamentale de l'utilisation d'ARIA est simple, elle ne permet néanmoins pas de couvrir certains scénarios de parcours utilisateur, générant ainsi une expérience dégradée pour certains utilisateurs.\n\nNous découvrirons ensemble plusieurs cas d'expériences utilisateurs pour lesquels il est nécessaire d'enrichir le code par l'usage d'attributs ARIA afin de proposer une expérience utilisateur de qualité pour tous.",
                        "id": "luxaccessibleexploitezlepotentieldesattributsaria",
                        "tags": [
                            "💚 UX / UI"
                        ],
                        "room": {
                            "name": "Belem"
                        },
                        "speakers": [
                            {
                                "id": "gerome_grignon",
                                "name": "Gérôme Grignon",
                                "photoUrl": "https://pbs.twimg.com/profile_images/1060538989403365376/O8AR92ZR_400x400.jpg",
                                "company": "SFEIR"
                            }
                        ],
                        "type": "quickie"
                    },
                    {
                        "title": "Mon Expérience avec Rust ! Pourquoi c'est un Game Changer ?",
                        "startsAt": "2023-10-20T16:50",
                        "endsAt": "2023-10-20T17:10",
                        "description": "Dans ce Quickie, je vais essayer de parler de mon expérience en tant que développeur débutant en Rust. J'ai une formation Java et j'apprends maintenant Rust, et j'ai découvert beaucoup de concepts qui m'ont appris comment je devrais penser à la performance avant de commencer à coder, Ownership et Borrowing sont les concepts qui m'ont aidé à vraiment comprendre comment le stack et le heap fonctionnent ensemble. Je vais essayer de montrer quelques benchmarks entre Rust et d'autres langages afin de montrer son impact sur la performance.",
                        "id": "monexperienceavecrustpourquoicestungamechanger",
                        "tags": [
                            "📝 Languages"
                        ],
                        "room": {
                            "name": "Jules Verne"
                        },
                        "speakers": [
                            {
                                "id": "ayoub_alouane",
                                "name": "Ayoub ALOUANE",
                                "photoUrl": "https://cache.sessionize.com/image/b0cb-200o200o2-YH1o4vLSdgG7nXazZBv56b.jpg",
                                "company": "Adservio Group"
                            }
                        ],
                        "type": "quickie"
                    },
                    {
                        "title": "Rendu 3D, la grande illusion expliquée",
                        "startsAt": "2023-10-20T16:50",
                        "endsAt": "2023-10-20T17:10",
                        "description": "Dans les jeux vidéo, le cinéma, l’industrie, la médecine ou encore l’urbanisme, la 3D est partout. Nous l’utilisons aujourd’hui pour nous divertir, apprendre, simuler les prochaines  catastrophes ou encore le fonctionnement de la voiture du futur. Demain, nous l’utiliserons pour explorer de nouvelles façons de communiquer, de construire et de créer. \n\nMais comment fonctionne ce rendu 3D qui donne vie à ces univers virtuels ? Quel lien y-a-t- il entre notre vision et notre carte graphique ? Sur un écran, qui n’est qu’une grille de pixels, la 3D existe-t-elle vraiment ? \n\nPour répondre à ces questions, nous allons voir les différentes étapes nécessaires qu’un ordinateur doit accomplir pour tromper notre cerveau. Grâce à une explication pas à pas, nous pourrons comprendre le fonctionnement de cette grande illusion.\n",
                        "id": "rendu3dlagrandeillusionexpliquee",
                        "tags": [
                            "💡 Discovery"
                        ],
                        "room": {
                            "name": "Titan"
                        },
                        "speakers": [
                            {
                                "id": "thomas_guibert",
                                "name": "Thomas GUIBERT",
                                "photoUrl": "https://media.licdn.com/dms/image/C4E03AQFUO1ZlVwIzbw/profile-displayphoto-shrink_400_400/0/1516952093893?e=1700697600&v=beta&t=2hK0o8oNoXrgPWRGw3VQndkja1P4_qRx7vQFDuFHZ_8",
                                "company": "Shodo"
                            }
                        ],
                        "type": "quickie"
                    },
                    {
                        "title": "Break",
                        "startsAt": "2023-10-20T17:10",
                        "endsAt": "2023-10-20T17:20",
                        "description": "Break",
                        "id": "day-2-pause-6",
                        "tags": [],
                        "room": null,
                        "speakers": [],
                        "type": "break"
                    },
                    {
                        "title": "Keynote",
                        "startsAt": "2023-10-20T17:20",
                        "endsAt": "2023-10-20T18:00",
                        "description": "Keynote",
                        "id": "day-2-keynote-close",
                        "tags": [],
                        "room": {
                            "name": "Jules Verne"
                        },
                        "speakers": [],
                        "type": "keynote"
                    }
                ]
            }
        }
    })
}