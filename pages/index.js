import React, {useState, useEffect} from "react";
import Head from "next/head";
import styles from '../styles/Home.module.css';
import {hexToBytes,bytesToHex, decodeFromProto} from "../utility";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import { Box, createTheme, ThemeProvider} from "@material-ui/core";




export default function Home() {
  // const[decodedData, SetDecodedData] = useState();

  // useEffect(()=>{
  //   SetDecodedData(decodeFromProto());

  // },[])

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
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Searchbar />
         
         </Box>
    </>
  );
}
