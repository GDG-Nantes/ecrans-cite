import React from 'react'
import ReactDOM from 'react-dom/client'
import 'src/styles/index.scss'
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import {getPlanning} from "src/service.ts";
import {ECRANS} from "src/data/Ecrans.ts";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {ComposantEcran} from "src/components/composant-ecran.tsx";
import {Superviseur} from "src/components/superviseur.tsx";


let buildTime: string

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={new QueryClient()}>
    <App/>
  </QueryClientProvider>
)

function App() {

  const {data: planning, error} = useQuery({
    queryKey: ['planning'],
    queryFn: () => getPlanning(),
    refetchInterval: 10000
  })

  React.useEffect(() => {
    const intervalReload = setInterval(() => {
      void fetch('/buildTime.txt', {
        cache: "no-store"
      }).then(async (response) => {
        const dateText = await response.text();
        if (buildTime == null) {
          buildTime = dateText
        } else if (buildTime !== dateText) {
          window.location.reload()
        }
      })
    }, 60 * 1000)
    return () => clearInterval(intervalReload)
  }, [])

  const Ecrans = React.useMemo(() => {
    if (error || planning == null) {
      return <></>
    }
    return ECRANS.map((ecran) => <Route key={ecran.id} path={`/${ecran.id}`}
                                        element={<ComposantEcran planning={planning} {...ecran}/>}/>)
  }, [planning, error])

  return <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Navigate to={"/superviseur"}/>}/>
      <Route path={"/superviseur"} element={<Superviseur/>}/>
      {Ecrans}
      <Route path={"/*"} element={<></>}/>
    </Routes>
  </BrowserRouter>;
}
