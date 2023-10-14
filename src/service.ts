import {Talk} from "./types.ts";
import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://confetti-app.dev/graphql',
  cache: new InMemoryCache(),
  headers: {
    conference: 'devfestnantes2023'
  }
});

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
  }).then((data) => data.data.sessions.nodes);
  // return import('./data.json').then((data) => data.default.data.sessions.nodes) as Promise<Talk[]>;
}
