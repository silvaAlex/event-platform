import { ApolloClient, InMemoryCache } from '@apollo/client'


export const client = new ApolloClient({
    uri:  'https://api-sa-east-1.graphcms.com/v2/cl4zn2kbf0c8901t3d2vfg5mp/master',
    cache: new InMemoryCache()
})
