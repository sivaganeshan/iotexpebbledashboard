import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
import fetch from 'cross-fetch';
import gql from 'graphql-tag';
import _ from 'lodash';
import DataStore from "./DataStore";
import {decodeFromProto} from "./utility";
import { v4 as uuidv4 } from 'uuid';

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

    //Parsing logic
    let rawResponse = _.get(data, 'data.deviceRecords');
    let decodedResponse = [];
    if(rawResponse && rawResponse.length>0){
        rawResponse.map((item)=>{
            if(item && item.raw){
                let decodedData = decodeFromProto(item.raw);
                if(decodedData.latitude && decodedData.longitude){
                    decodedData.latitude = (new Int32Array([decodedData.latitude]))[0];
                    decodedData.longitude = (new Int32Array([decodedData.longitude]))[0];
                }
                decodedData.timestamp = item.timestamp;
                decodedData.id = uuidv4();
                decodedResponse.push(decodedData);
            }
        })
    }

    let staticInstance = DataStore.getInstance();
    staticInstance.setGlobalStatsData(decodedResponse);
}

