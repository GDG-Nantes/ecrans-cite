import {Route, Routes} from "react-router-dom";
import {Ecran} from "./ecran";
import {ECRANS} from "./serviceEcran.ts";
import {Superviseur} from "./superviseur";

export default function Router() {

  return (
    <Routes>
      <Route path={"/"} element={<Superviseur/>}/>
      {
        ECRANS.map((ecran) => <Route key={ecran.id} path={`/${ecran.id}`}
                                     element={<Ecran {...ecran}/>}/>)
      }
    </Routes>
  );
}
