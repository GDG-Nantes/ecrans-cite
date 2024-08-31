import {Talk} from "./types.ts";
import {ApolloClient, gql, InMemoryCache} from "@apollo/client";
import {persistCacheSync, SessionStorageWrapper} from "apollo3-cache-persist";

const inMemoryCache = new InMemoryCache();

persistCacheSync({cache: inMemoryCache, storage: new SessionStorageWrapper(sessionStorage)})

const client = new ApolloClient({
  uri: 'https://confetti-app.dev/graphql',
  cache: inMemoryCache,
  headers: {
    conference: 'devfestnantes2024'
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
}
