import {Route, Routes} from "react-router-dom";
import {Ecran} from "./ecran";
import {ECRANS} from "./serviceEcran.ts";

export default function Router() {

  return (
    <Routes>
      {
        ECRANS.map((ecran) => <Route key={ecran.id} path={`/${ecran.id}`}
                                     element={<Ecran {...ecran}/>}/>)
      }
    </Routes>
  );
}
