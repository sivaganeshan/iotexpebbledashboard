# Iotex Pebble Dashboard

### Completed Tasks:

#### Basic setup before Data Dashboard:
1. Go through the airmeet video demonstration and understand how pebble devices work, get the overall understanding
1. Create a Iotex test net account and configure it in meta mask
1. Get a pebble test device from iotex dev team 
1. Register your pebble device with the test net account you have created before.(url : https://app.iott.network/ ) (device IMEI: 100000000000009 , 
  account registered : 0xbdCF0B9759C37dBcb37BAaF43a7D27c5B74b9059)
1. Fund your account with IOTEX token through faucet service (https://faucet.iotex.io/)
1. Register your device with the help of device simulator (url : clone https://github.com/iotexproject/pebble-simulator)
1. Send simulated data via https://brewmy.info/ 
1. Verify the data from this graphql server : http://subgraph.iott.network:8000/subgraphs/name/iotex/pebble-subgraph/graphql

#### Dashboard Tasks:
1. Decide on visualising the device telemetry data (apex charts)
1. Paginated window to display each telemetry event
1. Detailed modal view of each event on click of a event from paginated view.
1. Google map marker for the latitude and longtitude values
1. Graphql response parser
1. Hex to json conversion through protobuf (did POc on both protobuf.js and google protobuf and went ahead with google protobuf library for decoding)
1. Major design templates are reused from material UI.

#### Video Demo:

Demo : https://drive.google.com/file/d/1Fwta1_7wzUGtEOLJLSzLnmMawv5rY2GD/view?usp=sharing

#### How to run the code

Code is written with the help of nextjs framework
1. checkout the code
1. npm install
1. npm run dev
1. code will run at localhost:3000
1. To test the workflow use this IMEI id: 100000000000009

#### References:
 For further reading , visit : https://iotex.gitbook.io/trustream/
