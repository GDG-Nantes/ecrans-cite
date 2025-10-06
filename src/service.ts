import {Talk} from "./types.ts";
import {ApolloClient, gql, InMemoryCache} from "@apollo/client";
import {persistCacheSync, SessionStorageWrapper} from "apollo3-cache-persist";

const inMemoryCache = new InMemoryCache();

persistCacheSync({cache: inMemoryCache, storage: new SessionStorageWrapper(sessionStorage)})

const client = new ApolloClient({
  uri: 'https://confetti-app.dev/graphql',
  cache: inMemoryCache,
  headers: {
    conference: 'devfestnantes2025'
  }
});

export const talkTitleMap: Record<string, string> = {
  "2hchronopourtraquertoutcequibougedanstonbackendavecopentelemetry": "2h chrono pour traquer tout ce qui bouge avec OpenTelemetry",
  "silencecatournedelecovolontariatalapromotiondemonsideprojectenau": "Silence... Ça tourne ! De l'éco-volontariat à la promo de mon side project en Australie",
  "biomimetismeetcybersecuritesinspirerde3milliardsdanneesdevolutio": "Biomimétisme et cybersécurité : s'inspirer de 3 milliards d'années d'évolution",
  "defrankensteinashakespeareressuscitervosconferencesenarticlesave": "Ressusciter vos présentations en blog avec AWS Amplify Gen 2 et Amazon Bedrock",
  "fromflatcardevelopmenttoproxmoxvedeploymentanexampleofopenandsus": "From Flatcar development to ProxmoxVE deployment",
  "mobilesenperspectivequelsimpactssociauxetenvironnementauxontnoss": "Mobiles en Perspective",
  "etatdeslieuxdelasouveraineteduclouddescloudspublicsauxcloudsconf": "État des Lieux de la Souveraineté : Des Clouds Publics aux Clouds Confidentiels",
  "maisquestcequonvadevenirlemetierdedevpasseaucribledesscenariosde": "Le métier de dev passé au crible des scénarios de l'ADEME",
  "45minpourmettresonapplicationagenouxleguidecompletdutestdecharge": "45 min pour mettre son app à genoux : le guide complet du test de charge",
  "limitsrequestsqospriorityclassesonbalaiecequevouspensiezsavoirsu": "Limits, Requests, QoS... tout ce que vous pensiez savoir sur le scheduling dans K8S",
  "laspirantchevalierlynxjspeutildetronermonseigneurreactnativeetle": "L'aspirant chevalier LynxJS peut-il détrôner React Native et Flutter ?",
  "demelervraisproduitsethallucinationsrexdunagenttelephoniquecherc": "Démêler vrais produits et hallucinations, REX d'un agent chercheur de chaussettes"
};

export async function getPlanning() {
  return client.query<{ sessions: { nodes: Talk[] } }>({
    query: gql`query {
        sessions(first: 1000) {
            nodes {
                title
                startsAt
                endsAt
                id
                tags
                room {
                    name
                }
                speakers {
                    id
                    name
                    photoUrl
                    company
                }
                type
            }
        }
    }`
  }).then((data) => {
    // Remplacement des titres si besoin
    return data.data.sessions.nodes.map(talk => ({
      ...talk,
      title: talkTitleMap[talk.id] || talk.title
    }));
  });
}
