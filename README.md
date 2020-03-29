# locations-api-by-ip
you can find each location data by entering ip adress of that location
this project get location api from different websites by passing ip adress 

--------------------------------------------

the websites I have Used for getting location api Are:

https://ipinfodb.com/

https://ipapi.co/

https://ip.briantafoya.com

https://db-ip.com

https://ipdata.co/

http://ip-api.com/

----------------------------------------------

I used maongodb and mongoose to connecting and using database


/***



EASILY START AND RUN PROJECT
--------------------------------

1-fist use npm install to add packages to your system

2-second Run Mongo Drive for connecting mongo and in CLI type (use apilocations) to set database name

3-type npm start to run server



using urls:

3-1- if you want to see each website api you will use below urls  (:ip means the ip you want to search for)

    http://localhost:4000/api/ipdata/:ip

    http://localhost:4000/api/ipapi/:ip

    http://localhost:4000/api/ip-api/:ip

    http://localhost:4000/api/dbip/:ip

    http://localhost:4000/api/briantafoya/:ip

    http://localhost:4000/api/ipinfodb/:ip


3-2- for testing and using main api of project use this urls

    http://localhost:4000/location/:ip

*/

4-if you want to test project use npm test
-------------------------------------



//  project useful packages installed with npm   // 

for using ES6 codes we use 3 packages 

    1-"babel-cli"
    2-"babel-preset-env"
    3-"babel-preset-stage-0"
    

    other packages of project

    "axios": "^0.18.0",
    "chai": "^4.1.2",
    "express": "^4.16.3",
    "mocha": "^5.2.0",
    "mongoose": "^5.2.17",
    "mongoose-timestamp": "^0.6.0",
    "request": "^2.88.0"

    //mocha and chai packages are for testing routes


*/


/**    YOU CAN FIND SERVICES AND  MAIN DATA ABOUT THEM IN FILE ./CONFIGS/SERVICES.JS     **/




///    ABOUT WRTING PROJECT CODES   ///
----------------------------
along getting api for project we use 6 (depends on developer)

we check each api service one by one and if one of them couldnt send back 

response system will check next service to find location api 

----------------------------


we set this project not to let users to send more than permitted requsets for each api

in this project we used javascript,nodejs,ES5,ES6,ES7,mongodb,Express to write exact code

