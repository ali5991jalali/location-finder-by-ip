const enter_model = require('./../models/enter'); //calling enter model

/*
you can pass 3 arguments to this promise type fuction and use for yor controllers 
*/

const search_promise = (service, time, limit) => {

    return new Promise((resolve) => {

        enter_model.find({ service: service, "createdAt": { $gt: new Date(Date.now() - (time)) } }, (err, data) => {

            if (err) {
                resolve(false);
            } else {
                if (data.length > limit) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            }
        })
    })
}

module.exports = search_promise;