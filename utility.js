import DataStore from "./DataStore";

// Convert a hex string to a byte array
export const hexToBytes=(hex)=> {
    for (var bytes = [], c = 2; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}

// Convert a byte array to a hex string
// export const bytesToHex=(bytes)=> {
//     for (var hex = [], i = 0; i < bytes.length; i++) {
//         var current = bytes[i] < 0 ? bytes[i] + 256 : bytes[i];
//         hex.push((current >>> 4).toString(16));
//         hex.push((current & 0xF).toString(16));
//     }
//     return hex.join("");
// }

export const decodeFromProto =(hex) =>{

    let schema = require("./pebble_pb");
    let data = hexToBytes(hex);
    return schema.SensorData.deserializeBinary(new Uint8Array(data)).toObject();

}

export const GetTemperatures=(currentdeviceData)=>{

    let temperatures =[];
    currentdeviceData.map((item)=>{
        if(parseInt(item.temperature2) ){
            temperatures.push(parseInt(item.temperature2));
        }
    })
    return temperatures;
  }

export const GetGasResistance=(currentdeviceData)=>{
    let gasResistance =[];

    currentdeviceData.map((item)=>{
        if(parseInt(item.gasresistance) ){
            gasResistance.push(parseInt(item.gasresistance));
        }
    })
    return gasResistance;
  }


  export const GetBatteryStats=(currentdeviceData)=>{
    let batteryStats =[];

    currentdeviceData.map((item)=>{
        if(parseInt(item.vbat)){
            batteryStats.push(parseInt(item.vbat));
        }
    })
    return batteryStats;
  }

  export const GetHumidityStats=(currentdeviceData)=>{
    let humidityStats =[];

    currentdeviceData.map((item)=>{
        if(parseInt(item.humidity)){
            humidityStats.push(parseInt(item.humidity));
        }
    })
    return humidityStats;
  }

  export const GetLightStats=(currentdeviceData)=>{
    let lightStats =[];

    currentdeviceData.map((item)=>{
        if(parseInt(item.light)){
            lightStats.push(parseInt(item.light));
        }
    })
    return lightStats;
  }


  export const  GetPressureStats=(currentdeviceData)=>{
    let pressureStats =[];

    currentdeviceData.map((item)=>{
        if(parseInt(item.pressure)){
            pressureStats.push(parseInt(item.pressure));
        }
    })
    return pressureStats;
  }

  export const GetSnrStats=(currentdeviceData)=>{
    let snrStats =[];

    currentdeviceData.map((item)=>{
        if(parseInt(item.snr)){
            snrStats.push(parseInt(item.snr));
        }
    })
    return snrStats;
  }

  export const getAccelroStats=(currentdeviceData)=>{
    let accStats = {
        x:[],
        y:[],
        z:[]
    }
    currentdeviceData.map((item)=>{
      if(item.accelerometerList){
          accStats.x.push(item.accelerometerList[0]?parseInt(item.accelerometerList[0]):0);
          accStats.y.push(item.accelerometerList[1]?parseInt(item.accelerometerList[1]):0);
          accStats.z.push(item.accelerometerList[2]?parseInt(item.accelerometerList[2]):0);
      }
  })
  return accStats;
}

export const getGyroStats=(currentdeviceData)=>{
    let gyroStats = {
        x:[],
        y:[],
        z:[]
    }
    currentdeviceData.map((item)=>{
        if(item.gyroscopeList){
            gyroStats.x.push(item.gyroscopeList[0]?parseInt(item.gyroscopeList[0]):0);
            gyroStats.y.push(item.gyroscopeList[1]?parseInt(item.gyroscopeList[1]):0);
            gyroStats.z.push(item.gyroscopeList[2]?parseInt(item.gyroscopeList[2]):0);
        }
    });
    return gyroStats;
}



