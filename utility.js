// Convert a hex string to a byte array
export const hexToBytes=(hex)=> {
    for (var bytes = [], c = 2; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}

// Convert a byte array to a hex string
export const bytesToHex=(bytes)=> {
    for (var hex = [], i = 0; i < bytes.length; i++) {
        var current = bytes[i] < 0 ? bytes[i] + 256 : bytes[i];
        hex.push((current >>> 4).toString(16));
        hex.push((current & 0xF).toString(16));
    }
    return hex.join("");
}

export const decodeFromProto =() =>{

    //For signed integer converter
    // (new Int32Array([4294967214]))[0]
    let schema = require("./pebble_pb");
    let hecVal = "0x0824101d182720aeffffff0f281b3014381a40214821501e5840584e5834602e604860406a023235";
    let data = hexToBytes(hecVal);
    return schema.SensorData.deserializeBinary(new Uint8Array(data)).toObject();

}



