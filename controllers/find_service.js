const services = require('./../configs/services')

/**
 * find service from array
 * 
 * @param {String} name 
 */
const find_service = (name) => {

    let service;

    for (var i = 0; i < services.length; ++i) {

        if (services[i].name === name) {
            service = services[i];
            break;
        }
    }
    return service;
}


module.exports = find_service;