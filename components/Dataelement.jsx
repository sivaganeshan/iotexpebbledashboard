import React from "react";
import {TextField, Box, Card, Avatar, makeStyles,Typography,CardContent} from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
   
    bgwhite:{
        backgroundColor:'#fff',
        marginRight:'0.25rem'
    }

}));


export default function Dataelement({imgSource, dataValue, dataVariable, unit}) { 

    let classes = useStyles();

    return (
      <>
        <Card variant="outlined" elevation={3}>
          <CardContent>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box>
                <Typography
                  component="span"
                  variant="body2"
                  style={{ marginRight: "4px", fontSize: "1rem" }}
                >
                  {dataVariable}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" , marginTop:'1rem'}}>
              <Avatar className={classes.bgwhite}>
                <Image src={imgSource} alt={dataVariable} />
              </Avatar>
              <Typography
                component="span"
                variant="body2"
                style={{ marginRight: "4px", fontSize: "1rem" }}
              >
                {dataValue}{unit && unit}
              </Typography>
            </Box>
            </Box>
          </CardContent>
        </Card>
      </>
    );
}