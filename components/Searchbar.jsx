import React from "react";
import {TextField, Box} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';


export default function Searchbar() { 
    return(
        <div style={{marginTop:'3rem'}}>
            <TextField variant="outlined" style={{ width:'30rem'}} label="Search By IMEI number" id="fullWidth" />
            <SearchIcon style={{width:'3.25rem', height:'3.25rem', marginLeft:'0.75rem'}}></SearchIcon>
        </div>
    )
}