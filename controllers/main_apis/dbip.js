const axios = require('axios'); //imporing package axios

const enter_model = require('./../../models/enter'); //importing enter model

const find_service = require('./../../controllers/find_service');

const service = find_service('dbip')

module.exports = new class App {

    search_collection(req, res, next) {

        enter_model.find({ service: 'db-ip', "createdAt": { $gt: new Date(Date.now() - service.time) } }, (err, data) => {

            if (err) {
                res.json({ success: false, message: 'error in connecting to database', status: 'error' });
                return;
            } else {

                if (data.length > service.number) {

                    res.json({ success: false, message: 'you cant send more than 1000 request to db-ip per day', status: 'more' });
                    return;

                } else {
                    next();
                }
            }
        })
    }



    get_and_set_ip(req, res) {

        let ip = req.userip;
        let url = `http://api.db-ip.com/v2/free/${ip}`

        axios.get(url)
            .then((result) => result.data)
            .then((data) => {

                enter_model.create({ ip, service: 'db-ip', country: data.countryName, city: (data.city), region: (data.stateProv) }, (db_err, db_data) => {

                    if (db_err) {
                        res.json({ success: false, message: 'error in connectig to database' });
                        return;
                    } else {

                        res.json({ success: true, result: { ip: db_data.ip, country: db_data.country, region: db_data.region, city: db_data.city, latitude: db_data.latitude, longitude: db_data.longitude, service: db_data.service } });
                        return;
                    }
                })
            })
            .catch((error) => {
                res.json({ success: false, message: 'error in getting api from dbip.com' });
                return;
            })

    }

    get_and_set_ip_promise(req, res) {

        return new Promise((resolve) => {

            let ip = req.userip;
            let url = `http://api.db-ip.com/v2/free/${ip}`

            axios.get(url)
                .then((result) => result.data)
                .then((data) => {
                    enter_model.create({ ip, service: 'db-ip', country: data.countryName, city: (data.city), region: (data.stateProv) }, (db_err, db_data) => {

                        if (db_err) {
                            resolve({ success: false, message: 'error in connectig to database' });
                        } else {
                            resolve({ success: true, result: { ip: db_data.ip, country: db_data.country, region: db_data.region, city: db_data.city, latitude: db_data.latitude, longitude: db_data.longitude, service: db_data.service } });
                        }
                    })
                })
                .catch((error) => {
                    resolve({ success: false, message: 'error in getting api from dbip.com' });
                })
        })
    }


}