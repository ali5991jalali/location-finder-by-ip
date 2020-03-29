const axios = require('axios'); //calling axios package

const enter_model = require('./../../models/enter'); //importing enter model

const api_key = 'b2c23abf1325274b6c758b5d0fb1cd042e87b06e62e992d835a1e70182f9ecc4'; //api_key to use infodb api

const find_service = require('./../../controllers/find_service');

const service = find_service('ipapi')




module.exports = new class App {

    search_collection(req, res, next) {

        enter_model.find({ service: 'ip-infodb', "createdAt": { $gt: new Date(Date.now() - service.time) } }, (err, data) => {

            if (err) {
                res.json({ success: false, message: 'error in connecting to database', status: 'error' });
                return;
            } else {

                if (data.length > service.number) {

                    res.json({ success: false, message: 'you cant send more than 1 request to ipinfodb per second', status: 'more' });
                    return;

                } else {
                    next();
                }
            }
        })
    }

    get_and_set_ip(req, res) {

        let ip = req.userip;
        let url = `http://api.ipinfodb.com/v3/ip-city/?key=${api_key}&ip=${ip}`

        axios.get(url)
            .then((result) => { return (result.data).split(';') })
            .then((data) => {

                enter_model.create({ ip, service: 'ip-infodb', country: (data[4]), city: (data[6]), region: (data[5]), latitude: (data[8]), longitude: (data[9]) }, (db_err, db_data) => {

                    if (db_err) {
                        res.json({ success: false, message: 'error in connectig to database' });
                        return;
                    } else {
                        res.json({ success: true, result: { ip: db_data.ip, country: db_data.country, region: db_data.region, city: db_data.city, latitude: db_data.latitude, longitude: db_data.longitude, service: db_data.service, ip: req.userip } });
                        return;
                    }
                })
            })
            .catch((error) => {
                res.json({ success: false, message: 'error in getting api from ipinfodb.com' });
                return;
            })

    }

    get_and_set_ip_promise(req, res){

        return new Promise((resolve) => {

            let ip = req.userip;
            let url = `http://api.ipinfodb.com/v3/ip-city/?key=${api_key}&ip=${ip}`

            axios.get(url)
                .then((result) => { return (result.data).split(';') })
                .then((data) => {

                    enter_model.create({ ip, service: 'ip-infodb', country: (data[4]), city: (data[6]), region: (data[5]), latitude: (data[8]), longitude: (data[9]) }, (db_err, db_data) => {

                        if (db_err) {
                            resolve({ success: false, message: 'error in connectig to database' });
                        } else {
                            resolve({ success: true, result: { ip: db_data.ip, country: db_data.country, region: db_data.region, city: db_data.city, latitude: db_data.latitude, longitude: db_data.longitude, service: db_data.service, ip: req.userip } });
                        }
                    })

                })
                .catch((error) => {
                    resolve({ success: false, message: 'error in getting api from ipinfodb.com' });
                })
        })
    }

}