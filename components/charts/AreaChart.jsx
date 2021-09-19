import React from "react";
import Chart from "react-apexcharts";
import { makeStyles,Card, Paper, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
   
    cardHeader:{
        padding:"0.25rem",
        margin:"0.5rem 0rem"
    },

}));


export default function AreaChart({data, dataVariable}) { 
    let classes = useStyles();
    let options= {
            Chart: {
              id: "temperature-bar",
            },
            dataLabels: {
                enabled: false
              },
              legend:{
                  show:false
              },
            stroke: {
              curve: "smooth",
            },
            labels:[],
            xaxis:{
                categories:[[]]
            }
          }
    

    let series = ()=>{
        return(
            [
                {
                  name: {dataVariable},
                  data: [...data]
                }
              ]
        )
    }
    return(
        <>
          <Card elevation={3} style={{margin:'0.25rem'}}>
              <Paper className={classes.cardHeader}>
              <Typography component="span"
                  variant="body2"
                  style={{ marginRight: "4px", fontSize: "1rem" }}>
                        {dataVariable}
                    </Typography>
              </Paper>
          <Chart
              options={options}
              series={series()}
              type='area'
              width='300'
              height='250'
            />
          </Card>  
        </>
    )
}