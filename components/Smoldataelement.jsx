import React from "react";
import { Box, Avatar, makeStyles,Typography} from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
   
    bgwhite:{
        backgroundColor:'#fff',
        marginRight:'0.25rem'
    }

}));


export default function Smoldataelement({imgSource, dataValue, dataVariable, unit}) { 
    let classes = useStyles();
    return(
        <>
             <Box sx={{ display: "flex", flexDirection: "row" }}>
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
        </>
    )
}