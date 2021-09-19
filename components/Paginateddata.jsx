import React from "react";
import { Paper,Box,List, Divider,makeStyles,Typography, Modal, CircularProgress} from "@material-ui/core";
import sampleData from '../sample';
import Pagination from "@material-ui/lab/Pagination";
import { v4 as uuidv4 } from 'uuid';
import Dataelement from './Dataelement';
import Smoldataelement from './Smoldataelement';
import Mapelement from "./Mapelement";
import Dataelementtype2 from "./Dataelementtype2"
//Images
import tempImg from '../assets/temperature.svg';
import gasImg from '../assets/mask.svg';
import batteryImg from '../assets/battery.svg';
import humidityImg from '../assets/humidity.svg';
import lightImg from '../assets/light.svg';
import pressureImg from '../assets/pressure.svg';
import noiseImg from '../assets/noise_1.svg';
import acceleroImg from '../assets/accelero.svg';
import gyroImg from '../assets/gyro.svg';



const useStyles = makeStyles((theme) => ({
    paginator: {
        justifyContent: "center",
        padding: "10px"
      },
      bgwhite:{
          backgroundColor:'#fff',
          marginRight:'0.25rem'
      },
      '@global': {
        'ul>div:nth-child(odd)': {
            color: '#1b1eba',
        },
        'ul>div:nth-child(even)': {
            color: '#c51b35'
        }
    },
    pageData:{
        minHeight:'50%',
        maxHeight:'60%'
    }

}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p:4
  };

export default function Paginateddata() { 

    let classes = useStyles();

    let currentData = [];
    [...sampleData].map((item)=>{
        item.latitude = (new Int32Array([item.latitude]))[0];
        item.longitude = (new Int32Array([item.longitude]))[0];
        currentData.push({...item, id:uuidv4()});
    });

    const[pebbleStates, SetPebbleStates] =  React.useState(currentData);
    const [selected, setSelected] = React.useState(null);
    const itemsPerPage = 8;
    const [page, setPage] = React.useState(1);
    const [noOfPages] = React.useState(
      Math.ceil(pebbleStates.length / itemsPerPage)
    );

    const handleChange = (event, value) => {
      setPage(value);
    };

    let modalPopup=(id)=>{
        let selectedData = pebbleStates.filter((item)=> item.id ===id);
        console.log("clicked id :"+id + " selected id: "+selectedData[0].id + " latitude & langituted :"
        + selectedData[0].latitude+" "+selectedData[0].longitude);
        setSelected(selectedData[0]);
        setOpen(true);
    }

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    return (
      <>
        <Paper elevation={5} >
          <Box sx={{ marginTop: "1rem", marginLeft: "0.75rem" }}>
            <Typography
              component="span"
              variant="body2"
              color="textPrimary"
              style={{
                paddingTop: "1rem",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              Recent Device Data
            </Typography>
          </Box>

          <Paper elevation={5} style={{display:'flex', justifyContent:'center', flexDirection:'column',
           alignItems:'center', padding:'1rem', margin:'0.25rem'}}>
            <CircularProgress component="div" color="secondary"/>
            <Typography component="div"
                  variant="body2"
                  style={{ marginRight: "4px", fontSize: "1rem" }}>
                        Subscribed to GraphGL Server
                    </Typography>
           </Paper>

          <List>
            {pebbleStates
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((item, index) => {
                return (
                  <Paper elevation={1} key={item.id}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "0.25rem",
                        padding: "0.5rem",
                        justifyContent: "space-between",
                      }}
                      onClick={() => {
                        modalPopup(item.id);
                      }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "row", marginRight:'6rem' }}>
                        <Typography
                          component="span"
                          variant="body2"
                          style={{ marginRight: "4px" }}
                        >
                          {new Date(item.timestamp * 1000).toLocaleString()}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <Smoldataelement
                          imgSource={tempImg}
                          dataValue={item.temperature2}
                          dataVariable="Temperature"
                          unit={<span>&#8451;</span>}
                        />
                        <Smoldataelement
                          imgSource={batteryImg}
                          dataValue={item.vbat}
                          dataVariable="Battery"
                        />
                        <Smoldataelement
                          imgSource={gasImg}
                          dataValue={item.gasResistance}
                          dataVariable="Gas"
                        />
                      </Box>
                    </Box>
                  </Paper>
                );
              })}
          </List>
          <Divider />
          <Box component="span">
            <Pagination
              count={noOfPages}
              page={page}
              onChange={handleChange}
              defaultPage={1}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
              classes={{ ul: classes.paginator }}
            />
          </Box>
        </Paper>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {selected && (
              // <Paper>
              <Box sx={{display: "flex", flexDirection: "column", flexGrow:1}}>
                <Box>
                  <Mapelement
                    latitude={selected.latitude}
                    longtitude={selected.longitude}
                  />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent:"space-around" , margin:"0.5rem 0.5rem" }}>
                  <Dataelement
                    imgSource={tempImg}
                    dataValue={selected.temperature2}
                    dataVariable="Temperature"
                    unit={<span>&#8451;</span>}
                  />
                  <Dataelement
                    imgSource={batteryImg}
                    dataValue={selected.vbat}
                    dataVariable="Battery"
                  />
                  <Dataelement
                    imgSource={gasImg}
                    dataValue={selected.gasResistance}
                    dataVariable="Gas "
                  />
                  <Dataelement
                    imgSource={humidityImg}
                    dataValue={selected.humidity}
                    dataVariable="Humidity"
                  />
                  <Dataelement
                    imgSource={lightImg}
                    dataValue={selected.light}
                    dataVariable="Light "
                  />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row",justifyContent:"space-around" , margin:"0.5rem 0.5rem" }}>
                <Dataelement
                    imgSource={pressureImg}
                    dataValue={selected.pressure}
                    dataVariable="Pressure"
                  />
                  <Dataelement
                    imgSource={noiseImg}
                    dataValue={selected.snr}
                    dataVariable="Snr"
                  />
                  <Dataelementtype2 
                    imgSource={acceleroImg}
                    dataValue={selected.gyroscope}
                    dataVariable="Accelerometer"/>
                  <Dataelementtype2 
                    imgSource={gyroImg}
                    dataValue={selected.accelerometer}
                    dataVariable="Gyroscope"/>
                </Box>
              </Box>
            )}
          </Box>
        </Modal>
      </>
    );
}