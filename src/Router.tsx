// Un router react-router-dom v6 avec 2 routes "ecran1" et "ecran2" qui affichent un composant "Ecran1" et "Ecran2" respectivement.

import { Route, Routes } from "react-router-dom";
import { Ecran } from "./ecran";
import { getEcrans } from "./serviceEcran";

export default function Router() {

    const ecrans = getEcrans();
    return (
        <Routes>
            <Route path="/" element={<Ecran id="GH" />} />
            {
                ecrans.map((ecran) => <Route key={ecran.id} path={`/${ecran.id}`} element={<Ecran id={ecran.id} />} />)
            }
        </Routes>
    );
}