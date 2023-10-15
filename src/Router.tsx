import {Navigate, Route, Routes} from "react-router-dom";
import {ComposantEcran} from "./composant-ecran.tsx";
import {ECRANS} from "./serviceEcran.ts";
import {Superviseur} from "./superviseur";

export default function Router() {

  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={"/superviseur"}/>}/>
      <Route path={"/superviseur"} element={<Superviseur/>}/>
      {
        ECRANS.map((ecran) => <Route key={ecran.id} path={`/${ecran.id}`}
                                     element={<ComposantEcran {...ecran}/>}/>)
      }
    </Routes>
  );
}
