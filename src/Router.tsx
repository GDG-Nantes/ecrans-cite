// Un router react-router-dom v6 avec 2 routes "ecran1" et "ecran2" qui affichent un composant "Ecran1" et "Ecran2" respectivement.


import { Route, Routes } from "react-router-dom";
import { Ecran } from "./ecran";

export type ConfigEcran = {
    id: string,
    salle?: 'Titan' | 'Belem' | 'Tour de Bretagne' | 'Hangar' | 'Jules Verne' | 'L\'Atelier' | 'Les Machines'
}

export default function Router() {

    const ecrans: ConfigEcran[] = [
        {
            id: 'titan',
            salle: 'Titan'
        },
        {
            id: 'belem',
            salle: 'Belem'
        },
        {
            id: 'tour-bretagne',
            salle: 'Tour de Bretagne'
        },
        {
            id: 'hangar',
            salle: 'Hangar'
        },
        {
            id: 'jules-verne',
            salle: 'Jules Verne'
        },
        {
            id: 'atelier',
            salle: 'L\'Atelier'
        },
        {
            id: 'machines',
            salle: 'Les Machines'
        }
    ]

    return (
        <Routes>
            <Route path="/" element={<Ecran id="titan" salle="Titan" />} />
            {
                ecrans.map((ecran) => <Route key={ecran.id} path={`/${ecran.id}`} element={<Ecran id={ecran.id} salle={ecran.salle}  />} />)
            }
        </Routes>
    );
}
