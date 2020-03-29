/*
in this page and js doc we write code for 

main location setter function and I have used ES7 async / await

for make it standard

*/


const find_service = require('./find_service');



//calling ip classes
const ipinfodb = require('./../controllers/main_apis/ipinfodb');
const ipapi = require('./../controllers/main_apis/ipapi');
const ipbriantafoya = require('./../controllers/main_apis/ipbriantafoya');
const dbip = require('./../controllers/main_apis/dbip');
const ipdata = require('./../controllers/main_apis/ipdata');
const ip_api = require('./../controllers/main_apis/ip_api');
//end

//calling promise_search controller
//const search_promise = require('./search_promise');
const { checkRedis } = require('./redisController')
//end


const main_function = async (req, res) => {

    
    //let ipapi_success = await search_promise('ipapi', ((find_service('ipapi')).time), ((find_service('ipapi')).number));
    let ipapi_success=await checkRedis('ipapi');
    
    if (ipapi_success) {
        let result = await ipapi.get_and_set_ip_promise(req, res);
        if (result.success === true) {
            res.send(result);
            return;
        }
    }

    //let ip_api_success = await search_promise('ip-api', ((find_service('ip-api')).time), ((find_service('ip-api')).number));
    let ip_api_success=await checkRedis('ip-api')
    if (ip_api_success) {
        let result = await ip_api.get_and_set_ip_promise(req, res);
        if (result.success === true) {
            res.send(result);
            return;
        }
    }

    //let dbip_success = await search_promise('db-ip', ((find_service('dbip')).time), ((find_service('dbip')).number));
    let dbip_success=await checkRedis('dbip')
    if (dbip_success) {
        let result = await dbip.get_and_set_ip_promise(req, res)
        if (result.success === true) {
            res.send(result);
            return;
        }
    }

    //let ipdata_success = await search_promise('ipdata', ((find_service('ipdata')).time), ((find_service('ipdata')).number));
    let ipdata_success=checkRedis('ipdata');
    if (ipdata_success) {
        let result = await ipdata.get_and_set_ip_promise(req, res);
        if (result.success === true) {
            res.send(result);
            return;
        }
    }

    //let ipbriant_success = await search_promise('ip-briant', ((find_service('ipbriantafoya')).time), ((find_service('ipbriantafoya')).number));
    let ipbriant_success=await checkRedis('ipbriantafoya')
    if (ipbriant_success) {
        let result = await ipbriantafoya.get_and_set_ip_promise(req, res);
        if (result.success === true) {
            res.send(result);
            return;
        }
    }

    //let infodb_success = await search_promise('ip-infodb', ((find_service('ipinfodb')).time), ((find_service('ipinfodb')).number));
    let infodb_success=await checkRedis('ipinfodb');
    if (infodb_success) {
        let result = await ipinfodb.get_and_set_ip_promise(req, res);
        if (result.success === true) {
            res.send(result);
            return;
        }
    }

    //error handler
    res.send({ success: false, message: 'you cant access any more because of large amount of requests or problem in internet connection' });
    return;
}


module.exports = main_function;