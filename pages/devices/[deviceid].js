import React, {useState, useEffect} from "react";
import Head from "next/head";

import Header from "../../components/Header";
import { Box, } from "@material-ui/core";
import Paginateddata from "../../components/Paginateddata";
import sampleData from "../../sample";
import dynamic from 'next/dynamic';
import {GetDeviceData} from '../../qraphqlHelper';

const AreaChartComponent = dynamic(
  () => import('../../components/charts/AreaChart'),
  { ssr: false }
)

const MultiAreaChartComponent = dynamic(
    () => import('../../components/charts/MultiAxisAreaChart'),
    { ssr: false }
  )



export default function Home() {
  // const[decodedData, SetDecodedData] = useState();

  // useEffect(()=>{
  //   SetDecodedData(decodeFromProto());

  // },[])
    

  let GetTemperatures=()=>{
    let temperatures =[];

    sampleData.map((item)=>{
        if(parseInt(item.temperature2) ){
            temperatures.push(parseInt(item.temperature2));
        }
    })
    return temperatures;
  }

  let GetGasResistance=()=>{
    let gasResistance =[];

    sampleData.map((item)=>{
        if(parseInt(item.gasResistance) ){
            gasResistance.push(parseInt(item.gasResistance));
        }
    })
    return gasResistance;
  }

  let GetBatteryStats=()=>{
    let batteryStats =[];

    sampleData.map((item)=>{
        if(parseInt(item.vbat)){
            batteryStats.push(parseInt(item.vbat));
        }
    })
    return batteryStats;
  }

  let GetHumidityStats=()=>{
    let humidityStats =[];

    sampleData.map((item)=>{
        if(parseInt(item.humidity)){
            humidityStats.push(parseInt(item.humidity));
        }
    })
    return humidityStats;
  }

  let GetLightStats=()=>{
    let lightStats =[];

    sampleData.map((item)=>{
        if(parseInt(item.light)){
            lightStats.push(parseInt(item.light));
        }
    })
    return lightStats;
  }

  let GetPressureStats=()=>{
    let pressureStats =[];

    sampleData.map((item)=>{
        if(parseInt(item.pressure)){
            pressureStats.push(parseInt(item.pressure));
        }
    })
    return pressureStats;
  }

  let GetSnrStats=()=>{
    let snrStats =[];

    sampleData.map((item)=>{
        if(parseInt(item.snr)){
            snrStats.push(parseInt(item.snr));
        }
    })
    return snrStats;
  }

  let getAccelroStats=()=>{
      let accStats = {
          x:[],
          y:[],
          z:[]
      }
      sampleData.map((item)=>{
        if(item.accelerometer){
            accStats.x.push(item.accelerometer[0]?parseInt(item.accelerometer[0]):0);
            accStats.y.push(item.accelerometer[1]?parseInt(item.accelerometer[1]):0);
            accStats.z.push(item.accelerometer[2]?parseInt(item.accelerometer[2]):0);
        }
    })
    return accStats;
  }

let getGyroStats=()=>{
    let gyroStats = {
        x:[],
        y:[],
        z:[]
    }
    sampleData.map((item)=>{
        if(item.accelerometer){
            gyroStats.x.push(item.gyroscope[0]?parseInt(item.gyroscope[0]):0);
            gyroStats.y.push(item.gyroscope[1]?parseInt(item.gyroscope[1]):0);
            gyroStats.z.push(item.gyroscope[2]?parseInt(item.gyroscope[2]):0);
        }
    });
    return gyroStats;
}

useEffect(()=>{
    async function getData()
    {
        await GetDeviceData(100000000000009);
    }
    getData();
},[]);

  return (
    <>
      <Head>
        <title>Iotex Pebble Dashboard</title>
        <meta
          name="description"
          content="Visualise Pebble Data from Trustream "
        />
      </Head>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start"
        }}
      >
          
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Paginateddata />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
          }}
        >
            <Box sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
          }}>
            <Box  sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
          }}>
            <Box>
              <AreaChartComponent
                data={GetTemperatures()}
                dataVariable="Temperature"
              />
            </Box>
            <Box>
              <AreaChartComponent
                data={GetGasResistance()}
                dataVariable="Gas Resistance"
              />
            </Box>
            <Box>
              <AreaChartComponent
                data={GetBatteryStats()}
                dataVariable="Battery"
              />
            </Box>
          </Box>
            <Box sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
          }}>
          <Box>
            <AreaChartComponent
              data={GetHumidityStats()}
              dataVariable="Humidity"
            />
          </Box>
          <Box>
            <AreaChartComponent
              data={GetLightStats()}
              dataVariable="Light"
            />
          </Box>
          <Box>
            <AreaChartComponent
              data={GetPressureStats()}
              dataVariable="Pressure"
            />
          </Box>
          
          </Box>
         
            <Box sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
          }}>
            <Box >
            <AreaChartComponent
              data={GetSnrStats()}
              dataVariable="Snr"
            />
          </Box>
          <Box>
          <MultiAreaChartComponent data={getAccelroStats()}
              dataVariable="AcceleroMeter" />
          </Box>
          <Box>
          <MultiAreaChartComponent data={getGyroStats()}
              dataVariable="GyroScope" />
          </Box>

            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}






