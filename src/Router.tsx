// Un router react-router-dom v6 avec 2 routes "ecran1" et "ecran2" qui affichent un composant "Ecran1" et "Ecran2" respectivement.


import { Route, Routes } from "react-router-dom";
import { Ecran } from "./ecran";

export default function Router() {

    const ecrans = [
        {
            id: 'ecran1',
            nom: 'Titan'
        },
        {
            id: 'ecran2',
            nom: 'Bellem'
        }
    ]

    return (
        <Routes>
            {
                ecrans.map((ecran) => <Route key={ecran.id} path={`/${ecran.id}`} element={<Ecran id={ecran.id} nom={ecran.nom}  />} />)
            }
        </Routes>
    );
}