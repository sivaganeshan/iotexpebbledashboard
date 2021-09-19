import React from "react";
import { Card, makeStyles,Typography,CardContent, Paper} from "@material-ui/core";
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';

const useStyles = makeStyles((theme) => ({
   
   
    cardHeader:{
        width:'520px',
        padding:"0.25rem",
        margin:"0.5rem 0rem"
    },
    cardContent:{
        width:'520px',
        height:'250px'
    }

}));



export default function Mapelement({latitude, longtitude}) { 

    
    let WrappedMap = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{ lat: latitude, lng: longtitude }}
        >
          <Marker position={{ lat: latitude, lng: longtitude }} />
        </GoogleMap>
      ))
    );

    let classes = useStyles();

    return(
        <>
        <Card elevation={5}>
            <CardContent>
                <Paper elevation={3} className={classes.cardHeader}>
                    <Typography component="span"
                  variant="body2"
                  style={{ marginRight: "4px", fontSize: "1rem" }}>
                        Location : latitude: {latitude}, longitude: {longtitude}
                    </Typography>
                </Paper>
                <Paper elevation={3} className={classes.cardContent}>
                    <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?ibraries=geometry,drawing,places`}
                    loadingElement={<div style={{height:'100%'}}/>} 
                    containerElement={<div style={{height:'100%'}}/>}
                    mapElement={<div style={{height:'100%'}}/>}/>
                </Paper>
            </CardContent>
        </Card>
      
        </>
    )
}