import React from "react";
import { AppBar, Toolbar, Typography, Avatar, Box, createTheme, ThemeProvider} from "@material-ui/core";
import myImg from '../assets/iotex_logo.png';
import Image from "next/image";
const appBartheme = new createTheme({
    zIndex:{
        AppBar:1250
    }
  })


export default function Header() {  

    const drawerWidth = 260;
    return (
      <>
       <ThemeProvider theme={appBartheme}>
       <AppBar position="relative" >
               <Box sx={{display:'flex' ,flexDirection:'row ', justifyContent:'center',
           alignItems:'center',background:'#fff' ,color:'#111', padding:'0.5rem'}}>
               <Avatar >
                <Image src={myImg} alt={"Iotex_logo"} />
              </Avatar>
              <Typography
                variant="h6"
                noWrap
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                style={{ marginLeft: "0.5rem" }}
              >
                Iotex Pebble DashBoard
              </Typography>
               </Box>
           
          </AppBar>
       </ThemeProvider>
      </>
    );

}
    