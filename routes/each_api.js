
const express = require('express');
const router = express.Router();

const ip_finder = require('./../controllers/user_ip'); //calling controller for making ip useful

router.param('ip', ip_finder.user_ip_by_params); //make ip useful

/*
this router has been set for testing each website's api 
*/

//calling controllers
const ipinfodb = require('./../controllers/main_apis/ipinfodb');
const ipapi = require('./../controllers/main_apis/ipapi');
const ipbriantafoya = require('./../controllers/main_apis/ipbriantafoya');
const dbip = require('./../controllers/main_apis/dbip');
const ipdata = require('./../controllers/main_apis/ipdata');
const ip_api = require('./../controllers/main_apis/ip_api');
//end of importing controllers 


//api routes
router.get('/ipinfodb/:ip', ipinfodb.search_collection, ipinfodb.get_and_set_ip);
router.get('/ipapi/:ip', ipapi.get_and_set_ip);
router.get('/briantafoya/:ip', ipbriantafoya.get_and_set_ip);
router.get('/dbip/:ip', dbip.search_collection, dbip.get_and_set_ip);
router.get('/ipdata/:ip', ipdata.search_collection, ipdata.get_and_set_ip);
router.get('/ip-api/:ip', ip_api.search_collection, ip_api.get_and_set_ip);
//end


module.exports = router;