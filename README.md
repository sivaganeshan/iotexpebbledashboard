# Iotex Pebble Dashboard

### Tasks completed:

#### Basic setup before Data Dashboard:
1) Go through the airmeet video demonstration and understand how pebble devices work, get the overall understanding
2)Create a Iotex test net account and configure it in meta mask
3)Get a pebble test device from iotex dev team 
4)Register your pebble device with the test net account you have created before.(url : https://app.iott.network/ ) (device IMEI: 100000000000009 , 
  account registered : 0xbdCF0B9759C37dBcb37BAaF43a7D27c5B74b9059)
5) Fund your account with IOTEX token through faucet service (https://faucet.iotex.io/)
6) Register your device with the help of device simulator (url : clone https://github.com/iotexproject/pebble-simulator)
7) Send simulated data via https://brewmy.info/ 
8) Verify the data from this graphql server : http://subgraph.iott.network:8000/subgraphs/name/iotex/pebble-subgraph/graphql

#### Dashboard Tasks:
1)Decide on visualising the device telemetry data (apex charts)
2)Paginated window to display each telemetry event
3)Detailed modal view of each event on click of a event from paginated view.
4)Google map marker for the latitude and longtitude values
5)Graphql response parser
6)Hex to json conversion through protobuf (did POc on both protobuf.js and google protobuf and went ahead with google protobuf library for decoding)
7)Major design templates are reused from material UI.

#### Video Demo:

Demo : https://drive.google.com/file/d/1Fwta1_7wzUGtEOLJLSzLnmMawv5rY2GD/view?usp=sharing

#### How to run the code

Code is written with the help of nextjs framework
1)checkout the code
2)npm install
3)npm run dev
4)code will run at localhost:3000
5)To test the workflow use this IMEI id: 100000000000009

####References
 For further reading , visit : Iotex.gitbook.io/trustream 
