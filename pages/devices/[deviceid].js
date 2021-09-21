import React, {useState, useEffect} from "react";
import Head from "next/head";
import Header from "../../components/Header";
import { Box, CircularProgress, Paper} from "@material-ui/core";
import Paginateddata from "../../components/Paginateddata";
import dynamic from 'next/dynamic';
import {GetDeviceData} from '../../qraphqlHelper';
import DataStore from "../../DataStore";
import {getGyroStats,getAccelroStats,GetSnrStats,
    GetPressureStats,GetLightStats,GetHumidityStats,
    GetBatteryStats,GetGasResistance,GetTemperatures} from "../../utility";

import {useRouter} from 'next/router';

const AreaChartComponent = dynamic(
  () => import('../../components/charts/AreaChart'),
  { ssr: false }
)

const MultiAreaChartComponent = dynamic(
    () => import('../../components/charts/MultiAxisAreaChart'),
    { ssr: false }
  )



export default function DeviceRecords() {
  // const[decodedData, SetDecodedData] = useState();

  // useEffect(()=>{
  //   SetDecodedData(decodeFromProto());

  // },[])
const[isLoading, setIsLoading] = useState(true);    
const[currentdeviceData , setCurrentDeviceData] = useState(null); 
let router = useRouter();
 

useEffect(()=>{
   function getData()
    {
        let { deviceId } = router.query;
        if(!deviceId){
            deviceId = window.location.href.split("devices/")[1];   
        }
        GetDeviceData(deviceId).then(()=>{
            let staticInstance = DataStore.getInstance();
            setCurrentDeviceData(staticInstance.getGlobalStatsData());
            setIsLoading(false);
        })
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
      {isLoading?
      <Box elevation={5} style={{display:'flex', justifyContent:'center', flexDirection:'column',
      alignItems:'center', padding:'1rem', margin:'0.25rem'}}>
       <CircularProgress component="div" color="secondary"/>
      </Box>:
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
        >{
            currentdeviceData && <Paginateddata currentData = {currentdeviceData}/>
        }
          
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
                data={GetTemperatures(currentdeviceData)}
                dataVariable="Temperature"
              />
            </Box>
            <Box>
              <AreaChartComponent
                data={GetGasResistance(currentdeviceData)}
                dataVariable="Gas Resistance"
              />
            </Box>
            <Box>
              <AreaChartComponent
                data={GetBatteryStats(currentdeviceData)}
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
              data={GetHumidityStats(currentdeviceData)}
              dataVariable="Humidity"
            />
          </Box>
          <Box>
            <AreaChartComponent
              data={GetLightStats(currentdeviceData)}
              dataVariable="Light"
            />
          </Box>
          <Box>
            <AreaChartComponent
              data={GetPressureStats(currentdeviceData)}
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
              data={GetSnrStats(currentdeviceData)}
              dataVariable="Snr"
            />
          </Box>
          <Box>
          <MultiAreaChartComponent data={getAccelroStats(currentdeviceData)}
              dataVariable="AcceleroMeter" />
          </Box>
          <Box>
          <MultiAreaChartComponent data={getGyroStats(currentdeviceData)}
              dataVariable="GyroScope" />
          </Box>

            </Box>
          </Box>
        </Box>
      </Box>
    
        }
    </>
  );
}






