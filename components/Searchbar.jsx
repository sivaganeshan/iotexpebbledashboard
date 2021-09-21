import React , {useState}from "react";
import {TextField, Box} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from 'next/router'


export default function Searchbar() { 

    const[searchVal, SetSearchVal] = useState("");
    let router = useRouter();
    const[isError, SetisError] = useState(false);

    let RiredirectToDevice=()=>{
   
        if(ValidateIMEI(searchVal)){
            router.push(`/devices/${searchVal}`);
        }
        else{
            SetisError(true);
        }
        
    }

    let ValidateIMEI=(val)=>{

        let validationPaased = false;

        if(parseInt(val) && val.length ===15){
            validationPaased = true;
            SetisError(false);
        }
        else{
            validationPaased = false;
            SetisError(true);
        }

        return validationPaased;
    }

    return(
        <div style={{marginTop:'3rem'}}>
            <TextField error={isError} variant="outlined" style={{ width:'30rem'}} 
                label="Search By IMEI number" id="fullWidth"
                onChange={(event)=>{SetSearchVal(event.target.value)}} value={searchVal}
                onBlur={(event)=>{ValidateIMEI(event.target.value)}}
                helperText="Enter 15 Digit IMEI Number only"/>
            <SearchIcon style={{width:'3.25rem', height:'3.25rem', marginLeft:'0.75rem'}}
             onClick={()=>{RiredirectToDevice()}}></SearchIcon>
        </div>
    )
}