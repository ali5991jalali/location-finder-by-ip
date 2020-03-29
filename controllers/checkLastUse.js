const mongoose = require('mongoose');

//model
const enterModel = require('./../models/enter');
//end



const checkLastUse = (req, res, next) => {

    let ip = req.params.ip;

    enterModel.findOne({ ip }, (err, result) => {

        if (err) {
            next();
        } else {

            if (result === null) {
                next();
            } else {

                let { ip, country, region, city, latitude, longitude, service } = result;
                res.send({ success: true, 'result': { ip, country, region, city, latitude, longitude, service } });
                return;
            }
        }
    })
}

module.exports = checkLastUse;