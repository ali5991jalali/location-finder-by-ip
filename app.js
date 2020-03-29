//calling packages
const express = require('express');
//end 

const app = express(); //make app from express main method

//configs
const { port } = require('./configs/all_project');
//end 

//controllers
const mongo_connection = require('./controllers/mongo_connection');  //connecting to mongo by consructor method
const ip_finder = require('./controllers/user_ip'); //controller for appending ip to requset 
const main_function = require('./controllers/main_page'); //getting main function of projrct
const checkLastUser = require('./controllers/checkLastUse');  //check if user entered at the last send from database
//end 

//getting client ip
app.param('ip', ip_finder.user_ip_by_params);
//end 

//main api for testing
app.use('/api', require('./routes/each_api'));
//end of main apis


app.get('/location/:ip', checkLastUser, main_function); //main route of project


//make serever to listen to specific port
app.listen(port, () => {
    console.log(`Application is running on port ${port}...`)
})
//end 