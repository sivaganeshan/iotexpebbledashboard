import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
import fetch from 'cross-fetch';
import gql from 'graphql-tag';
import _ from 'lodash';
import DataStore from "./DataStore";

const defaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }

const MapperToDeviceData=(data)=>{

};
export async function GetDeviceData(deviceId) {
    const client = new ApolloClient({
        link: new HttpLink({
            fetch,
             uri: 'http://34.146.117.200:8000/subgraphs/name/iotex/pebble-subgraph',
            //  uri:'http://subgraph.iott.network:8000/subgraphs/name/iotex/pebble-subgraph/graphql'
        }),
        cache: new InMemoryCache(),
        defaultOptions
    });

    const data = await client.query({
        query: gql`
           query{
                deviceRecords(where:{imei:"${deviceId}"}){
                    raw 
                    imei
                    timestamp
                  }
            }
        `,
    });

    let staticInstance = DataStore.getInstance();
    staticInstance.setGlobalStatsData(_.get(data, 'data.deviceRecords'));
}

